import React, { useRef, useState } from 'react'
import { useForm } from 'react-hook-form'
import { Form } from '@digico/ui'
import { NodeNavigator } from '@simulation/DAGmap/NodeNavigator'
import { simulationMap } from '@simulation/DAGmap/SimulationMap'

import { useCreateSimulation } from '@simulation/hooks/mutation/useCreateSimulation'
import { useUpdateSimulation } from '@simulation/hooks/mutation/useUpdateSimulation'
import { CreateSimulationType } from '@simulation/types/create-simulation-type'
import { SimulationType } from '@simulation/types/update-simulation-type'

export default function SimulationForm() {
    const form = useForm<SimulationType>()

    const firstNodeId = 'installation'
    const navigator = new NodeNavigator(simulationMap)
    const [currentNode, setCurrentNode] = useState(navigator.getNode(firstNodeId))
    const history = useRef([firstNodeId])
    const currentNodeId = useRef(firstNodeId)
    const firstNext = useRef(false)

    const simulationId = sessionStorage.getItem('simulationId')

    const createSimulation = useCreateSimulation()
    const updateSimulation = useUpdateSimulation()

    const test = {
        current_step: currentNodeId,
        simulation_id: simulationId
    }

    const shouldCreate = () => {
        if (!firstNext.current && !simulationId) {
            const data: CreateSimulationType = {
                current_step: firstNodeId
            }
            firstNext.current = true;

            createSimulation.mutate(data, {
                onSuccess: (id) => {
                    sessionStorage.setItem('simulationId', id);
                }
            });
        }
    }

    const updateSimulationFn = (data: SimulationType) => {
        shouldCreate();
        data.current_step = navigator.getNextNodeId(currentNodeId.current);
        updateSimulation.mutate(data, {
            onSuccess: () => {
                console.log('Simulation mise à jour (form)');
            }
        });
    }
    const handleNext = () => {
        const nodeId = navigator.getNextNodeId(currentNodeId.current);
        currentNodeId.current = nodeId;
        const node = navigator.getNode(nodeId);
        setCurrentNode(node);
        history.current = [...history.current, nodeId];
    };

    const handleBack = () => {
        const currentHistory = history.current;
        history.current = currentHistory.slice(0, -1);
        const nodeId = currentHistory[currentHistory.length - 2]; // -2 car la suppression n'est pas encore acquise (doit attendre le re-render)
        currentNodeId.current = nodeId;
        const node = navigator.getNode(nodeId);
        setCurrentNode(node);
    };

    const handleSubmit = () => {
        console.log('Submit called');
    };

    return (
        <Form useForm={form} onSubmit={handleSubmit}>
            {React.createElement(currentNode.component, {
                parentData: test,
                handleValue: updateSimulationFn,
                onValid: handleNext,
                onBack: handleBack,
                onSkip: handleNext,
                onSubmit: handleSubmit
            })}
        </Form>
    )
}
//TODO Sur le back des boutons, écraser les valeurs de la question d'avant ?