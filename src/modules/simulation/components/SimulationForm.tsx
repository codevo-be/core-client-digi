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
    const form = useForm()

    const firstNodeId = 'installation'
    const navigator = new NodeNavigator(simulationMap)
    const [currentNode, setCurrentNode] = useState(navigator.getNode(firstNodeId))
    const history = useRef([firstNodeId])
    const currentNodeId = useRef(firstNodeId)

    const firstNext = useRef(false) //TODO

    const simulationId = sessionStorage.getItem('simulationId')
    const formData = useRef({}); //A renommer

    const createSimulation = useCreateSimulation()
    const updateSimulation = useUpdateSimulation()
    const generateSimulation = useGenerateSimulation();

    const shouldCreateSimulation = async (): Promise<string> => {
        if (!firstNext.current && !simulationId) {
            return new Promise((resolve, reject) => {
                const data: CreateSimulationType = {
                    current_step: firstNodeId
                };
                firstNext.current = true;

                createSimulation.mutate(data, {
                    onSuccess: (id) => {
                        sessionStorage.setItem('simulationId', id);
                        resolve(id);
                    },
                    onError: (error) => {
                        reject(error);
                    }
                });
            });
        }

        return simulationId ?? sessionStorage.getItem('simulationId')!;
    };

    const updateSimulationFn = async (label: string, response: string, proceed: boolean) => {
        try {
            const id = await shouldCreateSimulation(); // On attend d'avoir l'ID avant d'aller plus loin

            // Maintenant qu'on a l'ID, on met à jour formData
            formData.current = { ...formData.current, [label]: response };

            const data: SimulationType = {
                simulation_id: id,
                current_step: navigator.getNextNodeId(currentNodeId.current, formData.current),
                label: label,
                response: response
            };

            updateSimulation.mutate(data, {
                onSuccess: () => {
                    console.log('Simulation mise à jour (form)');
                }
            });

            if (proceed) handleNext();

        } catch (error) {
            console.error("Erreur lors de la création de la simulation:", error);
        }
    };

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

    const handleSubmit = (email: string, zip_code: string, phone: string, country: string) => {
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
        <Form useForm={form} className={"text-[#006EC2] text-[2.8rem] bg-[#E4F1F9]"}>
            {React.createElement(currentNode.component, {
                handleValue: updateSimulationFn,
                onValid: handleNext,
                onBack: handleBack,
                onSkip: handleNext,
                onSubmit: handleSubmit,
                currentValues: formData.current
            })}
        </Form>
    )
}
//TODO Sur le back des boutons, écraser les valeurs de la question d'avant ?