import React from "react";
import ProductGeneralDetail from "../productGeneralDetail/ProductGeneralDetail";
import classes from "./SingleProduct.module.css";
import data from "../../data.json";
import FeaturesIncludes from "../featuresIncludes/FeaturesIncludes";
import SingleProductGallery from "../singleProductGallery/SingleProductGallery";
import Alternatifs from "../alternatifs/Alternatifs";
import { useGlobalContext } from "../../context";
import Menu2 from "../home/menu2/Menu2";
import BestGear from "../bestGear/BestGear";
import { useNavigate } from "react-router-dom";

const SingleProduct = (props) => {
  const { index } = useGlobalContext();
  const navigate = useNavigate();
    
  return (
    <div className={classes.singleProduct}>
      <div className={classes.singleProductHeader}></div>
      <div className={`${classes.returnPage} ${'container'}`}>
        <button onClick={() => navigate(-1)}>go back</button>
      </div>
      <ProductGeneralDetail data={data} index={index} />
      <FeaturesIncludes data={data} index={index} />
      <SingleProductGallery data={data} index={index} />
      <Alternatifs data={data} index={index} />
      <Menu2 />
      <BestGear />
    </div>
  );
};

export default SingleProduct;
