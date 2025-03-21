import { ReactNode } from 'react'

interface InputCardContainerProps {
    children: ReactNode;
}

export default function InputCardContainer(props: InputCardContainerProps) {
    return(
        <div className={"px-8 border-2 border-[#8EACC5] overflow-hidden rounded-xl bg-white shadow-md " +
            "peer-checked:scale-105 transition-all hover:cursor-pointer overflow-visible"}>
            {props.children}
        </div>
    )
}