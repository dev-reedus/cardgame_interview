import * as React from "react";
import classes from "./card-banner.module.scss";
import { resolveImageFromAssets } from "@/app/images-loader/images-loader.ts";
import type { CardBannerProps } from "./card-banner.model.ts";

const CardBanner: React.FC<CardBannerProps> = ({ imageUrl, name }) => {
  const src = resolveImageFromAssets(imageUrl, "logo.png");

  return (
    <div className={classes.banner} aria-label={`${name}`}>
      <img className={classes.image} src={src} alt={name} />
    </div>
  );
};

export default CardBanner;
