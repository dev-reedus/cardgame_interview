import classes from "./card-header.module.scss";
import Badge from "@/components/badge";
import * as React from "react";
import type { CardHeaderProps } from "./card-header.model.ts";

const CardHeader: React.FC<CardHeaderProps> = ({ cardNumber, typology }) => {
  return (
    <div className={classes.headerRow}>
      <span className={classes.cardNumber}>N. {cardNumber}</span>
      {typology && (
        <Badge
          variant="translucent"
          value={typology.name}
          icon={typology.icon_name}
          iconPosition="right"
        />
      )}
    </div>
  );
};

export default CardHeader;
