import { NetworkType } from '@simulation/components/section/electricalNetwork/type'

export const networkTypes: NetworkType[] = [
    {
        id: 'mono',
        label: 'Monophasé 230 V (2 fils)',
        value: 'mono'
    },
    {
        id: 'duo',
        label: 'Monophasé 230 V (2 fils)',
        value: 'duo'
    },
    {
        id: 'trio',
        label: 'Triphasé 400 V + N (4 fils)',
        value: 'mono'
    }
]