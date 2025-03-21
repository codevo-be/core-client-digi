'use client'

import { useParams, useSearchParams } from 'next/navigation'

import { useEffect, useState } from 'react'

import useGenerateSimulation from '@simulation/hooks/mutation/useGenerateSimulation'

import ResultAside from '@simulation/components/result/ResultAside'
import ResultCard from '@simulation/components/result/ResultCard'
import ResultCardDescription from '@simulation/components/result/ResultCardDescription'
import { StepNavigation } from '@simulation/components/StepNavigation'
import NavButton from '@simulation/components/NavButton'
import NavBar from '@simulation/components/NavBar'

export default function SimulationResult() {

    const params = useParams()
    if (typeof params.id !==  'string') throw new Error("The id must be a valid string");
    const simulationId: string = params.id

    const searchParams = useSearchParams()
    const isEntrepreneur = searchParams.get("entrepreneur")

    const cardData = [
        { startColor: "#023B67", endColor: "#0B5995" },
        { startColor: "#005873", endColor: "#3989A1" },
        { startColor: "#005E67", endColor: "#18A1AE" },
        { startColor: "#048A80", endColor: "#0DB2A6" }
    ]

    const [loading, setLoading] = useState(true)
    const [data, setCurrentData] = useState({})

    const generateSimulation = useGenerateSimulation()

    useEffect(() => {
        generateSimulation.mutate(
            { "simulation_id": simulationId },
            {
                onSuccess: (r: any) => {
                    console.log(r[0])

                    let newData = {}

                    for (const result of r) {
                        const label = result[0]
                        const value = result[1]
                        newData = { ...newData, [label]: value }
                        setCurrentData(newData)
                    }

                    setLoading(false)
                }
            }
        )
    }, []) //TODO



    return (
        <div className={"relative"}>
            <NavBar/>
            <div className={'flex justify-between bg-[#E4F1F9]'}>

                <div className={'w-full flex flex-col items-center'}>
                    <div className={'flex flex-col items-center'}>
                        <h2 className={'text-[2.8rem] py-[5.2rem] text-[#006EC2]'}>Nous avons estimé l&apos;installation idéale pour vous</h2>

                        <div className={'flex gap-6 relative'}>
                            {cardData.map((_, index) => (
                                <ResultCard key={index} startColor={_.startColor} endColor={_.endColor} data={data} />
                            ))}

                            {loading &&
                                <div className={"backdrop-blur-[2px] z-10 absolute -inset-2 rounded-2xl flex items-center justify-center"}>

                                </div>
                            }
                        </div>

                    </div>

                    <hr className={'m-[5rem] mx-auto w-[107.2rem] border-3 border-[#0000001A] rounded-full'} />

                    <div className={'flex flex-col items-center gap-[3.9rem]'}>
                        <p className={'text-[2.8rem] text-[#006EC2]'}>Détails de votre installation</p>

                        {cardData.map((_, index) => (
                            <ResultCardDescription key={index} startColor={_.startColor} endColor={_.endColor} />
                        ))}
                    </div>
                </div>

                <div className={'min-w-[35.1rem]'}></div>
            </div>
            <ResultAside className={"fixed top-0 right-0"} isEntrepreneur={Boolean(isEntrepreneur)} data={data} />
        </div>
    )
}