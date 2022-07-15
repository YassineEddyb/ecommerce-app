import React, { useState } from "react";
import { motion } from "framer-motion";

import "./slider.styles.scss";

import img1 from "../../images/slider-1.jpg";
import img2 from "../../images/slider-2.jpg";
import img3 from "../../images/slider-3.jpg";
import img4 from "../../images/slider-4.jpg";

const Slider = () => {
  const [hover, setHover] = useState({
    hover: false,
    x: 0,
    y: 0,
  });

  const item = {
    hidden: {
      opacity: 0,
      y: 100,
    },
    visible: {
      opacity: 1,
      y: 0,
      //transition: {
      //   type: "spring",
      //   stiffness: 20,
      //   bounce: 10,
      //   //  damping: 300,
      // },
    },
  };

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
        <motion.dev
          className="img"
          variants={item}
          initial="hidden"
          animate="visible"
        >
          <img src={img3} alt="model" />
        </motion.dev>
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
          <img src={img2} alt="model" />
        </motion.dev>
      </div>
      <div className="title">
        <h1>BAY THIS NOW</h1>
        <div className="button">
          <h1>BECOME</h1>
          <button>BUY NOW</button>
        </div>
        <div className="sub-title">
          <p>large selection of men and women clothes at afordable prices</p>
          <h1>SHINING</h1>
        </div>
      </div>
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
