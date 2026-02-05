import classes from "./card-header.module.scss";
import Badge from "@/components/badge";
import * as React from "react";
import type { CardHeaderProps } from "./card-header.model.ts";
import cn from "classnames";

const CardHeader: React.FC<CardHeaderProps> = ({
  cardNumber,
  typology,
  variant = "default",
}) => {
  return (
    <div className={cn(classes.headerRow, classes[variant])}>
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
