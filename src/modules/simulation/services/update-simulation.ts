import { HttpService } from '@simulation/services'
import { SimulationType } from '@simulation/types/simulation'

export const updateSimulation = async (data: SimulationType) => {
    await HttpService.put('/' + data.simulation_id, data);
};