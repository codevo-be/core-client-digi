export type PropsSectionType = {
    handleValue: (label: string, response: string) => void;
    onBack: () => void;
    onValid: () => void;
    onSubmit: (email: string, phone: string, zip_code: string) => void;
}