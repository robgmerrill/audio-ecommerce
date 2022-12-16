import React from 'react';
import classes from './Menu.module.css';
import {FaChevronRight } from "react-icons/fa";
import speakerImg from "../../assets/shared/desktop/image-category-thumbnail-speakers.png";
import headphoneImg from "../../assets/shared/desktop/image-category-thumbnail-headphones.png";
import earphoneImg from "../../assets/shared/desktop/image-category-thumbnail-earphones.png";
import { useNavigate } from 'react-router-dom';


const Menu = (props) => {
  const navigate = useNavigate();
  return (
    <div className={`${classes.menuLinks} ${"container"}`}>
        <div className={classes.menuLink}>
          <div className={classes.imgWrapper}>
            <img src={headphoneImg} className={classes.headphoneImg} alt="headphone" />
          </div>
          <h6>headphones</h6>
          <button className="button3" onClick={() => {navigate('/headphones');props.setShowMenu(false)}}>
            <p>shop</p>
            <FaChevronRight />
          </button>
        </div>
        <div className={classes.menuLink}>
          <div className={classes.imgWrapper}>
            <img src={speakerImg} className={classes.speakerImg} alt="speaker" />
          </div>
          <h6>speakers</h6>
          <button className="button3" onClick={() => {navigate('/speakers');props.setShowMenu(false)}}>
            <p>shop</p>
            <FaChevronRight />
          </button>
        </div>
        <div className={classes.menuLink}>
          <div className={classes.imgWrapper}>
            <img src={earphoneImg} className={classes.earphoneImg} alt="earphone" />
          </div>
          <h6>earphones</h6>
          <button className="button3" onClick={() => {navigate('/earphones');props.setShowMenu(false)}}>
            <p>shop</p>
            <FaChevronRight />
          </button>
        </div>
      </div>
  )
}

export default Menu