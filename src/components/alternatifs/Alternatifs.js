import React from "react";
import { useGlobalContext } from "../../context";
import classes from "./Alternatifs.module.css";

const Alternatifs = (props) => {
  const {product} = useGlobalContext();

  return (
    <div className={classes.alternatifs}>
      <h3>you may also like</h3>
      <div className={`${classes.products} ${"container"}`}>
        <div className={classes.product}>
          <div className={classes.img}>
            <div className={classes.imgWrapper}>
              <img
                src={`../.${product.others[0].image.desktop}`}
                className={classes.desktopImg}
                alt={product.others[0].name}
              />
              <img
                src={`../.${product.others[0].image.tablet}`}
                className={classes.tabletImg}
                alt={product.others[0].name}
              />
              <img
                src={`../.${product.others[0].image.mobile}`}
                className={classes.mobileImg}
                alt={product.others[0].name}
              />
            </div>
          </div>
          <h5>{product.others[0].name}</h5>
          <button className="button1">see product</button>
        </div>
        <div className={classes.product}>
          <div className={classes.img}>
            <div className={classes.imgWrapper}>
              <img
                src={`../.${product.others[1].image.desktop}`}
                className={classes.desktopImg}
                alt={product.others[1].name}
              />
              <img
                src={`../.${product.others[1].image.tablet}`}
                className={classes.tabletImg}
                alt={product.others[1].name}
              />
              <img
                src={`../.${product.others[1].image.mobile}`}
                className={classes.mobileImg}
                alt={product.others[1].name}
              />
            </div>
          </div>
          <h5>{product.others[1].name}</h5>
          <button className="button1">see product</button>
        </div>
        <div className={classes.product}>
          <div className={classes.img}>
            <div className={classes.imgWrapper}>
              <img
                src={`../.${product.others[2].image.desktop}`}
                className={classes.desktopImg}
                alt={product.others[2].name}
              />
              <img
                src={`../.${product.others[2].image.tablet}`}
                className={classes.tabletImg}
                alt={product.others[2].name}
              />
              <img
                src={`../.${product.others[2].image.mobile}`}
                className={classes.mobileImg}
                alt={product.others[2].name}
              />
            </div>
          </div>
          <h5>{product.others[2].name}</h5>
          <button className="button1">see product</button>
        </div>
      </div>
    </div>
  );
};

export default Alternatifs;
