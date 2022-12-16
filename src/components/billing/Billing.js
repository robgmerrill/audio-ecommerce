import React, { useState } from "react";
import { useGlobalContext } from "../../context";
import classes from "./Billing.module.css";
import { useNavigate } from "react-router-dom";

const Billing = (props) => {
  const { cart, setCart } = useGlobalContext();
  const navigate = useNavigate();
  const [showAllItems, setShowAllItems] = useState(false);
  const chipping = props.chipping;
  const toggleAllItemsHandler = () => {
    setShowAllItems(!showAllItems);
  };

  const setCartHandler = ()=>{
    navigate("/");
     setCart({
      items: [],
      itemsNumber: 0,
      totalAmount: 0,
    });
  }
  const firstItem = cart.items.find((item) => cart.items[0].id === item.id);
  const allItems = cart.items.map((item) => {
    return (
      <li className={classes.product} key={item.id}>
        <div className={classes.imgWrapper}>
          <img src={item.image.desktop} alt={item.name} />
        </div>
        <div className={classes.productInfo}>
          <p className="overlay">{item.name.slice(0, 4)}</p>
          <p className="overlay">${item.price}</p>
        </div>
        <p className="overlay">x{item.quantity}</p>
      </li>
    );
  });
  return (
    <div className={`${classes.billing} ${'container'}`}>
      <div className={classes.backdrop}></div>
      <div className={classes.billingModal}>
        <div className={classes.billingModalHeader}>
          <div className={classes.svgWrapper}>
            <svg width="64" height="64" xmlns="http://www.w3.org/2000/svg">
              <g fill="none" fillRule="evenodd">
                <circle fill="#D87D4A" cx="32" cy="32" r="32" />
                <path
                  stroke="#FFF"
                  strokeWidth="4"
                  d="m20.754 33.333 6.751 6.751 15.804-15.803"
                />
              </g>
            </svg>
          </div>

          <h3>
            thank you
            <br /> for your order
          </h3>
          <p className="overlay">
            You will receive an email confirmation shortly.
          </p>
        </div>
        <div className={classes.billingModalBody}>
          <div className={classes.info}>
            <ul className={classes.products}>
              {!showAllItems && (
                <li className={classes.product} key={firstItem.id}>
                  <div className={classes.imgWrapper}>
                    <img src={firstItem.image.desktop} alt={firstItem.name} />
                  </div>
                  <div className={classes.productInfo}>
                    <p className="overlay">{firstItem.name.slice(0, 4)}</p>
                    <p className="overlay">${firstItem.price}</p>
                  </div>
                  <p className="overlay">x{firstItem.quantity}</p>
                </li>
              )}
              {showAllItems && allItems}
            </ul>
            <div className={classes.productsMessage}>
              {cart.items.length > 1 &&
                (!showAllItems ? (
                  <button onClick={toggleAllItemsHandler}>
                    and {cart.items.length - 1} other item(s)
                  </button>
                ) : (
                  <button onClick={toggleAllItemsHandler}>View less</button>
                ))}
            </div>
          </div>
          <div className={classes.total}>
            <p>GRAND TOTAL</p>
            <h6>${(cart.totalAmount + chipping).toFixed(2)}</h6>
          </div>
        </div>
        <div className={classes.billingModalFooter}>
          <button className="button1" onClick={setCartHandler}>
            back to home
          </button>
        </div>
      </div>
    </div>
  );
};

export default Billing;
