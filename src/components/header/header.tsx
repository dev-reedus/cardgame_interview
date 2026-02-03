import React from "react";
import classes from "./header.module.scss";

import logo from "@/assets/images/logo.png";
import { useParams } from "react-router-dom";
import cn from "classnames";

export const Header: React.FC = () => {
  const { id } = useParams();
  const size = id ? "sm" : "md";

  return (
    <header className={cn(classes.header, classes[size])}>
      <div className={classes.center}>
        <img className={classes.logo} src={logo} alt="Logo" />
      </div>
    </header>
  );
};

export default Header;
