import { ImageBuilder } from '@digico/ui'

export default function ResultCard() {

    const data = [
        { label: "Amortissement", value: "9,5 ans" },
        { label: "Economie annuelle d'électricité", value: "396€" },
        { label: "CO2 économisé", value: "1,2T" },
    ];

    return(
        <div className={"flex flex-col gap-[1.9rem] text-white bg-linear-to-tr from-[#023B67] to-[#0B5995] w-[25.6rem] h-[31.3rem] rounded-md p-[1.2rem]"}>

            <p className={"py-[0.3rem] px-[1rem] w-fit text-[1.2rem] rounded-full bg-white/20"}>Indépendance énergétique</p>

            <div className={"flex justify-center items-center"}>
                <div className={"min-w-[7.8rem] min-h-[7.3rem] bg-white/10 rounded-full"}>

                </div>

                <p className={"text-[1.6rem] w-fit"}>Panneaux Photovoltaiques</p>
            </div>

            <div className={"text-[1.4rem] flex flex-col"}>
                {data.map((item, index) => (
                    <div key={index}>
                        <div className="flex justify-between">
                            <p>{item.label}</p>
                            <p>{item.value}</p>
                        </div>
                        {index < data.length - 1 && <hr className="my-2 border-white/10 bg-white/10" />}
                    </div>
                ))}
            </div>

            <a className={"underline text-[1.8rem]"}>En savoir plus</a>
        </div>
    );
}