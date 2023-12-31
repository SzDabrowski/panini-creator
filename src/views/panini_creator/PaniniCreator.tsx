import React from "react";
import style from "./PaniniCreator.module.css";
import BaseSection from "../../Form/BaseSection/BaseSection";

import { DicesIcon } from "../../assets/DicesIcon";

const PaniniCreator = () => {
  return (
    <div className={style.container}>
      <header className={style.header}>
        <h1>Panini Creator</h1>
        <button
          onClick={() => {
            return null;
          }}
        >
          <DicesIcon />
          RANDOMIZE PANINI
        </button>
      </header>

      <BaseSection />
    </div>
  );
};
export default PaniniCreator;
