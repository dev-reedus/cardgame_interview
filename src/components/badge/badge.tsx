import * as React from "react";
import classes from "./badge.module.scss";
import cn from "classnames";
import type { BadgeProps } from "@/components/badge/badge.model.ts";
import { Icon } from "@/components/icon";

const Badge: React.FC<BadgeProps> = ({
  children,
  className,
  value,
  icon,
  iconPosition = "left",
  variant = "filled",
  ...rest
}) => {
  const hasValue = value !== undefined;

  const iconNode = icon ? (
    <span className={classes.icon} {...rest}>
      <Icon name={icon} />
    </span>
  ) : null;

  return (
    <span className={cn(classes.badge, className, classes[variant])}>
      {iconPosition === "left" && iconNode}
      {hasValue && <span className={classes.value}>{value}</span>}
      {children}
      {iconPosition === "right" && iconNode}
    </span>
  );
};

export default Badge;
