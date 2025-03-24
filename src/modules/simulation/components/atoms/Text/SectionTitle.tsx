import { ReactNode } from 'react'

interface SectionTitleProps {
    children: ReactNode
}

export default function SectionTitle(props: SectionTitleProps) {
    return(
        <>
            <h2 className={"text-[2.8rem] text-[#006EC2]"}>{props.children}</h2>
        </>
    )
}