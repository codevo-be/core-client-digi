import { HttpService } from '@simulation/services/index'
import { GenerateSimulationType } from '@simulation/types/generate-simulation-type'

export default async function generateSimulation(simulationId: GenerateSimulationType) {
    const data =  HttpService.post('/generate', simulationId);
    return data;
}