import { useFormContext } from 'react-hook-form'

export type ChoiceInputType = 'radio' | 'checkbox';

interface ChoiceInputProps {
    id: string;
    value: string;
    name: string;
    type: ChoiceInputType;
    onClick: () => void;
    className?: string;
}

export default function ChoiceInput(props: ChoiceInputProps) {
    const { register } = useFormContext();

    return (
        <input
            {...register(props.name)}
            type={props.type}
            id={props.id}
            name={props.name}
            value={props.value}
            onClick={props.onClick}
            className={props.className}
        />
    )
}