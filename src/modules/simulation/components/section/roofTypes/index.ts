import { RoofType } from '@simulation/components/section/roofTypes/type'

export const roofTypes: RoofType[] = [
    {
        id: 'slate',
        label: 'Ardoise',
        value: 'Ardoise',
        imagePath: '/images/noveway/sections/roofType/slate.png',
    },
    {
        id: 'tile',
        label: 'Tuile',
        value: 'Tuile',
        imagePath: '/images/noveway/sections/roofType/tile.png',
    },
    {
        id: 'flat',
        label: 'Plat',
        value: 'Plat',
        imagePath: '/images/noveway/sections/roofType/flat.png',
    },
    {
        id: 'integrated',
        label: 'Intégré en toiture',
        value: 'Intégrée en toiture',
        imagePath: '/images/noveway/sections/roofType/integrated.png',
    },
    {
        id: 'ground_structure',
        label: 'Structure au sol',
        value: 'Structure au sol',
        imagePath: '/images/noveway/sections/roofType/ground_structure.png',
    },
    {
        id: 'sheet_metal',
        label: 'Tôle',
        value: 'Tôle',
        imagePath: '/images/noveway/sections/roofType/sheet_metal.png',
    }
];