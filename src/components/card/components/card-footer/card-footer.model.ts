import { type CardEnergy, type CardTypology, Rarity } from "@/types/card.ts";

export type CardFooterProps = {
  rarity: (typeof Rarity)[keyof typeof Rarity];
  typology?: CardTypology;
  energy?: CardEnergy;
};
