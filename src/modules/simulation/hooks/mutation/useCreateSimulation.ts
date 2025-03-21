import { useMutation } from '@tanstack/react-query'
import { toast } from 'sonner'

import { createSimulation } from '@simulation/services/create-simulation'

export default function useCreateSimulation() {
    return useMutation({
        mutationFn: createSimulation,
        onError: (error) => {
            toast.error(error.message);
        },
        onSuccess: () => {

        }
    });
}