import { InputResponseType } from '@simulation/components/InputResponseType'

export type PropsSectionType = {
    handleValue: (values: InputResponseType[], proceed: boolean) => void;
    onBack: () => void;
    onValid: () => void;
    onSubmit: (email: string, zip_code: string, phone: string, country: string) => void;
}