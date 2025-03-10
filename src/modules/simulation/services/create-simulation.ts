import { HttpService } from '@simulation/services'
import { CreateSimulationType } from '@simulation/types/create-simulation-type'

type SimulationResponse = { //TODO le mettre dans un autre fichier ?
    id: string
}

export async function createSimulation(data: CreateSimulationType): Promise<string> {
    const response = await HttpService.post<SimulationResponse>('/', data);
    return response.id;
}