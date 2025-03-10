import { HttpService } from '@simulation/services'

export const updateSimulation = async (data: string) => {
    await HttpService.put<{
        data: string
    }>('/', data);
};