import React, { useState, useContext } from "react";
import "./slider.styles.scss";

import { motion } from "framer-motion";
import GlobalContext from "../../context/globalContext";

import img1 from "../../images/slider-1.jpg";
import img2 from "../../images/slider-2.jpg";
import img3 from "../../images/slider-3.jpg";
import img4 from "../../images/slider-4.jpg";
import { Link } from "react-router-dom";

const item = {
  hidden: {
    opacity: 0,
    y: 100,
  },
  visible: {
    opacity: 1,
    y: 0,
  },
};

const Slider = () => {
  const [hover, setHover] = useState({
    hover: false,
    x: 0,
    y: 0,
  });
  const { isMobile } = useContext(GlobalContext);

  const handleMove = (e) => {
    setHover({ hover: true, x: e.clientX - 40, y: e.clientY - 100 });
    console.log(hover.hover);
  };

  return (
    <motion.section
      id="slider"
      onMouseLeave={(e) => setHover({ hover: false })}
      onMouseMove={handleMove}
    >
      <div className="images">
        <motion.div
          className="img"
          variants={item}
          initial="hidden"
          animate="visible"
        >
          <img src={img2} alt="model" />
        </motion.div>
        <motion.dev
          className="img"
          variants={item}
          initial="hidden"
          animate="visible"
        >
          <img src={img1} alt="model" />
        </motion.dev>
        <motion.dev
          className="img"
          variants={item}
          initial="hidden"
          animate="visible"
        >
          <img src={img4} alt="model" />
        </motion.dev>
        <motion.dev
          className="img"
          variants={item}
          initial="hidden"
          animate="visible"
        >
          <img src={img3} alt="model" />
        </motion.dev>
      </div>
      {isMobile ? (
        <div className="title-small">
          <h2>BAY THIS NOW</h2>
          <h2>BECOME SHINING</h2>
          <p>large selection of men and women clothes at afordable prices</p>
          <Link className="link" to="/shop">
            SHOP NOW
          </Link>
        </div>
      ) : (
        <div className="title-large">
          <h1>BAY THIS NOW</h1>
          <div className="button">
            <h1>BECOME</h1>
            <Link className="link" to="/shop">
              SHOP NOW
            </Link>
          </div>
          <div className="sub-title">
            <p>large selection of men and women clothes at afordable prices</p>
            <h1>SHINING</h1>
          </div>
        </div>
      )}

      {/* <motion.div
        style={hover.hover ? { display: "block" } : null}
        animate={{
          x: hover.x,
          y: hover.y,
          transition: { duration: 1, ease: "backOut" },
        }}
        className="circle"
      ></motion.div> */}
    </motion.section>
  );
};

export default Slider;
