import React from "react";
import classes from "./footer.module.scss";

const Footer: React.FC = () => {
  return (
    <footer className={classes.footer}>
      <div className={classes.center}>TheCardGame©</div>
    </footer>
  );
};

export default Footer;
