import { InputResponseType } from '@simulation/components/InputResponseType'

export type PropsSectionType = {
    handleValue: (values: InputResponseType[]) => void;
    onSubmit: (values: InputResponseType[]) => void;
}