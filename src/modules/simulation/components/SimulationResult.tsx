'use client'

import { useParams } from 'next/navigation'

import ResultCard from '@simulation/components/ResultCard'

export default function SimulationResult() {

    const params = useParams()

    return(
        <div className={"flex justify-between bg-[#E4F1F9]"}>
            <div className={"w-full"}>
                <div className={"flex flex-col items-center"}>

                    <h2 className={"text-[2.8rem] py-[5.2rem] text-[#006EC2]"}>Nous avons estimé l'installation idéale pour vous</h2>

                    <div className={"flex gap-6"}>
                        {Array(4).fill(null).map((_, index) => (
                            <ResultCard key={index}/>
                        ))}
                    </div>
                </div>

                <hr className={"m-[5rem]"}/>

                <div>

                </div>
            </div>
            <aside className={"bg-error w-[35.1rem] h-[90.2rem]"}>
                <p>aside</p>
            </aside>
        </div>
    );
}