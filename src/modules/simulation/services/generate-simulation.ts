import { HttpService } from '@simulation/services/index'

export default async function generateSimulation(simulationId: string) {
    return await HttpService.post('/generate', simulationId);
}