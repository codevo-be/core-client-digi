import { NetworkType } from '@simulation/components/section/networkType/type'

export const networkTypes: NetworkType[] = [
    {
        id: 'mono',
        label: 'Monophasé 230 V (2 fils)',
        value: 'mono',
        logoPath: '/images/noveway/monophase.png'
    },
    {
        id: 'duo',
        label: 'Triphasé 230 V (3 fils)',
        value: 'duo',
        logoPath: '/images/noveway/triphase.png'
    },
    {
        id: 'trio',
        label: 'Triphasé 400 V + N (4 fils)',
        value: 'mono',
        logoPath: '/images/noveway/triphaseN.png'
    }
]