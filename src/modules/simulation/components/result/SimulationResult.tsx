'use client'

import { useParams, useSearchParams } from 'next/navigation'

import ResultAside from '@simulation/components/result/ResultAside'
import ResultCard from '@simulation/components/result/ResultCard'
import ResultCardDescription from '@simulation/components/result/ResultCardDescription'

export default function SimulationResult() {

    const params = useParams()

    const searchParams = useSearchParams()
    const isEntrepreneur = searchParams.get("entrepeneur")

    return(
        <div className={"flex justify-between bg-[#E4F1F9]"}>
            <div className={"w-full"}>
                <div className={"flex flex-col items-center"}>

                    <h2 className={"text-[2.8rem] py-[5.2rem] text-[#006EC2]"}>Nous avons estimé l&apos;installation idéale pour vous</h2>

                    <div className={"flex gap-6"}>
                        {Array(4).fill(null).map((_, index) => (
                            <ResultCard key={index}/>
                        ))}
                    </div>
                </div>

                <hr className={"m-[5rem] mx-auto w-[107.2rem] border-3 border-[#0000001A] rounded-full"}/>

                <div className={"flex flex-col items-center gap-[3.9rem]"}>
                    {Array(4).fill(null).map((_, index) => (
                        <ResultCardDescription key={index}/>
                    ))}
                </div>
            </div>
            <div className={"min-w-[35.1rem]"}></div>
            <ResultAside isEntrepreneur={Boolean(isEntrepreneur)}/>
        </div>
    );
}