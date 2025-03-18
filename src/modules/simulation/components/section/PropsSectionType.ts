import { InputResponseType } from '@simulation/components/InputResponseType'

export type PropsSectionType = {
    handleValue: (values: InputResponseType[], proceed: boolean) => void;
    onBack: () => void;
    onValid: () => void;
    onSubmit: (values: InputResponseType[]) => void;
}