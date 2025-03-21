interface SectionTitleProps {
    content: string
}

export default function SectionTitle(props: SectionTitleProps) {
    return(
        <>
            <h2 className={"text-[2.8rem] text-[#006EC2]"}>{props.content}</h2>
        </>
    )
}