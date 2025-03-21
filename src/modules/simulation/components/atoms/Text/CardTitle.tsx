import { ReactNode } from 'react'

interface CardTitleProps {
    children: ReactNode;
}

export default function CardTitle(props: CardTitleProps) {
    return (
        <>
            <p className={"text-[#006EC2] text-[2.8rem]"}>{props.children}</p>
        </>
    )
}