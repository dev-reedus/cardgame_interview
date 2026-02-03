import { useContext } from "react";
import { LoaderContext } from "../app/global-loader/loader-context";

export function useGlobalLoader() {
  const ctx = useContext(LoaderContext);
  if (!ctx) {
    throw new Error("useLoader must be used within <LoaderProvider>.");
  }
  return ctx;
}
