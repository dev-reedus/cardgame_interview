import { Route, Routes } from "react-router-dom";
import CardListPage from "./card-list";
import CardDetail from "./card-detail";

const Cards: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<CardListPage />} />
      <Route path="/:id" element={<CardDetail />} />
    </Routes>
  );
};

export default Cards;
