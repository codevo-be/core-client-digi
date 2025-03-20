'use client'

import React, { useEffect, useRef, useState } from 'react'
import { useForm } from 'react-hook-form'
import { Form } from '@digico/ui'
import { useRouterWithTenant } from '@digico/utils'
import { NodeNavigator } from '@simulation/DAGmap/NodeNavigator'
import { simulationMap } from '@simulation/DAGmap/SimulationMap'
import Cookies from 'js-cookie'

import useCreateSimulation from '@simulation/hooks/mutation/useCreateSimulation'
import useUpdateSimulation from '@simulation/hooks/mutation/useUpdateSimulation'
import useGetSimulationDetails from '@simulation/hooks/queries/useGetSimulationDetails'
import { CreateSimulationType } from '@simulation/types/create-simulation-type'
import { SimulationType } from '@simulation/types/update-simulation-type'

import { InputResponseType } from '@simulation/components/InputResponseType'
import NavBar from '@simulation/components/NavBar'

export default function SimulationForm() {
    const form = useForm()
    const routerWithTenant = useRouterWithTenant()

    const createSimulation = useCreateSimulation()
    const updateSimulation = useUpdateSimulation()

    const firstNodeId = 'installation'
    const navigator = new NodeNavigator(simulationMap)

    const [currentNode, setCurrentNode] = useState(navigator.getNode(firstNodeId))
    const history = useRef([firstNodeId])
    const currentNodeId = useRef(firstNodeId)

    const simulationId = Cookies.get('simulationId')
    const formData = useRef({}); //A renommer

    useEffect(() => { //TODO dans un effect car sinon se refait à chaque changement de section
        useGetSimulationDetails(simulationId)
            .catch(e => {
                console.log(e)
            })
            .then(r => {
                const entries = r.entries;
                formData.current = entries //Error but works

                currentNodeId.current = r.current_step //Error but works
                history.current = navigator.buildHistory(firstNodeId, formData.current, currentNodeId.current)

                for (const entry in entries) {
                    form.setValue(entry, entries[entry])
                }

                setCurrentNode(navigator.getNode(history.current[history.current.length - 1]))
            })
    }, [])


    const shouldCreateSimulation = async (): Promise<string> => {
        if (!simulationId) {
            return new Promise((resolve, reject) => {
                const data: CreateSimulationType = {
                    current_step: firstNodeId
                };

                createSimulation.mutate(data, {
                    onSuccess: (id) => {
                        Cookies.set('simulationId', id)
                        resolve(id);
                    },
                    onError: (error) => {
                        reject(error);
                    }
                });
            });
        }

        return simulationId ?? Cookies.get('simulationId')!;
    };

    const updateSimulationFn = async (values: InputResponseType[], proceed: boolean) => {
        try {
            const id = await shouldCreateSimulation();

            for (const value of values) {
                const label = value['label']
                const response = value['response']
                formData.current = { ...formData.current, [label]: response }
            }

            const data: SimulationType = {
                'simulation_id': id,
                'current_step': currentNodeId.current,
                'values': values
            };

            updateSimulation.mutate(data);

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
        const nodeId = currentHistory[currentHistory.length - 2]; // -2, car la suppression n'est pas encore acquise (doit attendre le re-render)
        currentNodeId.current = nodeId;
        const node = navigator.getNode(nodeId);
        setCurrentNode(node);
    };

    const handleSubmit = (contactValues: InputResponseType[]) => {

        if (simulationId ===  null) throw new Error("Something went wrong, the simulation id is null")

        updateSimulationFn(contactValues, false).then(() => {
            Cookies.remove('simulationId')
            routerWithTenant.push(`/simulation/result/${simulationId}`)
        });
    };

    return (
        <div className={"h-full"}>

            <NavBar/>

            <Form useForm={form} className={"text-[#006EC2] text-[2.8rem] bg-[#E4F1F9] h-full pt-26"}>

                {React.createElement(currentNode.component, {
                    handleValue: updateSimulationFn,
                    onValid: handleNext,
                    onBack: handleBack,
                    onSkip: handleNext,
                    onSubmit: handleSubmit
                })}
            </Form>
        </div>
    )
}
//TODO Sur le back des boutons, écraser les valeurs de la question d'avant ?