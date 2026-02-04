import React from "react";
import classes from "./header.module.scss";

import logo from "@/assets/images/logo.png";
import { useMatch } from "react-router-dom";
import cn from "classnames";

const Header: React.FC = () => {
  const match = useMatch("/cards/:id");
  const id = match?.params.id;
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
