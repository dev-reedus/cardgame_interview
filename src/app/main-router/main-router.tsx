import { Navigate, Route, Routes } from "react-router-dom";
import classes from "./main-router.module.scss";
import Header from "../../components/header";
import Footer from "../../components/footer";
import NotFoundPage from "../../views/errors/404.tsx";
import Cards from "../../views/cards/cards.tsx";

export const MainRouter: React.FC = () => {
  return (
    <div className={classes.mainRouterWrapper}>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Navigate to="/cards" replace />} />
          <Route path="/cards/*" element={<Cards />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
};

export default MainRouter;
