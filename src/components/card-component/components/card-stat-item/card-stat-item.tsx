import * as React from "react";
import classes from "./card-stat-item.module.scss";
import type { StatItemProps } from "./cars-stat-item.model.ts";
import { Icon } from "@/components/icon";

const CardStatItem: React.FC<StatItemProps> = ({ label, value, icon }) => {
  return (
    <div className={classes.item}>
      {icon && (
        <span className={classes.iconContainer}>
          <Icon name={icon} />
        </span>
      )}
      <div className={classes.valueContainer}>
        {label && <span className={classes.label}>{label}</span>}
        <span className={classes.value}>{value} </span>
      </div>
    </div>
  );
};

export default CardStatItem;
