import React, { useRef, useState } from 'react'
import { useForm } from 'react-hook-form'
import { Form } from '@digico/ui'
import { NodeNavigator } from '@simulation/DAGmap/NodeNavigator'
import { simulationMap } from '@simulation/DAGmap/SimulationMap'

import useCreateSimulation from '@simulation/hooks/mutation/useCreateSimulation'
import useGenerateSimulation from '@simulation/hooks/mutation/useGenerateSimulation'
import useUpdateSimulation from '@simulation/hooks/mutation/useUpdateSimulation'
import { CreateSimulationType } from '@simulation/types/create-simulation-type'
import { GenerateSimulationType } from '@simulation/types/generate-simulation-type'
import { SimulationType } from '@simulation/types/update-simulation-type'

export default function SimulationForm() {
    const form = useForm<SimulationType>()

    const firstNodeId = 'networkType'
    const navigator = new NodeNavigator(simulationMap)
    const [currentNode, setCurrentNode] = useState(navigator.getNode(firstNodeId))
    const history = useRef([firstNodeId])
    const currentNodeId = useRef(firstNodeId)
    const firstNext = useRef(false)

    const simulationId = sessionStorage.getItem('simulationId')
    const formData = useRef({}); //A renommer

    const createSimulation = useCreateSimulation()
    const updateSimulation = useUpdateSimulation()
    const generateSimulation = useGenerateSimulation();

    const test = {
        current_step: currentNodeId,
        simulation_id: simulationId
    }

    const shouldCreateSimulation = () => {
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

    const updateSimulationFn = (label: string, response: string) => {
        shouldCreateSimulation();

        formData.current = {...formData.current, [label]: response};

        const data: SimulationType = {
            "simulation_id": sessionStorage.getItem('simulationId')!,
            'current_step': navigator.getNextNodeId(currentNodeId.current, formData.current),
            'label': label,
            'response': response
        }

        updateSimulation.mutate(data, {
            onSuccess: () => {
                console.log('Simulation mise à jour (form)');
            }
        });
    }
    const handleNext = () => {
        const nodeId = navigator.getNextNodeId(currentNodeId.current, formData.current);
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

    const handleSubmit = (email: string, phone: string, zip_code: string) => {
        const data: GenerateSimulationType = {
            'email': email,
            'zip_code': zip_code,
            'phone': phone,
            'simulation_id': simulationId!
        }
        generateSimulation.mutate(data, {
            onSuccess: () => {
                console.log("Génération réussie.");
            }
        })
    };

    return (
        <Form useForm={form} className={"text-[#006EC2] text-[2.8rem]"}>
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