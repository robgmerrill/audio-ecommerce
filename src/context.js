import React, { useEffect } from "react";
import { useState } from "react";
import { useContext } from "react";
import data from './data.json';

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [index, setIndex] = useState(0);
  const [hilightedBtn, setHilightedBtn] = useState(false);
  const [cart, setCart] = useState({
    items: [],
    itemsNumber:0,
    totalAmount: 0,
    showItemNumber:false
  });
  const [showCart, setShowCart] = useState(false);
  const [product, setProduct] = useState({});
  useEffect(() => {
    const data = window.localStorage.getItem('MY_CART_STATE');
    if ( data !== null ) setCart(JSON.parse(data));
  }, [setCart]);
  useEffect(() => {
    window.localStorage.setItem('MY_CART_STATE', JSON.stringify(cart));
  });
  return (
    <AppContext.Provider value={{data,product, setProduct, index, setIndex, showCart, setShowCart, cart, setCart, hilightedBtn, setHilightedBtn }}>
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
