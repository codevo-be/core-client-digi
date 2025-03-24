import { ReactNode } from 'react'
import { useFormContext } from 'react-hook-form'

export type InputType = 'text' | 'password' | 'number'

interface InputProps {
    name: string;
    type?: InputType;
    placeholder?: string;
    className?: string;

    prefix?: boolean;
    prefixContent?: ReactNode;

    suffix?: boolean
    suffixContent?: ReactNode
}

export default function Input({ type = 'text', prefix = false, suffix = false, ...props }: InputProps) {

    const { register } = useFormContext()

    return (
        <div className={"relative"}>
            {prefix &&
                <div>
                    { props.prefixContent }
                </div>
            }

            <input { ...register(props.name) } placeholder={props.placeholder} type={type} name={props.name}
            className={`border-1 border-[#8EACC5] rounded-sm px-4 text-[#006EC2] ${props.className}`}/>

            {suffix &&
                <span className={"flex justify-center items-center py-[1.1rem] px-[0.6rem] absolute border-1 border-[#8EACC5] rounded-r-sm top-0 bottom-0 right-0 bg-[#E4F1F9] text-[#006EC2]"}>
                    { props.suffixContent }
                </span>
            }

        </div>
    )
}