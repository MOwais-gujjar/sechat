import { mutation } from "@/convex/_generated/server";
import { useMutation } from "convex/react";
import { useCallback, useState } from "react";

type MutatatioState = 'Idle' | 'success' | 'loading' | 'error';

export const useMutationHandler = <T, P> (Mutation: any) => {

    const [state, setState] = useState<MutatatioState>('Idle');

    const MutationFn = useMutation(Mutation);

    const useMutate = useCallback(async (payload: P): Promise<T | null> => {
        setState('loading');
        try {
            const result = await MutationFn(payload);
            setState('success');
            return result;
        } catch (error) {
            setState('error')
            console.log("Mutation Error", error)
            throw error
        }finally {
            setState('Idle')
        }
    }, [MutationFn])
    return { state, useMutate} 
}