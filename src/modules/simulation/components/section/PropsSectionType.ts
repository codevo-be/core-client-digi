export type PropsSectionType = {
    handleValue: (label: string, response: string, proceed: boolean) => void;
    onBack: () => void;
    onValid: () => void;
    onSubmit: (email: string, zip_code: string, phone: string, country: string) => void;
}