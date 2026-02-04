import * as React from "react";
import classes from "./card-description.module.scss";
import type { CardDescriptionProps } from "@/views/cards/card-detail/components/card-description/card-description.model.ts";
import Button from "@/components/button";
import { useNavigate } from "react-router-dom";

const CardDescription: React.FC<CardDescriptionProps> = ({
  subtitle,
  name,
  html,
}) => {
  const navigate = useNavigate();

  return (
    <div className={classes.wrap}>
      <div>
        <Button
          size="md"
          icon="arrow-back"
          iconTitle="Go back"
          type="button"
          className={classes.backButton}
          onClick={() => navigate(-1)}
        ></Button>
      </div>
      <h2 className={classes.name}>
        {name}
        <span className={classes.subtitle}> | {subtitle}</span>
      </h2>
      <div
        className={classes.description}
        dangerouslySetInnerHTML={{ __html: html }}
      />
    </div>
  );
};

export default CardDescription;
