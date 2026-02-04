import type { IconName } from "@/components/icon";

export type CardListItem = {
  id: string;
  name: string;
  short_description: string;
  image_url: string;
};

export type CardDetail = CardListItem & {
  subtitle: string;
  card_number: string;
  level: number;
  health_points: number;
  rarity: (typeof Rarity)[keyof typeof Rarity];
  long_description: string;
  typology: CardTypology;
  energy: CardEnergy;
  vulnerability: CardVulnerability;
  extra_details: CardExtraDetails;
};

export type CardExtraDetails = {
  evolutions: CardListItem[];
  allies: CardListItem[];
};

export type CardTypology = {
  name: string;
  icon_url: string;
  icon_name: IconName;
};

export type CardEnergy = {
  name: string;
  icon_url: string;
  icon_name: IconName;
};

export type CardVulnerability = {
  value: number;
  icon_url: string;
};

export const Rarity = {
  BASE: "pokémon_base",
  FIRST: "prima_evoluzione",
  SECOND: "seconda_evoluzione",
};
