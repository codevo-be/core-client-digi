import { HttpService } from '@simulation/services'
import { SimulationDetailsType } from '@simulation/types/simulation-details-type'

export default async function getSimulationDetails(simulationId: string) {
    if (simulationId === undefined) throw new Error("Undefined simulationID")
    return HttpService.get<{
        data: SimulationDetailsType
    }>(`/${simulationId}`)
}