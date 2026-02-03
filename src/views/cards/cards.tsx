import { Route, Routes } from "react-router-dom";
import CardListPage from "./card-list/card-list.tsx";

const Cards: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<CardListPage />} />
      <Route path="/:id" element={<h1>404 - Page Not Found</h1>} />
    </Routes>
  );
};

export default Cards;
