import React, {useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import classes from "./Header.module.css";
import logoImg from "../../assets/shared/desktop/logo.svg";
import iconCart from "../../assets/shared/desktop/icon-cart.svg";
import { FaBars, FaTimes } from "react-icons/fa";
import Menu from "../menu/Menu";
import { useGlobalContext } from "../../context";
import { useNavigate } from "react-router-dom"

const Header = () => {
  const {cart, setCart,hilightedBtn, setShowCart, showCart} = useGlobalContext();
  const [showMenu, setShowMenu] = useState(false);
  const navigate = useNavigate();
  useEffect(()=>{
   if(cart.itemsNumber===0){
    setCart({...cart,showItemNumber:false })
   }
  },[])
 
  const toggleMenuHandler = () => {
    setShowMenu(!showMenu);

  };
  const toggleCartHandler = ()=>{
    setShowCart(!showCart);
  }

  const style = ({ isActive }) => ({
    color: isActive ? "#D87D4A" : "",
  });
  return (
    <div className={`${classes.navbar} ${"container"}`}>
      <div className={classes.toggleNav}>
        <button onClick={toggleMenuHandler}>
          {!showMenu && <FaBars />}
          {showMenu && <FaTimes />}
        </button>
      </div>
      <div className={classes.logo}>
        <button onClick={() => navigate('/')}>
          <img src={logoImg} alt="logo" />
        </button>
      </div>
      <ul className={classes.links}>
        <li>
          <NavLink to="/home" style={style}>home</NavLink>
        </li>
        <li>
          <NavLink to="/headphones" style={style}>headphones</NavLink>
        </li>
        <li>
          <NavLink to="/speakers" style={style}>speakers</NavLink>
        </li>
        <li>
          <NavLink to="/earphones" style={style}>earphones</NavLink>
        </li>
      </ul>
      <div className={hilightedBtn?`${classes.cart} ${classes.bump}`:classes.cart}>
        <button onClick={toggleCartHandler}>
          <img src={iconCart} alt="cart" />
          {cart.showItemNumber && <span>{cart.itemsNumber}</span>}  
        </button>
      </div>
      {showMenu && <Menu showMenu={showMenu} setShowMenu={setShowMenu} />}
      {showMenu && <div className={classes.backdrop}></div>}
    </div>
  );
};

export default Header;
