import React, { useState } from "react";
import { useGlobalContext } from "../../context";
import classes from "./Cart.module.css";

const CartItem = (props) => {
  const { cart, setCart } = useGlobalContext();

  const item = props.item;
  const [quantity, setQuantity] = useState(item.quantity);

  const increaseQuantityHandler = () => {
    setQuantity(quantity + 1);
    setCart({ ...cart, totalAmount: cart.totalAmount + item.price });
  };

  const decreaseQuantityHandler = () => {
    setQuantity(quantity - 1);
    setCart({
      items: cart.items,
      itemsNumber: cart.itemsNumber - 1,
      totalAmount: cart.totalAmount - item.price,
      showItemNumber: true,
    });
    if (quantity <= 1) {
      const newItems = cart.items.filter((newItem) => newItem.id !== item.id);
      setCart({
        items: newItems,
        itemsNumber: cart.itemsNumber - 1,
        totalAmount: cart.totalAmount - item.price,
        showItemNumber: true,
      });
      if(newItems.length===0){
        setCart({
            items: [],
            itemsNumber: 0,
            totalAmount: 0,
            showItemNumber: false
        })
      }
    }
  };
  return (
    <li key={item.id}>
      <div className={classes.product}>
        <div className={classes.imgWrapper}>
          <img src={`../.${item.categoryImage.desktop}`} alt={item.name} />
        </div>
        <div className={classes.info}>
          <h5>{item.name.slice(0,4)}</h5>
          <h6>${item.price}</h6>
        </div>
      </div>
      <div className={classes.quantity}>
        <button onClick={decreaseQuantityHandler}>-</button>
        <span>{quantity}</span>
        <button onClick={increaseQuantityHandler}>+</button>
      </div>
    </li>
  );
};

export default CartItem;
