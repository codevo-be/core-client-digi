import { ExistingInstallation } from '@simulation/components/section/existingInstallation/type'

export const existingInstallations: ExistingInstallation[] = [
    {
        id: "hasInstallation",
        label: "Oui",
        subLabel: "J'ai déjà des panneaux",
        value: "hasInstallation",
        imagePath: "/images/noveway/sections/existingInstallation/hasPannels.png",
    },
    {
        id: "hasNoInstallation",
        label: "Non",
        subLabel: "Pas encore de panneaux",
        value: "hasNoInstallation",
        imagePath: "/images/noveway/sections/existingInstallation/hasNoPannels.png"
    }
];