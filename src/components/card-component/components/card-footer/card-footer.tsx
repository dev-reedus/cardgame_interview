import Badge from "@/components/badge";
import * as React from "react";
import type { CardFooterProps } from "./card-footer.model.ts";
import classes from "./card-footer.module.scss";
import { Rarity } from "@/types/card.ts";

const CardFooter: React.FC<CardFooterProps> = ({
  rarity,
  typology,
  energy,
}) => {
  const getRarityLabel = () => {
    switch (rarity) {
      case Rarity.BASE:
        return "Pokémon Base";
      case Rarity.FIRST:
        return "Prima evoluzione";
      case Rarity.SECOND:
        return "Seconda evoluzione";
      default:
        return "";
    }
  };

  return (
    <div className={classes.footerRow}>
      <span className={classes.cardRarity}>{getRarityLabel()}</span>
      <div className={classes.badgeContainer}>
        {typology && (
          <Badge
            className={classes.customBadge}
            variant="filled"
            icon={typology.icon_name}
          />
        )}
        {energy && (
          <Badge
            className={classes.customBadge}
            variant="filled"
            icon={energy.icon_name}
          />
        )}
      </div>
    </div>
  );
};

export default CardFooter;
