import React, {useEffect, useState } from "react";
import classes from "./ProductGeneralDetail.module.css";
import { useGlobalContext } from "../../context";

const ProductGeneralDetail = (props) => {
  const {cart, setCart,setHilightedBtn, product} = useGlobalContext();
  const [quantity, setQuantity] = useState(1);
useEffect(()=>{
  setHilightedBtn(false)
}, [setHilightedBtn])


  const increaseQuantityHandler = ()=>{
    setQuantity(quantity + 1);
  }

  const decreaseQuantityHandler = ()=>{
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
    else{
      setQuantity(1);
    }
    
  }
  const addItemToCart = ()=>{ 
    const newProduct = {...product, quantity:quantity}
    const newItem = cart.items.find(item=> item.id === newProduct.id)
    if (newItem) { 
      newItem.quantity = newItem.quantity + quantity;
      cart.items = [...cart.items];
      cart.totalAmount = cart.totalAmount + newProduct.price*quantity;
      setHilightedBtn(true)
    } 
    else{
    setCart({
      items:[newProduct, ...cart.items],
      itemsNumber:cart.itemsNumber+1,
      totalAmount:cart.totalAmount + newProduct.price*quantity ,
      showItemNumber:true
    })
    setHilightedBtn(true)
  }
  
  } 
  return (
    <div className={`${classes.ProductGeneralDetail} ${"container"}`}>
      <div className={classes.imgWrapper}>
        <img
          src={`../.${product.image.desktop}`}
          className={classes.ImgDesc}
          alt={product.name}
        />
        <img
          src={`../.${product.image.tablet}`}
          className={classes.ImgTablet}
          alt={product.name}
        />
        <img
          src={`../.${product.image.mobile}`}
          className={classes.ImgMobile}
          alt={product.name}
        />
      </div>
      <div className={classes.info}>
        <div className={classes.presentation}>
          <p className={`${classes.title} ${"title"}`}>{product.new? 'new product':''}</p>
          <h2>{product.name}</h2>
          <p className={`${classes.overlay} ${"overlay"}`}>
            {product.description}
          </p>
          <p className={classes.price}>{`$ ${product.price * quantity}`}</p>
          <div className={classes.linksDetail}>
            <div className={classes.actions}>
              <button onClick={decreaseQuantityHandler}>
                -
              </button>
              <span>{quantity}</span> 
              <button onClick={increaseQuantityHandler}>
                +
              </button>
            </div>
            <button className="button1" onClick={addItemToCart}>add to cart</button>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default ProductGeneralDetail;
