import type { CardListItem } from "@/types/card.ts";

export type BottomSectionProps = {
  className?: string;
  allies: CardListItem[];
  evolutions: CardListItem[];
};
