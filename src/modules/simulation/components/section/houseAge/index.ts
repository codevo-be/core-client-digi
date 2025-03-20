import AgeType from '@simulation/components/section/houseAge/type'

export const ageTypes: AgeType[] = [
    {
        id: 'bigger10',
        label: 'Elle a + de 10 ans',
        value: 'Oui',
        prefix: "> 10 ans"
    },
    {
        id: 'lower10',
        label: 'Elle a - de 10 ans',
        value: 'Non',
        prefix: "< 10 ans"
    }
];