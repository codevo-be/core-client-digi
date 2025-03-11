import { useMutation } from '@tanstack/react-query'
import { toast } from 'sonner'

import generateSimulation from '@simulation/services/generate-simulation'

export default function useGenerateSimulation() {
    return useMutation({
        mutationFn: generateSimulation,
        onError: (error) => {
            toast.error(error.message);
        },
        onSuccess: () => {
            toast.success('Simulation générée');
        }
    });
}