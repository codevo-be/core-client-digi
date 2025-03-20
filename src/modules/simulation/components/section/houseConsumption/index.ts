import RadioType from '@simulation/components/section/houseConsumption/radio-type'

export const radio_types: RadioType[] = [
    {
        id: 'duo',
        label: '2 personnes',
        subLabel: '+/- 2800 kWh',
        value: 'duo',
        imagePath: "/images/noveway/sections/houseConsumption/duo.png"
    },
    {
        id: 'family',
        label: '4 personnes',
        subLabel: '+/- 4500 kWh',
        value: 'family',
        imagePath: "/images/noveway/sections/houseConsumption/family.png"
    },
    {
        id: 'full',
        label: '4 personnes + pompe à chaleur',
        subLabel: '+/- 8500 kWh',
        value: 'full',
        imagePath: "/images/noveway/sections/houseConsumption/family_with_heat_pomp.png"
    }
];