import React from "react";
import { useGlobalContext } from "../../context";
import classes from "./SingleProductGallery.module.css";

const SingleProductGallery = (props) => {
    const {product} = useGlobalContext();
  return (
    <div className={`${classes.singleProductGallery} ${"container"}`}>
      <div className={classes.imgWrapper}>
        <div className={classes.imgWrapper1}>
            <img src={`../.${product.gallery.first.desktop}`} className={classes.desktopImg} alt={product.category}/>
            <img src={`../.${product.gallery.first.tablet}`}  className={classes.tabletImg} alt={product.category}/>
            <img src={`../.${product.gallery.first.mobile}`}  className={classes.mobileImg} alt={product.category}/>
        </div>
        <div className={classes.imgWrapper2}>
        <img src={`../.${product.gallery.second.desktop}`} className={classes.desktopImg} alt={product.category}/>
            <img src={`../.${product.gallery.second.tablet}`}  className={classes.tabletImg} alt={product.category}/>
            <img src={`../.${product.gallery.second.mobile}`}  className={classes.mobileImg} alt={product.category}/>
        </div>
      </div>

      <div className={classes.imgWrapper3}>
      <img src={`../.${product.gallery.third.desktop}`} className={classes.desktopImg} alt={product.category}/>
            <img src={`../.${product.gallery.third.tablet}`}  className={classes.tabletImg} alt={product.category}/>
            <img src={`../.${product.gallery.third.mobile}`}  className={classes.mobileImg} alt={product.category}/>
        </div>
    </div>
  );
};

export default SingleProductGallery;
