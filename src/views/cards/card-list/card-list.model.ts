import type { CardListItem } from "@/types/card.ts";

export type CardListProps = {
  className?: string;
  onItemClick?: (item: CardListItem) => void;
};
