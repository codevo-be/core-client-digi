import { useQuery } from '@tanstack/react-query'
import getSimulation from '@simulation/services/get-simulation-details'

export default function useGetSimulationDetails(simulationId: string|undefined) {
    if (simulationId === undefined) throw new Error("Undefined simulationID")
    return getSimulation(simulationId)
}