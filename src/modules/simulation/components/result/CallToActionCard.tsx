import { ImageBuilder } from '@digico/ui'

type Props = {
    topTag: string
    price: string
    crossedPrice?: string
    buttonLabel: string
    subLabel?: string
    startColor: string
    endColor: string
}

export default function CallToActionCard(props: Props) {
    return(
        <div className={`w-full 
        h-fit px-4 py-[0.8rem] rounded-[2rem]  
        flex flex-col gap-[1.3rem] items-center text-white`}
             style={{
                 background: `linear-gradient(to top right, ${props.startColor}, ${props.endColor})`
             }}
        >

            <div className={"w-full flex flex-col items-center"}>
                <div className={"bg-white/10 w-full flex flex-col items-center rounded-2xl py-2"}>
                    <p className={"text-[1.2rem]"}>{props.topTag}</p>
                </div>

                <div className={"flex items-center gap-4"}>
                    {props.crossedPrice !== undefined &&
                        <p className={"line-through text-[1.4rem]"}>{props.crossedPrice}</p>
                    }

                    <p className={"text-[3rem]"}>{props.price}</p>
                    <p className={"text-[1.6rem]"}>HTVA</p>
                </div>
            </div>

            <button className={"pointer-events-auto bg-white text-[#2A8831] text-[1.6rem] py-4 rounded-[1.4rem] mx-4 w-full" +
                " hover:cursor-pointer flex justify-center gap-[1.2rem]"}>
                <ImageBuilder src={"/icons/noveway/check.svg"} alt={"check"}/>
                <p>{props.buttonLabel}</p>
            </button>

            {props.subLabel !== undefined &&
                <p className={"text-white/60 text-[1.2rem]"}>{props.subLabel}</p>
            }
        </div>
    );
}