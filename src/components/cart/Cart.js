import React from "react";
import Backdrop from "../../UI/backdrop/Backdrop";
import classes from "./Cart.module.css";
import { useGlobalContext } from "../../context";
import CartItem from "./CartItem";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const { cart, setCart, setShowCart } = useGlobalContext();
  const navigate = useNavigate();
  const noItems = cart.items.length <1;
  const hideCartHandler = () => {
    setShowCart(false);
  };
 
  const deleteCartHandler = () => {
    setCart({
      items: [],
      itemsNumber: 0,
      totalAmount: 0,
    });
  };
  /* console.log(cart.totalAmount) */
  return (
    <>
      <Backdrop onClick={hideCartHandler} />
      <div className="container">
        <div className={classes.cart}>
          <div className={classes.mainCart}>
            {!noItems && (
              <>
                <div className={classes.cartHeader}>
                  <h6>cart({cart.itemsNumber})</h6>
                  <button onClick={deleteCartHandler}>Remove all</button>
                </div>
                <div className={classes.cartBody}>
                  <ul className={classes.propducts}>
                    {cart.items.map((item) => (
                      <CartItem
                        item={item}
                        key={item.id}
                        cart={cart}
                        setCart={setCart}
                      />
                    ))}
                  </ul>
                  <div className={classes.actions}>
                    <div className={classes.total}>
                      <p className="overlay">total</p>
                      <h6>${cart.totalAmount}</h6>
                    </div>
                    <button className="button1" onClick={() => {navigate('/checkout');setShowCart(false)}}>checkout</button>
                  </div>
                </div>
              </>
            )}
            {noItems && <p className={`${classes.noItems} ${'overlay'}`}>Your Cart is currently empty!!</p>}
          </div>
        </div>
      </div>
    </>
  );
};

export default Cart;
