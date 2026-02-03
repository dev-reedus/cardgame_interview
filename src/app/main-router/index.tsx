import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

import MainRouterComponent from "./main-router";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="*" element={<MainRouterComponent />} />,
  ),
);

const MainRouter: React.FC = () => {
  return <RouterProvider router={router} />;
};

export default MainRouter;
