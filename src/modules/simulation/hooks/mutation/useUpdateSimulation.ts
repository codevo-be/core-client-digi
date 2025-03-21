import { useMutation } from '@tanstack/react-query'
import { toast } from 'sonner'

import { updateSimulation } from '@simulation/services'

export default function useUpdateSimulation() {
    return useMutation({
        mutationFn: updateSimulation,
        onError: (error) => {
            toast.error(error.message);
        },
        onSuccess: () => {

        }
    });
}