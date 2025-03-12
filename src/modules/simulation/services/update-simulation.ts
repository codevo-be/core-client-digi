import { HttpService } from '@simulation/services'
import { SimulationType } from '@simulation/types/update-simulation-type'

export const updateSimulation = async (data: SimulationType) => {
    await HttpService.put('/' + data.simulation_id, data);
};