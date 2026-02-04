import * as React from "react";
import { type IconName, icons } from "./icons";

export type IconProps = {
  name: IconName;
  title?: string;
};

export const Icon: React.FC<IconProps> = ({ name, title }) => {
  const Svg = icons[name];

  return <Svg aria-label={title} aria-hidden={title ? undefined : true} />;
};
