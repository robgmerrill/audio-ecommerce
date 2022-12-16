import React from "react";
import PageHeader from "../components/pageHeader/PageHeader";
import Menu2 from "../components/home/menu2/Menu2";
import BestGear from "../components/bestGear/BestGear";
import classes from "../components/headphones/Headphones.module.css";
import ProductGeneral from "../components/productGeneral/ProductGeneral";
import data from "../data.json";

const Headphones = () => {
  const productCathegory = "headphones";
  
  return (
    <div className={classes.headphones}>
      <PageHeader product={productCathegory} />
      <ProductGeneral data={data} index={4} position={1} />
      <ProductGeneral data={data} index={3} position={2} />
      <ProductGeneral data={data} index={2} position={3} />
      <Menu2 />
      <BestGear />
    </div>
  );
};

export default Headphones;
