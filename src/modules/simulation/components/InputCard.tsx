import React from 'react'
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

export const InputCard = ({ id, label, subLabel, value, name, onClick, type = 'radio', logoPath, logoStyle, boxStyle, textStyle }: Props) => {
    return (
        <label htmlFor={id} className="cursor-pointer">
            <input type={type} id={id} name={name} value={value} className="peer hidden" onClick={ onClick }/>
            <div className={"px-8 flex items-center justify-between border-[0.2rem] rounded-xl bg-white shadow-md" +
                    `peer-checked:border-8 transition-all border-[#8EACC5] hover:border-8 ${boxStyle}`}>
                {logoPath !== undefined &&
                    <ImageBuilder src={logoPath} alt={""} className={"min-w-[16rem] w-[16rem] min-h-[16rem] h-[16rem] overflow-hidden"}/>
                }
                <div className={"flex flex-col"}>
                    <p>{label}</p>
                    {subLabel &&
                        <span className={"text-[#90B1C9] text-[2rem]"}>{subLabel}</span>
                    }
                </div>
            </div>
        </label>
    );
};