import classes from "./card-body.module.scss";
import * as React from "react";
import type { CardBodyProps } from "./card-body.model.ts";

const CardBody: React.FC<CardBodyProps> = ({ name, description, children }) => {
  return (
    <div className={classes.cardBody}>
      <div className={classes.titleRow}>
        <h3 className={classes.title}>{name}</h3>
      </div>

      <div
        className={classes.shortDescription}
        dangerouslySetInnerHTML={{ __html: description }}
      />
      {children}
    </div>
  );
};
export default CardBody;
