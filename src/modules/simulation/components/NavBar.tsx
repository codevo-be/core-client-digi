import NavButton from '@simulation/components/NavButton'

export default function NavBar() {

    const selected = 0

    const parts = [
        "Simulation",
        "Votre offre",
        "Commander"
    ]

    return(
        <div className={"w-full h-[7.4rem] bg-white px-[52.9rem] flex items-center"}>

            <div className={"flex justify-between w-full"}>

                {parts.map((item, index) => {
                    const isActive = index === selected
                    return <NavButton key={index} index={index + 1} label={item} isActive={isActive} />
                } )}

            </div>
        </div>
    )
}