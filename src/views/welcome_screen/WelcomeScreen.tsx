import React, { useState } from "react";
import style from "./WelcomeScreen.module.css";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

import {
  fadeLeft,
  fadeRight,
  fadeDown,
  fadeUp,
} from "./animations/welcomeScreenAnimations";

const WelcomeScreen = () => {
  const navigate = useNavigate();
  const [startAnimation, setStartAnimation] = useState<Boolean>(false);

  const handleButtonClick = () => {
    setStartAnimation(true);
    setTimeout(() => {
      navigate("/panini");
    }, 4000);
  };

  const circlesMap = [
    { class: style.circle_leftInner, variant: fadeLeft },
    { class: style.circle_rightInner, variant: fadeRight },
    { class: style.circle_left, variant: fadeLeft },
    { class: style.circle_right, variant: fadeRight },
    { class: style.halfCircle_left, variant: fadeLeft },
    { class: style.halfCircle_right, variant: fadeRight },
    { class: style.circle_up, variant: fadeUp },
    { class: style.circle_down, variant: fadeDown },
  ];

  return (
    <div className={style.container}>
      {circlesMap.map((item) => (
        <motion.div
          className={`${style.circle} ${item.class}`}
          animate={startAnimation ? "visible" : "hidden"}
          variants={item.variant}
        ></motion.div>
      ))}

      <motion.div
        className={`${style.header}
         ${startAnimation ? style.header_noBorder : ""}`}
        animate={
          startAnimation
            ? { opacity: 0, transition: { delay: 1, duration: 2 } }
            : { opacity: 1 }
        }
      >
        <motion.span>Panini Creator</motion.span>
        <motion.button className={style.button} onClick={handleButtonClick}>
          BEGIN
        </motion.button>
      </motion.div>
    </div>
  );
};

export default WelcomeScreen;
