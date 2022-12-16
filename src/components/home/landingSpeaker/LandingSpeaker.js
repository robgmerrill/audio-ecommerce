import React from "react";
import classes from "./LandingSpeaker.module.css";
import speakerImgDesk from "../../../assets/home/desktop/image-speaker-zx7.jpg";
import speakerImgTablet from "../../../assets/home/tablet/image-speaker-zx7.jpg";
import speakerImgMobile from "../../../assets/home/mobile/image-speaker-zx7.jpg";
import { useNavigate } from "react-router-dom"
import { useGlobalContext } from "../../../context";

const LandingSpeaker = () => {
  const {setProduct, data} = useGlobalContext();
  const navigate = useNavigate();
  const speakerZX7 = data[4] 
  const seeProductHandler = ()=>{
    navigate('/speakers/zx7-speaker');
    setProduct(speakerZX7);
   }
  return (
    <div className={`${classes.landingSpeaker} ${"container"}`}>
      <div className={classes.contenu}>
        <img
          src={speakerImgDesk}
          className={classes.speakerImgDesk}
          alt="speaker desktop"
        />
        <img
          src={speakerImgTablet}
          className={classes.speakerImgTablet}
          alt="speaker tablet"
        />
        <img
          src={speakerImgMobile}
          className={classes.speakerImgMobile}
          alt="speaker mobile"
        />
        <div className={classes.info}>
          <h4>zx7 speaker</h4>
          <button className="button2" onClick={seeProductHandler}>see product</button>
        </div>
      </div>
    </div>
  );
};

export default LandingSpeaker;
