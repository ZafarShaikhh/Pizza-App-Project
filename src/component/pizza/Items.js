import React, { useContext } from "react";
import { CartContext } from "../../store/Cart-Context";
import Form from "./Form";
import classes from "./Items.module.css";

function Items(props) {
  const cartCtx = useContext(CartContext);
  const addItemToCartHandler = (amount) => {
    cartCtx.addItem({
      id: props.id,
      name: props.name,
      amount: amount,
      price: props.price,
      isVeg: props.isVeg,
    });
  };
  return (
    <li className={classes.meal}>
      <div>
        <img className={classes.image} src={props.img} alt="" />
        <h3>{props.name}</h3>
        <div className={classes.description}>{props.description}</div>
        <div className={classes.price}>Rs.{props.price}</div>
        <div className={classes.description}>
          Rating {props.rating}
          <span className="fa fa-star .checked" />
        </div>
        <div className={classes.price}>{props.size}</div>
        <div className={classes.price}>
                    {props.isVeg === true ? (
            <img className={classes.isVeg} src="https://i.pinimg.com/originals/e4/1f/f3/e41ff3b10a26b097602560180fb91a62.png" alt="Veg"/>
          ) : (
            <img className={classes.isVeg}
              src="https://www.pngkey.com/png/detail/245-2459071_non-veg-icon-non-veg-symbol-png.png"
              alt="nonveg"
            />
          )}
        </div>
      </div>
      <div>
        <Form onAddToCart={addItemToCartHandler} />
      </div>
    </li>
  );
}

export default Items;
