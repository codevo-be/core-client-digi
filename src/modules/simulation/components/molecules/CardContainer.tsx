import { ReactNode } from 'react'

interface InputCardContainerProps {
    children: ReactNode;
    className?: string;
}

export default function InputCardContainer(props: InputCardContainerProps) {
    return(
        <div className={"px-8 border-2 border-[#8EACC5] overflow-hidden rounded-xl bg-white shadow-md " +
            `peer-checked:scale-105 transition-all overflow-visible min-w-fit min-h-fit ${props.className}`}>
            {props.children}
        </div>
    )
}