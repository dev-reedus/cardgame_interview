import { jsonFetch } from "./utils.ts";
import type { CardListItem } from "@/types/card.ts";

export type CardDetail = CardListItem & {
  longDesc: string;
  tags: string[];
};

export type JobStatus = "queued" | "running" | "succeeded" | "failed";

export const cardsApi = {
  getCardsList() {
    return jsonFetch<CardListItem[]>("/api/items");
  },

  getCard(id: string) {
    return jsonFetch<CardDetail>(`/api/items/${id}`);
  },
};
