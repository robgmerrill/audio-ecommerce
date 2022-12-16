import React from "react";
import classes from "./Hero.module.css";
import heroImg from "../../../assets/home/desktop/image-hero.jpg";
import { useNavigate } from "react-router-dom";
import { useGlobalContext } from "../../../context";

const Hero = () => {
  const {setProduct, data} = useGlobalContext();
  const navigate = useNavigate();
 const markII = data[3] 
 const seeProductHandler = ()=>{
  navigate('/headphones/xx99-mark-two-headphones');
  setProduct(markII);
 }
  return (
    <div className={`${classes.hero} ${"container"}`}>
      <div className={`${classes.rectangleWrapper} ${"container"}`}>
        <div className={classes.rectangle}></div>
      </div>
      <div className={classes.presentation}>
        <p className={`${classes.title} ${"title"}`}>new product</p>
        <h1>{markII.name}</h1>
        <p className={`${classes.overlay} ${"overlay"}`}>
          Experience natural, lifelike audio and exceptional build quality made
          for the passionate music enthusiast.
        </p>
        <button className="button1" onClick={seeProductHandler}>see product</button>
      </div>
      <div className={classes.image}>
        <img src={heroImg} alt="hero" />
      </div>
    </div>
  );
};

export default Hero;
