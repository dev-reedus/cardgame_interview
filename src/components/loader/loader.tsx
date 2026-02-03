import React from "react";
import classes from "./loader.module.scss";

import loaderSvg from "../../assets/icons/loader.svg";
import type { LoaderProps } from "./loader.model.ts";

export const Loader: React.FC<LoaderProps> = ({
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
        <img className={classes.spinner} src={loaderSvg} alt="" />
      </div>
    </div>
  );
};

export default Loader;
