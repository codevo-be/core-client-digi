type Props = {
    label: string,
    value: string
}

export default function StatBox(props: Props) {
    return(
        <div className={"w-[29.2rem] h-[7.5rem] border-2 border-[#D8E7F3] rounded-4xl py-[1.5rem] px-[2.3rem] " +
            "bg-linear-to-b from-[#D8E7F3] to-[#ABC8E0] flex justify-between items-center gap-12 " +
            "text-[#03406E]"}>

            <p className={"text-[1.8rem]"}>{props.label}</p>
            <p className={"text-[3.2rem]"}>{props.value}</p>
        </div>
    );
}