import { jsonFetch } from "./utils.ts";
import type { CardDetail, CardListItem } from "@/types/card.ts";

export const cardsApi = {
  getCardsList() {
    return jsonFetch<CardListItem[]>("/api/items");
  },

  getCard(id: string) {
    return jsonFetch<CardDetail>(`/api/items/${id}`);
  },
};
