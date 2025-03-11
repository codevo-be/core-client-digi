import { HttpService } from '@simulation/services/index'
import { GenerateSimulationType } from '@simulation/types/generate-simulation-type'

export default async function generateSimulation(data: GenerateSimulationType) {
    return await HttpService.post('/generate', data);
}