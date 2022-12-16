import React from "react";
import classes from "./LandingEarphone.module.css";
import earphoneImgDesc from "../../../assets/home/desktop/image-earphones-yx1.jpg";
import earphoneImgTablet from "../../../assets/home/tablet/image-earphones-yx1.jpg";
import earphoneImgMobile from "../../../assets/home/mobile/image-earphones-yx1.jpg";
import { useNavigate } from "react-router-dom"
import { useGlobalContext } from "../../../context";

const LandingEarphone = () => {
  const {setProduct, data} = useGlobalContext();
  const navigate = useNavigate();
  const earphoneYX1 = data[0] 
  const seeProductHandler = ()=>{
    navigate('/earphones/yx1-earphones');
    setProduct(earphoneYX1);
   }
  return (
    <div className={`${classes.landingEarphone} ${"container"}`}>
      <div className={classes.contenu}>
        <div className={classes.earphoneImg}>
          <img
            src={earphoneImgDesc}
            className={classes.earphoneImgDesc}
            alt="earphone Img Desc"
          />
          <img
            src={earphoneImgTablet}
            className={classes.earphoneImgTablet}
            alt="earphone Img Tablet"
          />
          <img
            src={earphoneImgMobile}
            className={classes.earphoneImgMobile}
            alt="earphone Img Mobile"
          />
        </div>
        <div className={classes.infoCart}>
          <div className={classes.info}>
            <h4>yx1 earphones</h4>
            <button className="button2" onClick={seeProductHandler}>see product</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingEarphone;
