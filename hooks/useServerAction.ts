'use client';
import { useState, useTransition } from 'react';

export function useServerAction<TArgs extends any[], TResult>(
  action: (...args: TArgs) => Promise<TResult>,
) {
  const [loading, setLoading] = useState(false);
  const [isPending, startTransition] = useTransition();

  const run = async (...args: TArgs): Promise<TResult> => {
    setLoading(true);
    try {
      const res = await action(...args);
      return res;
    } finally {
      setLoading(false);
    }
  };

  const runInTransition = (...args: TArgs): Promise<TResult> =>
    new Promise<TResult>((resolve, reject) => {
      startTransition(() => {
        action(...args)
          .then(resolve)
          .catch(reject);
      });
    });

  return {
    run,
    runInTransition,
    isLoading: loading || isPending,
    isPending,
  };
}
