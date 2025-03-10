import { queryClient } from '@digico/utils'
import { useMutation } from '@tanstack/react-query'
import { toast } from 'sonner'

import { updateSimulation } from '@simulation/services'

export function useUpdateSimulation() {
    return useMutation({
        mutationFn: updateSimulation,
        onError: (error) => {
            toast.error(error.message);
        },
        onSuccess: () => {
            queryClient.invalidateQueries({
                queryKey: ['simulationId'],
            });

            toast.success('Appel back');
        }
    });
}