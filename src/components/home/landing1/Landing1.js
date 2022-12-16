import React from "react";
import classes from "./Landing1.module.css";
import speakerImg from "../../../assets/home/desktop/image-speaker-zx9.png";
import { useNavigate } from "react-router-dom"
import { useGlobalContext } from "../../../context";

const Landing1 = () => {
  const {setProduct, data} = useGlobalContext();
  const navigate = useNavigate();
  const speakerZX9 = data[5] 
  const seeProductHandler = ()=>{
    navigate('/speakers/zx9-speaker');
    setProduct(speakerZX9);
   }
  return (
    <div className={`${classes.landing1} ${"container"}`}>
      <div className={classes.contenu}>
        <div className={classes.speakerImage}>
          <img src={speakerImg} alt="speakerZX9" />
        </div>
        <div className={classes.info}>
            <h1>zx9 spaeker</h1>
            <p className=".overlay">Upgrade to premium speakers that are phenomenally built to deliver truly remarkable sound.</p>
            <button className="button2" onClick={seeProductHandler}>see product</button>
        </div>
        <div className={classes.oval1}></div>
        <div className={classes.oval2}></div>
        <div className={classes.oval3}></div>
      </div>
    </div>
  );
};

export default Landing1;
