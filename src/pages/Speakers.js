import React from 'react';
import PageHeader from "../components/pageHeader/PageHeader";
import Menu2 from "../components/home/menu2/Menu2";
import BestGear from "../components/bestGear/BestGear";
import ProductGeneral from "../components/productGeneral/ProductGeneral";
import data from "../components/../data.json";
import classes from '../components/speakers/Speakers.module.css';

const Speakers = () => {
  const productCathegory = "speakers";
  return (
    <div className={classes.speakers}>
     <PageHeader product={productCathegory} />
      <ProductGeneral data={data} index={6} position={1} />
      <ProductGeneral data={data} index={5} position={2} />
      <Menu2 />
      <BestGear />
  </div>
  )
}

export default Speakers