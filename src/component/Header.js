import React, { Fragment } from "react";
import CartButton from "./CartButton";
import classes from "./Header.module.css";
import image from "./data/image.jpg";

const Header = (props) => {
  return (
    <Fragment>
      <header className={classes.header}>
        <h1>React Pizza Store</h1>
        <CartButton onClick={props.onShowCart} />
      </header>
      <div className={classes["main-image"]}>
        <img src={image} alt="pizza-img" />
      </div>
    </Fragment>
  );
};

export default Header;
