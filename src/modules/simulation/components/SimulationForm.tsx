import React, { useRef, useState } from 'react'
import { useForm } from "react-hook-form";
import { Form } from "@digico/ui";
import { NodeNavigator } from '@simulation/DAGmap/NodeNavigator'
import { simulationMap } from '@simulation/DAGmap/SimulationMap'

import { useCreateSimulation } from '@simulation/hooks/mutation/useCreateSimulation'
import { useUpdateSimulation } from '@simulation/hooks/mutation/useUpdateSimulation'
import { SimulationType } from "@simulation/types/simulation";
import { CreateSimulationType } from '@simulation/types/create-simulation-type'

export default function SimulationForm() {
    const form = useForm<SimulationType>();

    const firstNodeId = 'installation'
    const navigator = new NodeNavigator(simulationMap);
    const [currentNode, setCurrentNode] = useState(navigator.getNode(firstNodeId));
    const [history, setHistory] = useState([firstNodeId]); //TODO mettre en useRef ? (makes it no render)
    const [currentNodeId, setCurrentNodeId] = useState(firstNodeId); //TODO same here ? (useRef)
    const firstNext = useRef(false);

    const createSimulation = useCreateSimulation();
    const updateSimulation = useUpdateSimulation();

    const updateSimulationFn = (data: SimulationType) => {
        console.log("update called");
        updateSimulation.mutate(data, {
            onSuccess: () => {
                console.log("Simulation mise à jour (form)");
            }
        });
    }

    const handleNext = () => {
        const simulationId = sessionStorage.getItem('simulationId');
        if (!firstNext.current && !simulationId) {
            const data: CreateSimulationType = {
                "current_step": firstNodeId
            }
            firstNext.current = true;

            createSimulation.mutate(data, {
                onSuccess: (id) => {
                    sessionStorage.setItem('simulationId', id);
                    const entryData: SimulationType =
                        {
                            "simulation_id": id,
                            "current_step": firstNodeId,
                            "label": "installationType",
                            "response": "something I still gotta figure"
                        }
                    updateSimulationFn(entryData);
                }
            });
        } else {
            const data: SimulationType = {
                "simulation_id": simulationId!,
                "current_step": currentNodeId,
                "label": "installationType",
                "response": "something"
            };
            updateSimulationFn(data);
        }

        const nodeId = navigator.getNextNodeId(currentNodeId);
        setCurrentNodeId(nodeId);
        const node = navigator.getNode(nodeId);
        setCurrentNode(node);
        setHistory(prev => [...prev, nodeId]);
    };

    const handleBack = () => {
        setHistory(prev =>  prev.slice(0, -1));
        const nodeId = history[history.length - 2]; // -2 car la suppression n'est pas encore acquise (doit attendre le re-render)
        setCurrentNodeId(nodeId);
        const node = navigator.getNode(nodeId);
        setCurrentNode(node);
    };

    const handleSubmit = () => {
        console.log("Submit called");
    };

    return (
        <Form useForm={form} onSubmit={handleSubmit}>
            { React.createElement(currentNode.component, { onValid: handleNext, onBack: handleBack, onSkip: handleNext, onSubmit: handleSubmit }) }
        </Form>
    )
}
//TODO Sur le back des boutons, écraser les valeurs de la question d'avant ?