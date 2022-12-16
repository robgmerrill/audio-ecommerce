import React from "react";
import classes from "./Menu2.module.css";
import { FaChevronRight } from "react-icons/fa";
import speakerImg from "../../../assets/shared/desktop/image-category-thumbnail-speakers.png";
import headphoneImg from "../../../assets/shared/desktop/image-category-thumbnail-headphones.png";
import earphoneImg from "../../../assets/shared/desktop/image-category-thumbnail-earphones.png";
import { Link} from "react-router-dom";

/*  */
const Menu2 = () => {
  return (
    <div className={`${classes.menuLinks} ${"container"}`}>
      <div className={classes.menuLink}>
        <div className={classes.info}>
          <div className={classes.imgWrapper}>
            <img
              src={headphoneImg}
              className={classes.headphoneImg}
              alt="headphone"
            />
          </div>
          <h6>headphones</h6>
          <Link to='/headphones' className="button3">
            <p>shop</p>
            <FaChevronRight />
          </Link>
        </div>
      </div>
      <div className={classes.menuLink}>
        <div className={classes.info}>
          <div className={classes.imgWrapper}>
            <img
              src={speakerImg}
              className={classes.speakerImg}
              alt="speaker"
            />
          </div>
          <h6>speakers</h6>
          <Link to='/speakers' className="button3">
            <p>shop</p>
            <FaChevronRight />
          </Link>
        </div>
      </div>
      <div className={classes.menuLink}>
        <div className={classes.info}>
          <div className={classes.imgWrapper}>
            <img
              src={earphoneImg}
              className={classes.earphoneImg}
              alt="earphone"
            />
          </div>
          <h6>earphones</h6>
          <Link to='/earphones' className="button3">
            <p>shop</p>
            <FaChevronRight />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Menu2;
