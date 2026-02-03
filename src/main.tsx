import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./assets/styles/global.scss";
import App from "./App.tsx";

async function prepareMocks() {
  const shouldMock =
    import.meta.env.DEV || import.meta.env.VITE_MOCK_ENABLED === "true";
  if (!shouldMock) return;

  const { worker } = await import("./mock-server/handlers.ts");
  await worker.start({
    onUnhandledRequest: "bypass",
  });
}

prepareMocks().then(() => {
  createRoot(document.getElementById("root")!).render(
    <StrictMode>
      <App />
    </StrictMode>,
  );
});
