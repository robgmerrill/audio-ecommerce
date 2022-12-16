import React from "react";
import classes from "./BestGear.module.css";
import BestGearImgDesc from "../../assets/shared/desktop/image-best-gear.jpg";
import BestGearImgTablet from "../../assets/shared/tablet/image-best-gear.jpg";
import BestGearImgMobile from "../../assets/shared/mobile/image-best-gear.jpg";

const BestGear = () => {
  return (
    <div className={`${classes.bestGear} ${"container"}`}>
      <div className={classes.contenu}>
          <div className={classes.info}>
            <h2>Bringing you the <span>best</span>  audio gear</h2>
            <p className="overlay">
              Located at the heart of New York City, Audiophile is the premier
              store for high end headphones, earphones, speakers, and audio
              accessories. We have a large showroom and luxury demonstration
              rooms available for you to browse and experience a wide range of
              our products. Stop by our store to meet some of the fantastic
              people who make Audiophile the best place to buy your portable
              audio equipment.
            </p>
        </div>
        <div className={classes.BestGearImg}>
          <img
            src={BestGearImgDesc}
            className={classes.BestGearImgDesc}
            alt="BestGear Img Desc"
          />
          <img
            src={BestGearImgTablet}
            className={classes.BestGearImgTablet}
            alt="BestGear Img Tablet"
          />
          <img
            src={BestGearImgMobile}
            className={classes.BestGearImgMobile}
            alt="BestGear Img Mobile"
          />
        </div>
      </div>
    </div>
  );
};

export default BestGear;
