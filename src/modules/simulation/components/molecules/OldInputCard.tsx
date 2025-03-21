import React, { ReactNode } from 'react'
import { useFormContext } from 'react-hook-form'

type OptionType = 'radio' | 'checkbox';

type Props = {
    id: string,
    value: string,
    name: string;
    onClick: () => void,
    type?: OptionType,
    children: ReactNode
};

export const OldInputCard = ({ type = 'radio', ...props }: Props) => {
    const { register } = useFormContext()
    return (
        <label htmlFor={props.id} className="cursor-pointer">
            <input
                {...register(props.name)}
                type={type}
                id={props.id}
                name={props.name}
                value={props.value}
                className="peer hidden"
                onClick={props.onClick}
            />
            <div
                className={
                    'px-8 border-[0.2rem] overflow-hidden rounded-xl bg-white shadow-[0px_4px_19.6px_0px_rgba(19,53,74,0.15)]' +
                    "  peer-checked:scale-105 transition-all border-[#8EACC5]"
                }>

                {props.children}

            </div>
        </label>
    )
}