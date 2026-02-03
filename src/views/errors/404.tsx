import React from "react";
import { Link } from "react-router-dom";
import { Button } from "../../components/button";

import classes from "./404.module.scss";
import image404 from "@/assets/images/404.png";

export const NotFoundPage: React.FC = () => {
  return (
    <div className={classes.wrapper}>
      <img className={classes.image} src={image404} alt="404" />

      <h1>Ooops! </h1>
      <p className={classes.text}>
        Sembra che ci sia stato un problema, torna all'homepage.
      </p>

      <Link to="/" className={classes.link}>
        <Button>VAI ALLA HOME</Button>
      </Link>
    </div>
  );
};

export default NotFoundPage;
