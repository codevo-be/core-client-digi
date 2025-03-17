import { InputResponseType } from '@simulation/components/InputResponseType'

export type SimulationType = {
    'simulation_id': string,
    'current_step': string,
    'values': InputResponseType[]
}