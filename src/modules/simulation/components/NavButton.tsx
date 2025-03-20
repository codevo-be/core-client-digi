type Props = {
    index: number
    label: string
    isActive: boolean
}

export default function NavButton(props: Props) {

    return(
        <div className={"flex flex-col items-center gap-2"}>
            <div className={"border-1 rounded-full w-[2.1rem] h-[2.1rem] flex items-center justify-center p-4 " +
                `${props.isActive ? "bg-[#0088EE] text-white" : "bg-white"}`}>
                <p className={"text-[1.4rem] text-center"}>{props.index}</p>
            </div>

            <p className={"text-[1.4rem]"}>{props.label}</p>
        </div>
    )
}