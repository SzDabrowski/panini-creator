import React from "react";
import style from "./BaseSection.module.css";
import { CarouselSelect } from "../../components/CarouselSelect/CarouselSelect";

import { breadVariants } from "../../data/bread";
import { DicesIcon } from "../../assets/DicesIcon";
import GrainIcon from "../../assets/GrainIcon";
import WheatIcon from "../../assets/WheatIcon";

interface iBaseSection {}

export const BaseSection = ({}: iBaseSection) => {
  return (
    <div>
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

      <div className={style.formField}>
        <span>Bread</span>
        <CarouselSelect
          items={breadVariants}
          //icon={}
          onSelect={function (selectedItem: string): void {
            throw new Error("Function not implemented.");
          }}
        />
      </div>
    </div>
  );
};

export default BaseSection;
