import { useEffect } from 'react';

const useEffectAsync = (
    effect: () => Promise<void>,
    deps?: React.DependencyList | undefined,
): void => {
    return useEffect(() => {
        const effectAsync = async () => effect();
        effectAsync();
    }, deps);
};

export default useEffectAsync;
