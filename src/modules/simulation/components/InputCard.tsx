import React from 'react'
import { useFormContext } from 'react-hook-form'
import { ImageBuilder } from '@digico/ui'

type OptionType = 'radio' | 'checkbox';

type Props = {
    id: string,
    label: string,
    subLabel?: string,
    value: string,
    name: string;
    onClick: () => void,
    type?: OptionType,
    logoPath?: string,
    logoStyle?: string,
    boxStyle?: string,
    textStyle?: string
};

export const InputCard = ({ type = 'radio', ...props }: Props) => {
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
                    'px-8 flex items-center justify-between border-[0.2rem] overflow-hidden rounded-xl bg-white shadow-[0px_4px_19.6px_0px_rgba(19,53,74,0.15)]' +
                    ` peer-checked:border-8 transition-all border-[#8EACC5] hover:border-8 ${props.boxStyle}`
                }>
                {props.logoPath !== undefined && (
                    <div className={'h-full'}>
                        <ImageBuilder src={props.logoPath} alt={''} className={`h-full w-full ${props.logoStyle}`} />
                    </div>
                )}

                <div className={'flex flex-col'}>
                    <p>{props.label}</p>
                    {props.subLabel && <span className={`text-[#90B1C9] text-[2rem]`}>{props.subLabel}</span>}
                </div>
            </div>
        </label>
    )
}