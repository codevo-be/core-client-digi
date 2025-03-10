import React, { useState } from 'react'
import { useForm } from "react-hook-form";
import { Form } from "@digico/ui";
import { NodeNavigator } from '@simulation/DAGmap/NodeNavigator'
import { simulationMap } from '@simulation/DAGmap/SimulationMap'

import { useUpdateSimulation } from '@simulation/hooks/mutation/useUpdateSimulation'
import { SimulationType } from "@simulation/types/simulation";

export default function SimulationForm() {
    const form = useForm<SimulationType>();

    const firstNodeId = 'installation'
    const navigator = new NodeNavigator(simulationMap);
    const [currentNode, setCurrentNode] = useState(navigator.getNode(firstNodeId));
    const [history, setHistory] = useState([firstNodeId]);
    const [currentNodeId, setCurrentNodeId] = useState(firstNodeId);

    const handleNext = () => {
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

    const createSimulation = useUpdateSimulation();

    const handleSubmit = () => {
        createSimulation.mutate('test',  {
            onSuccess: () => {
                console.log("yipee");
            }
        });
    };

    return (
        <Form useForm={form} onSubmit={handleSubmit}>
            { React.createElement(currentNode.component, { onValid: handleNext, onBack: handleBack, onSkip: handleNext, onSubmit: handleSubmit }) }
        </Form>
    )
}

//TODO LA collection demande une clef pour les reacts node  -> enregistrer la clef dans les cookies, enregistrer
// l'état du form au changement avec le next/skip

//TODO Sur le back des boutons, écraser les valeurs de la question d'avant ?