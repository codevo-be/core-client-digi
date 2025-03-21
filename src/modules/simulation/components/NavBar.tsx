import { ImageBuilder } from '@digico/ui'

import NavButton from '@simulation/components/NavButton'

export default function NavBar() {

    const selected = 0

    const parts = [
        "Simulation",
        "Votre offre",
        "Commander"
    ]

    return(
        <div className={"w-full h-[7.4rem] bg-white px-[52.9rem] flex items-center relative"}>

            <button type={"button"} className={"absolute left-10 flex items-center border border-[#8EACC5] gap-4 rounded-full px-[1.4rem] hover:cursor-pointer"}>
                <ImageBuilder src={"/icons/noveway/back_arrow.svg"} />
                <p className={"text-[1.6rem] text-[#8EACC5]"}>Retour</p>
            </button>

            <div className={"flex justify-between w-full"}>

                {parts.map((item, index) => {
                    const isActive = index === selected
                    return <NavButton key={index} index={index + 1} label={item} isActive={isActive} />
                } )}

            </div>
        </div>
    )
}