import React, { useCallback, useMemo, useState } from "react";
import Loader from "../../components/loader";
import { LoaderContext, type LoaderContextValue } from "./loader-context";

export const LoaderProvider: React.FC<React.PropsWithChildren> = ({
  children,
}) => {
  const [count, setCount] = useState(0);

  const show = useCallback(() => {
    setCount((c) => c + 1);
  }, []);

  const hide = useCallback(() => {
    setCount((c) => Math.max(0, c - 1));
  }, []);

  const track = useCallback(
    async <T,>(promise: Promise<T>) => {
      show();
      try {
        return await promise;
      } finally {
        hide();
      }
    },
    [show, hide],
  );

  const value = useMemo<LoaderContextValue>(
    () => ({ open: count > 0, show, hide, track }),
    [count, show, hide, track],
  );

  return (
    <LoaderContext.Provider value={value}>
      {children}
      <Loader open={value.open} />
    </LoaderContext.Provider>
  );
};
