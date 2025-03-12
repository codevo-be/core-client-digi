import { ExistingInstallation } from '@simulation/components/section/existingInstallation/type'

export const existingInstallations: ExistingInstallation[] = [
    {
        id: "hasInstallation",
        label: "Oui",
        subLabel: "J'ai déjà des panneaux",
        value: "hasInstallation",
        logoPath: "/images/noveway/hasPannels.png",
    },
    {
        id: "hasNoInstallation",
        label: "Non",
        subLabel: "Pas encore de panneaux",
        value: "hasNoInstallation",
        logoPath: "/images/noveway/hasPannels.png"
    }
];