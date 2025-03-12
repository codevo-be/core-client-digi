import Image from 'next/image'

import React from 'react'

type OptionType = 'radio' | 'checkbox';

type Props = {
    id: string,
    label: string,
    value: string,
    name: string;
    onClick: () => void,
    type?: OptionType,
    logoPath?: string
};

export const InputCard = ({ id, label, value, name, onClick, type = 'radio', logoPath }: Props) => {

    return (
        <label htmlFor={id} className="cursor-pointer">
            <input type={type} id={id} name={name} value={value} className="peer hidden" onClick={ onClick }/>
            <div className="w-80 h-36 flex items-center justify-center border-2 border-[#8EACC5] rounded-xl bg-white shadow-md
                    peer-checked:border-8 transition-all">
                {logoPath !== undefined &&
                    <Image src={logoPath} alt={""} width={50} height={100}/>
                }
                <span className="text-lg font-medium text-[#006EC2]">{label}</span>
            </div>
        </label>
    );
};