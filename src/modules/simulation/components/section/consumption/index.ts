import RadioType from '@simulation/components/section/consumption/radio-type'

export const radio_types: RadioType[] = [
    {
        id: 'duo',
        label: '2 personnes',
        sub: '+/- 2800 kWh',
        value: 'duo'
    },
    {
        id: 'family',
        label: '4 personnes',
        sub: '+/- 4500 kWh',
        value: 'family'
    },
    {
        id: 'full',
        label: '4 personnes + pompe à chaleur',
        sub: '+/- 850 kWh',
        value: 'full'
    }
];