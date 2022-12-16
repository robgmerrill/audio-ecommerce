import React from "react";
import PageHeader from "../components/pageHeader/PageHeader";
import Menu2 from "../components/home/menu2/Menu2";
import BestGear from "../components/bestGear/BestGear";
import data from "../data.json";
import ProductGeneral from "../components/productGeneral/ProductGeneral";
import classes from "../components/earphones/Earphones.module.css";

const Earphones = () => {
  const productCathegory = "earphones";
  return (
    <div className={classes.earphones}>
      <PageHeader product={productCathegory} />
      <ProductGeneral data={data} index={1} position={1} />
      <Menu2 />
      <BestGear />
    </div>
  );
};

export default Earphones;
