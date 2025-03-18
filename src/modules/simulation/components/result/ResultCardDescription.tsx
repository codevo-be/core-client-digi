import { useEffect, useState } from 'react'

type Props = {
    startColor: string
    endColor: string
}

export default function ResultCardDescription(props: Props){

    const data = [
        { label: "Amortissement", value: "9,5 ans" },
        { label: "Economie annuelle d'électricité", value: "396€" },
        { label: "Production d'électricité annuelle", value: "3274 kWh" },
        { label: "Puissance de l'installation", value: "3,5 kWc" }
    ];

    const [inputValue, setInputValue] = useState(0)
    const handlePlusButton = () => {
        setInputValue((prev) => prev + 1)
    }
    const handleMinusButton = () => {
        setInputValue((prev) => {
            if (prev > 0) return prev - 1
            return 0
        })
    }

    return(
        <div
            className={"w-[107.1rem] h-[56.3rem] rounded-2xl text-white p-[3.6rem]"}
            style={{
                background: `linear-gradient(to top right, ${props.startColor}, ${props.endColor})`
            }}
        >
            <div className={"flex gap-[1.7rem] items-center"}>
                <div className={"min-w-[7.8rem] min-h-[7.3rem] bg-white/10 rounded-full"}>

                </div>

                <p className={"text-[2.8rem] w-fit"}>Mes panneaux photovoltaiques</p>
            </div>

            <div className={"flex gap-[5.5rem] h-[38.6rem] max-h-[38.6rem]"}>
                <div className={"text-[1.4rem] flex flex-col grow"}>

                    <div className={"flex justify-between px-[1.2rem] py-[1.9rem]"}>

                        <p className={"text-[2.4rem]"}>Nombre de panneaux</p>

                        <div className={"flex gap-[1.9rem] text-[2.8rem]"}>
                            <button type={"button"} className={"w-[5.2rem] h-[5.2rem] hover:cursor-pointer rounded-full bg-[#8EACC5]"}
                                    onClick={handleMinusButton}>
                                -
                            </button>

                            <input type={"number"} className={"py-[1.1rem] px-[1.5rem] text-[#006EC2] w-[11.7rem] h-[5.2rem] bg-white border-2 " +
                                "border-[#8EACC5] rounded-2xl " +
                                "appearance-none [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none"}
                                   defaultValue={inputValue}
                            />

                            <button type={"button"} className={"w-[5.2rem] h-[5.2rem] hover:cursor-pointer rounded-full bg-[#8EACC5]"}
                                    onClick={handlePlusButton}>
                                +
                            </button>
                        </div>

                    </div>

                    <hr className="my-2 border-2 rounded-full border-white/10 bg-white/10" />

                    <div className={"grow flex flex-col justify-evenly"}>
                        {data.map((item, index) => (
                            <div key={index}>

                                <div className="flex justify-between px-[1.2rem]">
                                    <p className={"text-[2.4rem]"}>{item.label}</p>
                                    <p className={"text-[2.8rem]"}>{item.value}</p>
                                </div>

                                {index < data.length - 1 && <hr className="my-2 border-2 rounded-full border-white/10 bg-white/10" />}
                            </div>
                        ))}
                    </div>
                </div>

                <aside className={"bg-white/40 w-[31.8rem] h-[38.6rem] text-[#023A65] px-12 py-14 rounded-3xl"}>

                    <p className={"text-[2.4rem]"}>Inclus dans l&apos;offre</p>

                    <ul className={"text-[1.4rem] flex flex-col gap-[1.4rem]"}>
                        <li>Visite technique & étude</li>
                        <li>Installation panneaux & onduleur</li>
                        <li>Réception électrique (Vinçotte)</li>
                        <li>Commande effective sous réserve de votre approbation lors de la visite technique</li>
                        <li>Visite technique & étude</li>
                        <li>Validation du devis nécessaire par NOVEWAY (&gt;50KM)</li>
                    </ul>

                </aside>
            </div>
        </div>
    );
}