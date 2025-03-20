import { useState } from 'react'
import { ImageBuilder } from '@digico/ui'

import CallToActionCard from '@simulation/components/result/CallToActionCard'
import ContactLabel from '@simulation/components/result/ContactLabel'
import StatBox from '@simulation/components/result/StatBox'

type Props = {
    isEntrepreneur: boolean;
    data: any;
    className: string;
}

export default function ResultAside(props: Props) {

    const statBoxData = [
        { label: "% d'autonomie", value: "75%" },
        { label: "Economie annuelle", value: props.data['Economie annuelle'] },
        { label: "CO2 économisé par année", value: "1,2T" }
    ]

    const contactLabelData = [
        { type: "phone", value: "+32 84 39 61 17" },
        { type: "email", value: "Envoyer un mail" }
    ]

    const min = 5
    const max = 15
    const step = 1
    const [rangeValue, setRangeValue] = useState(10)

    const handleMinusClicked = () => {
        setRangeValue((prev) => {
            if (prev - step > min) return prev - step
            return min
        })
    }

    const handlePlusClicked = () => {
        setRangeValue((prev) => {
            if (prev + step < max) return prev + step
            return max
        })
    }

    const handleRangeChange = (event: any) => {
        setRangeValue(event.target.value); // Mettre à jour la valeur du slider dans l'état
    };


    return (
        <div className={props.className}>
            <div className={"bg-white w-[35.1rem] h-screen flex flex-col items-center px-12 py-[3.1rem] gap-[7.3rem]"}>
                <div className={"flex flex-col gap-[1.8rem]"}>
                    {statBoxData.map((item, index) => (
                        <StatBox key={index} label={item.label} value={item.value} />
                    ))}
                </div>

                <div className={"flex flex-col items-center gap-[1.7rem] w-full"}>
                    <div className={"flex gap-4 w-full"}>
                        <div className={"w-[4.7rem] h-[4.7rem] rounded-full overflow-hidden"}>
                            <ImageBuilder src={"/images/noveway/noveway_ceo.png"} alt={"CEO de noveway"}/>
                        </div>
                        <div>
                            <p className={"text-[2rem] text-[#023A65]"}>Matthieu Wuidar</p>
                            <p className={"text-[1.6rem] text-[#90B1C9]"}>CEO de noveway</p>
                        </div>
                    </div>

                    <div className={"flex flex-col gap-[0.7rem] w-full"}>
                        {contactLabelData.map((item, index) => (
                            <ContactLabel key={index} type={item.type} value={item.value}/>
                        ))}
                    </div>

                    {props.isEntrepreneur ? (
                        <div className={"flex flex-col items-center gap-[2.1rem]"}>

                            <div className={"flex flex-col items-center w-full gap-[1.6rem]"}>

                                <p className={"text-[2rem] text-[#023A65] self-start"}>Définissez votre marge</p>

                                <div className={"flex flex-col items-center gap-[0.9rem] "}>

                                    <p className={"text-[#2A8831] text-[3.2rem]"}>{rangeValue}% de marge</p>

                                    <div className={"flex justify-between gap-[1.4rem] w-full"}>
                                        <button onClick={handleMinusClicked} className={"pointer-events-auto bg-[#8EACC5] rounded-full w-[3.6rem] h-[3.6rem] text-white hover:cursor-pointer"}>-</button>
                                        <input onChange={handleRangeChange} type={"range"} className={"pointer-events-auto accent-[#2A8831] w-[18rem]"} step={step} defaultValue={rangeValue} min={min} max={max}/>
                                        <button onClick={handlePlusClicked} className={"pointer-events-auto bg-[#8EACC5] rounded-full w-[3.6rem] h-[3.6rem] text-white hover:cursor-pointer"}>+</button>
                                    </div>
                                </div>
                            </div>

                            <CallToActionCard topTag={"Prix conseillé de vente pour votre client"}
                                              price={"4.335€"}
                                              buttonLabel={"Envoyer l'offre à mon client"}
                                              startColor={"#048A80"}
                                              endColor={"#0DB2A6"}
                            />
                        </div>
                    ) : (
                        <div className={"flex flex-col items-center gap-4 w-full"}>
                            <CallToActionCard topTag={"Winter deal + commande instantanée"}
                                              price={props.data["Prix HTVA - Avec réduction"]}
                                              crossedPrice={props.data["Prix HTVA - Sans réduction"]}
                                              buttonLabel={"Je commande"}
                                              subLabel={"Commande sans engagement"}
                                              startColor={"#005E67"}
                                              endColor={"#18A1AE"}
                            />

                            <p className={"text-[1.8rem] text-[#8F8F8F]"}>OU</p>

                            <CallToActionCard topTag={"Winter deal + commande instantanée"}
                                              price={props.data["Prix HTVA - Avec réduction"]}
                                              crossedPrice={props.data["Prix HTVA - Sans réduction"]}
                                              buttonLabel={"Prendre rendez-vous"}
                                              startColor={"#048A80"}
                                              endColor={"#0DB2A6"}
                            />
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}