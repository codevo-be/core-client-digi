import { NodeMap } from '@simulation/DAGmap/NodeMap'

import ConsumptionSection from '@simulation/components/section/consumption/ConsumptionSection'
import ContactInformationSection from '@simulation/components/section/contactInformation/ContactInformationSection'
import ElectricCarMileageSection from '@simulation/components/section/electricCarMileage/ElectricCarMileageSection'
import EnterpriseTypeSection from '@simulation/components/section/enterprise/EnterpriseTypeSection'
import ExistingInstallationSection from '@simulation/components/section/existingInstallation/ExistingInstallationSection'
import HourPerDaySection from '@simulation/components/section/hourPerDay/HourPerDaySection'
import HouseAgeSection from '@simulation/components/section/houseAge/HouseAgeSection'
import HouseOrientationSection from '@simulation/components/section/houseOrientation/HouseOrientationSection'
import HouseSizeSection from '@simulation/components/section/houseSize/HouseSizeSection'
import InstallationTypeSection from '@simulation/components/section/installation/InstallationTypeSection'
import InstallationInformationSection from '@simulation/components/section/installationInformation/InstallationInformationSection'
import InterestSection from '@simulation/components/section/interest/InterestSection'
import NetworkTypeSection from '@simulation/components/section/networkType/NetworkTypeSection'
import PossessionSection from '@simulation/components/section/possession/PossessionSection'
import RoofTypeSection from '@simulation/components/section/roofTypes/RoofTypeSection'


export const simulationMap: NodeMap = {
    nodes: {
        installation: { component: InstallationTypeSection },
        enterpriseType: { component: EnterpriseTypeSection },
        interest: { component: InterestSection },
        consumption: { component: ConsumptionSection },
        existingInstallation: { component: ExistingInstallationSection },
        installationInformation: { component: InstallationInformationSection },
        hourPerDay: { component: HourPerDaySection },
        networkType: { component: NetworkTypeSection },
        houseOrientation : { component: HouseOrientationSection },
        houseSize : { component: HouseSizeSection },
        houseAge : { component: HouseAgeSection },
        roofType : { component: RoofTypeSection },
        possession : { component: PossessionSection },
        electricCarMileage : { component: ElectricCarMileageSection },
        contactInformation : { component: ContactInformationSection }
    },
    paths: {
        installation: [
            {
                next: "enterpriseType",
                condition: (formData: any) => formData.installationType === "enterprise"
            },
            {
                next: "interest",
                condition: (formData: any) => formData.installationType === "private"
            }
        ],
        enterpriseType: [
            {
                next: "interest",
            },
        ],
        interest: [
            {
                next: 'consumption'
            },
        ],
        consumption: [
            {
                next: 'existingInstallation'
            },
        ],
        existingInstallation: [
            {
                next: 'installationInformation'
            },
        ],
        installationInformation: [
            {
                next: 'hourPerDay'
            },
        ],
        hourPerDay: [
            {
                next: 'networkType'
            },
        ],
        networkType: [
            {
                next: 'houseOrientation'
            }
        ],
        houseOrientation: [
            {
                next: 'houseSize'
            }
        ],
        houseSize: [
            {
                next: 'houseAge'
            }
        ],
        houseAge: [
            {
                next: 'roofType'
            }
        ],
        roofType: [
            {
                next: 'possession'
            }
        ],
        possession: [
            {
                next: 'electricCarMileage'
            }
        ],
        electricCarMileage: [
            {
                next: 'contactInformation'
            }
        ]
    }
}