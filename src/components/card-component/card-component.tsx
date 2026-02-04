import * as React from "react";
import classes from "./card-component.module.scss";
import { resolveImageFromAssets } from "@/app/images-loader/images-loader.ts";

import type { CardPreviewPanelProps } from "./card-component.model.ts";
import CardStatItem from "./components/card-stat-item";
import CardHeader from "./components/card-header";
import CardBody from "./components/card-body";
import CardFooter from "./components/card-footer";
import cn from "classnames";

export const CardPreviewPanel: React.FC<CardPreviewPanelProps> = ({
  card,
  className,
}) => {
  const src = resolveImageFromAssets(card.image_url, "logo.png");

  return (
    <div className={cn(classes.panel, className)}>
      <CardHeader cardNumber={card.card_number} typology={card.typology} />

      <div className={classes.imageWrap}>
        <img className={classes.image} src={src} alt={card.name} />
      </div>

      <CardBody name={card.name} description={card.short_description} />

      <div className={classes.statsBar} aria-label="Card stats">
        <CardStatItem icon="equalizer" label="Lv." value={card.level} />
        <CardStatItem
          icon={card.vulnerability.icon_name}
          label="Vul."
          value={card.vulnerability.value}
        />
        <CardStatItem icon="heart" label="Ps." value={card.health_points} />
      </div>

      <CardFooter
        rarity={card.rarity}
        typology={card.typology}
        energy={card.energy}
      />
    </div>
  );
};

export default CardPreviewPanel;
