'use client'

import React, { useRef } from 'react'
import { useForm } from 'react-hook-form'
import { Form } from '@digico/ui'
import { useRouterWithTenant } from '@digico/utils'
import NodeNavigatorProvider from '@simulation/context/NodeNavigatorProvider'
import { simulationMap } from '@simulation/DAGmap/SimulationMap'
import Cookies from 'js-cookie'

import useCreateSimulation from '@simulation/hooks/mutation/useCreateSimulation'
import useUpdateSimulation from '@simulation/hooks/mutation/useUpdateSimulation'
import { CreateSimulationType } from '@simulation/types/create-simulation-type'
import { SimulationType } from '@simulation/types/update-simulation-type'

import { InputResponseType } from '@simulation/components/InputResponseType'
import NavBar from '@simulation/components/NavBar'
import SectionContainer from '@simulation/components/SectionContainer'

export default function SimulationForm() {
    const form = useForm()
    const routerWithTenant = useRouterWithTenant()

    const createSimulation = useCreateSimulation()
    const updateSimulation = useUpdateSimulation()

    const firstNodeId = 'installation'
    const simulationId = Cookies.get('simulationId')

    /*useEffect(() => { //TODO dans un effect car sinon se refait à chaque changement de section
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
    }, [])*/

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

    const updateSimulationFn = async (values: InputResponseType[]) => {
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

        } catch (error) {
            console.error("Erreur lors de la création de la simulation:", error);
        }
    };

    const handleSubmit = (contactValues: InputResponseType[]) => {

        if (simulationId ===  null) throw new Error("Something went wrong, the simulation id is null")

        updateSimulationFn(contactValues).then(() => {
            Cookies.remove('simulationId')
            routerWithTenant.push(`/simulation/result/${simulationId}`)
        });
    };

    const formData = useRef<any>({}) //todo rename à conditions

    return (
        <div className={'h-full'}>
            <Form useForm={form} className={'text-[#006EC2] text-[2.8rem] bg-[#E4F1F9] h-full'}>
                <NodeNavigatorProvider conditions={formData} nodeMap={simulationMap} startNodeId={'installation'}>
                    <NavBar />

                    <SectionContainer data={formData} />

                </NodeNavigatorProvider>
            </Form>
        </div>
    )
}
//TODO Sur le back des boutons, écraser les valeurs de la question d'avant ?