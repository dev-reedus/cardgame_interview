import * as React from "react";
import classes from "./button.module.scss";
import type { ButtonProps } from "./button.models.ts";
import cn from "classnames";

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant = "primary",
      size = "md",
      disabled = false,
      children,
      type = "button",
      ...rest
    },
    ref,
  ) => {
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
        <span>{children}</span>
      </button>
    );
  },
);

Button.displayName = "Button";
