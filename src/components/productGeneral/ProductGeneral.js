import React from "react";
import classes from "./ProductGeneral.module.css";
import {useNavigate, useParams} from "react-router-dom";
import { useGlobalContext } from "../../context";

const ProductGeneral = (props) => {
  const {setProduct} = useGlobalContext();
  const navigate =useNavigate();
 const product = props.data.find((item) => item.id === props.index);
 const seeProductHandler = ()=>{
 /*  navigate('/headphones/xx99-mark-two-headphones'); */
  setProduct(product);
  const productCathegory = product.category;
  const productSlug = product.slug;
  navigate(`${productCathegory}${productSlug}`)
}

  
  const newPosition=props.position%2;
  const slug = useParams();
 
  return (
    <div className={newPosition===0?`${classes.productGeneral} ${classes.reverseProductGeneral} ${"container"}`: `${classes.productGeneral} ${"container"}`}>
      <div className={classes.imgWrapper}>
        <img
          src={product.categoryImage.desktop}
          className={classes.ImgDesc}
          alt={product.name}
        />
        <img
          src={product.categoryImage.tablet}
          className={classes.ImgTablet}
          alt={product.name}
        />
        <img
          src={product.categoryImage.mobile}
          className={classes.ImgMobile}
          alt={product.name}
        />
      </div>
      <div className={classes.info}>
        <div className={newPosition===1?`${classes.presentation} ${classes.presentationRight}`:`${classes.presentation} ${classes.presentationLeft}`}>
          <p className={`${classes.title} ${"title"}`}>{product.new? 'new product':''}</p>
          <h2>{product.name}</h2>
          <p className={`${classes.overlay} ${"overlay"}`}>
            {product.description}
          </p>
          <button to={`${product.slug}`} onClick={seeProductHandler} className="button1">see product</button>
        </div>
      </div>
    </div>
  );
};

export default ProductGeneral;
