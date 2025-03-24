'use client'

import React, { useEffect, useRef } from 'react'
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

    const firstNodeId = 'houseConsumption'
    const simulationId = Cookies.get('simulationId')

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

    const updateData = async (currentNodeId: string, values: InputResponseType[]) => {
        try {
            const id = await shouldCreateSimulation();

            const data: SimulationType = {
                'simulation_id': id,
                'current_step': currentNodeId,
                'values': values
            };

            updateSimulation.mutate(data);

        } catch (error) {
            console.error("Erreur lors de la création de la simulation:", error);
        }
    };

    const handleSubmit = (contactValues: InputResponseType[]) => {

        if (simulationId ===  null) throw new Error("Something went wrong, the simulation id is null")

        updateData('contactInfo', contactValues).then(() => {
            Cookies.remove('simulationId')
            routerWithTenant.push(`/simulation/result/${simulationId}`)
        });
    };

    const conditions = useRef<any>({})

    return (
        <div className={'h-full'}>
            <Form useForm={form} className={'text-[#006EC2] text-[2.8rem] bg-[#E4F1F9] h-full'}>
                <NodeNavigatorProvider conditions={conditions} nodeMap={simulationMap} startNodeId={firstNodeId}>
                    <NavBar />

                    <SectionContainer handleValue={updateData} data={conditions} />

                </NodeNavigatorProvider>
            </Form>
        </div>
    )
}
//TODO Sur le back des boutons, écraser les valeurs de la question d'avant ?