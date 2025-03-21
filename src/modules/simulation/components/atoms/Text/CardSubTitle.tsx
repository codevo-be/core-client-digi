import { ReactNode } from 'react'

interface CardSubTitleProps {
    children: ReactNode
}

export default function CardSubTitle(props: CardSubTitleProps) {
    return (
        <>
            <p className={"text-[#90B1C9] text-[2rem]"}>{props.children}</p>
        </>
    )
}