import React from "react";
import { useGlobalContext } from "../../context";
import classes from "./FeaturesIncludes.module.css";

const FeaturesIncludes = (props) => {
  const {product} = useGlobalContext()

  return (
    <div className={`${classes.featuresIncludes} ${"container"}`}>
      <div className={classes.features}>
        <h3>features</h3>
        <p className="overlay">{product.features}</p>
      </div>
      <div className={classes.includes}>
        <h3>in the box</h3>
        <ul>
          {product.includes.map((item, index) => (
            <li key={index}>
              <span className="overlay">{item.quantity}x</span>
              <span className="overlay">{item.item}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default FeaturesIncludes;
