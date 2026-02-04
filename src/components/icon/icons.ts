import Star from "@/assets/icons/star.svg";
import ArrowBack from "@/assets/icons/arrow-back.svg";
import Equalizer from "@/assets/icons/equalizer.svg";
import Heart from "@/assets/icons/heart.svg";
import Fire from "@/assets/icons/fire.svg";
import Skull from "@/assets/icons/skull.svg";
import Water from "@/assets/icons/water.svg";
import HeartOutline from "@/assets/icons/heart-outline.svg";
import Loader from "@/assets/icons/loader.svg";
import Leaf from "@/assets/icons/leaf.svg";

export const icons = {
  "arrow-back": ArrowBack,
  "heart-outline": HeartOutline,
  equalizer: Equalizer,
  heart: Heart,
  fire: Fire,
  skull: Skull,
  star: Star,
  water: Water,
  loader: Loader,
  leaf: Leaf,
} as const;

export type IconName = keyof typeof icons;
