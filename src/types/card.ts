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
  extra_details: string;
};

export type CardTypology = {
  name: string;
  icon_url: string;
  icon_name: string;
};

export type CardEnergy = {
  name: string;
  icon_url: string;
};

export type CardVulnerability = {
  value: number;
  icon_url: string;
};

export const Rarity = {
  COMMON: "common",
  UNCOMMON: "uncommon",
  RARE: "rare",
  FOIL: "foil",
  HOLO: "holo",
};
