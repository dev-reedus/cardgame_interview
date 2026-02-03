import { createContext } from "react";

export type LoaderContextValue = {
  open: boolean;
  show: () => void;
  hide: () => void;
  track: <T>(promise: Promise<T>) => Promise<T>;
};

export const LoaderContext = createContext<LoaderContextValue | null>(null);
