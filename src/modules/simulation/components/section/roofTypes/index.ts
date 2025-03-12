import { RoofType } from '@simulation/components/section/roofTypes/type'

export const roofTypes: RoofType[] = [
    {
        id: 'slate',
        label: 'Ardoise',
        value: 'slate',
        imagePath: '/images/noveway/slate.png',
    },
    {
        id: 'tile',
        label: 'Tuile',
        value: 'tile',
        imagePath: '/images/noveway/tile.png',
    },
    {
        id: 'flat',
        label: 'Plat',
        value: 'flat',
        imagePath: '/images/noveway/flat.png',
    },
    {
        id: 'integrated',
        label: 'Intégré en toiture',
        value: 'integrated',
        imagePath: '/images/noveway/integrated.png',
    },
    {
        id: 'ground_structure',
        label: 'Structure au sol',
        value: 'ground_structure',
        imagePath: '/images/noveway/ground_structure.png',
    },
    {
        id: 'sheet_metal',
        label: 'Tôle',
        value: 'sheet_metal',
        imagePath: '/images/noveway/sheet_metal.png',
    }
];