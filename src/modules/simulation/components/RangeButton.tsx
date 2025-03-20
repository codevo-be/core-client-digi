import { ReactNode } from 'react'

type Props = {
    children: ReactNode;
    handleClick: () => void;
}

export default function RangeButton(props: Props) {
    return (
        <button type={"button"} onClick={props.handleClick} className={"rounded-full text-white flex justify-center items-center w-[5.1rem] h-[5.1rem] bg-[#8EACC5] hover:cursor-pointer"}>
            {props.children}
        </button>
    )
}