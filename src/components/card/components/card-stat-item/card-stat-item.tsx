import * as React from "react";
import classes from "./card-stat-item.module.scss";
import type { StatItemProps } from "./cars-stat-item.model.ts";
import { Icon } from "@/components/icon";
import cn from "classnames";

const CardStatItem: React.FC<StatItemProps> = ({
  label,
  value,
  icon,
  variant = "default",
}) => {
  return (
    <div className={cn(classes.item, classes[variant])}>
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
