import { Route, Routes } from "react-router-dom";
import CardListPage from "./card-list";
import CardDetail from "./card-detail";
import NotFoundPage from "@/views/errors";

const Cards: React.FC = () => {
  return (
    <Routes>
      <Route index path="/" element={<CardListPage />} />
      <Route path="/:id" element={<CardDetail />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
};

export default Cards;
