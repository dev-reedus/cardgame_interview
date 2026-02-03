import MainRouter from "./app/main-router";
import { LoaderProvider } from "./app/global-loader/loader-provider.tsx";

function App() {
  return (
    <LoaderProvider>
      <MainRouter />
    </LoaderProvider>
  );
}

export default App;
