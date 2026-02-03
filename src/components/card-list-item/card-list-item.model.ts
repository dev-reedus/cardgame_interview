import type { CardListItem } from "../../types/card.ts";

export type CardListItemProps = {
  item: CardListItem;
  className?: string;
  onClick?: (item: CardListItem) => void;
};
