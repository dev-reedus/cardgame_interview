import type { CardListItem } from "@/types/card.ts";

export type CardListItemProps = {
  item: CardListItem;
  className?: string;
  imageWrapperClassName?: string;
  onClick?: (item: CardListItem) => void;
};
