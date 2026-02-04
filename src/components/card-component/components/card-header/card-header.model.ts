import type { CardTypology } from "@/types/card.ts";

export type CardHeaderProps = {
  cardNumber: string;
  typology?: CardTypology;
  variant?: "default" | "danger" | "expired";
};
