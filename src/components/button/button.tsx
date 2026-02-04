import * as React from "react";
import classes from "./button.module.scss";
import type { ButtonProps } from "./button.models.ts";
import cn from "classnames";
import { Icon } from "@/components/icon";

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant = "primary",
      size = "md",
      icon,
      iconPosition = "left",
      iconTitle,
      disabled = false,
      children,
      type = "button",
      ...rest
    },
    ref,
  ) => {
    const iconNode = icon ? (
      <span className={classes.icon} aria-hidden={iconTitle ? undefined : true}>
        <Icon name={icon} title={iconTitle} />
      </span>
    ) : null;

    return (
      <button
        ref={ref}
        type={type}
        disabled={disabled}
        className={cn(
          classes.button,
          classes[variant],
          classes[size],
          className,
        )}
        {...rest}
      >
        <span className={classes.content}>
          {iconPosition === "left" ? iconNode : null}
          {children ? <span className={classes.label}>{children}</span> : null}
          {iconPosition === "right" ? iconNode : null}
        </span>
      </button>
    );
  },
);

export default Button;
