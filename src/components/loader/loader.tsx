import React from "react";
import classes from "./loader.module.scss";
import type { LoaderProps } from "./loader.model.ts";
import { Icon } from "@/components/icon";

const Loader: React.FC<LoaderProps> = ({
  open,
  label = "Loading…",
  className,
}) => {
  if (!open) return null;

  return (
    <div
      className={`${classes.backdrop}${className ? ` ${className}` : ""}`}
      role="status"
      aria-live="polite"
      aria-label={label}
    >
      <div className={classes.panel}>
        <div className={classes.spinner}>
          <Icon name={"loader"} />
        </div>
      </div>
    </div>
  );
};

export default Loader;
