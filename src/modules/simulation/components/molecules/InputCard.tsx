import ChoiceInput, { ChoiceInputType } from '@simulation/components/atoms/Input/ChoiceInput'
import InputCardContainer from '@simulation/components/molecules/CardContainer'
import { ReactNode } from 'react'

interface InputCardProps {
    id: string;
    type: ChoiceInputType;
    value: string;
    name: string;
    onClick: () => void;
    children: ReactNode;
}

export default function InputCard(props: InputCardProps) {
    return (
        <label>
            <ChoiceInput
                id={props.id}
                value={props.value}
                name={props.name}
                type={props.type}
                onClick={props.onClick}
                className={"peer hidden"}
            />

            <InputCardContainer className={"hover:cursor-pointer"}>{props.children}</InputCardContainer>
        </label>
    )
}