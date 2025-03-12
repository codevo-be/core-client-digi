import Image from 'next/image'

import React from 'react'
import { ImageBuilder } from '@digico/ui'

type OptionType = 'radio' | 'checkbox';

type Props = {
    id: string,
    label: string,
    value: string,
    name: string;
    onClick: () => void,
    type?: OptionType,
    logoPath?: string,
    logoStyle?: string,
    boxStyle?: string,
    textStyle?: string
};

export const InputCard = ({ id, label, value, name, onClick, type = 'radio', logoPath, logoStyle, boxStyle, textStyle }: Props) => {
    console.log(logoPath);
    return (
        <label htmlFor={id} className="cursor-pointer">
            <input type={type} id={id} name={name} value={value} className="peer hidden" onClick={ onClick }/>
            <div className={"flex items-center justify-center border-[0.2rem] rounded-xl bg-white shadow-md" +
                    `peer-checked:border-8 transition-all ${boxStyle}`}>
                {logoPath !== undefined &&
                    <img src={logoPath} alt={""} className={logoStyle}/>
                }
                <span className={textStyle}>{label}</span>
            </div>
        </label>
    );
};