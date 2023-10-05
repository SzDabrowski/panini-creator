import React, { useState } from "react";
import style from "../Section.module.css";

import { CarouselSelect } from "../../components/CarouselSelect/CarouselSelect";
import { DropdownSelect } from "../../components/DropdownSelect/DropdownSelect";
import { SelectTiles } from "../../components/SelectTiles/SelectTiles";
import { SwitchWrapper } from "../../components/SwitchWrapper/SwitchWrapper";

import AddIcon from "../../assets/AddIcon/AddIcon";
import { DeleteICon } from "../../assets/DeleteIcon/DeleteIcon";
import { SectionItem } from "../SectionItem/SectionItem";

import { cheeseVariants } from "../../data/cheese";
import { breadVariants } from "../../data/bread";
import { vegetableVariant } from "../../data/vegetable";
import { dressingVariants } from "../../data/dressing";

import { SelectorType } from "../../data/enums/enum";

import GrainIcon from "../../assets/GrainIcon";
import WheatIcon from "../../assets/WheatIcon";
import { meatVariants } from "../../data/meat";

type IngredientType = "cheese" | "meat" | "dressing";
type HiddenSection = "cheese" | "meat" | "dressing" | null;

interface iBaseSection {}

interface iSection {
  sectionTitle: string;
  variants: string[];
  enableSwitch: boolean;
  switchState: boolean;

  SelectionIngredient: React.ElementType;
}

export const BaseSection = ({}: iBaseSection) => {
  const [switchState, setSwitchState] = useState<boolean>(true);

  const formFields = [
    {
      title: "Bread",
      enableAdding: false,
      variants: breadVariants,
      field: SelectorType.Carousel,
    },
    {
      title: "Cheese",
      enableAdding: true,
      variants: cheeseVariants,
      field: SelectorType.Dropdown,
    },
    {
      title: "Meat",
      enableAdding: true,
      variants: meatVariants,
      field: SelectorType.Dropdown,
    },
    {
      title: "Dressing",
      enableAdding: true,
      variants: dressingVariants,
      field: SelectorType.Carousel,
    },
    {
      title: "Vegetables",
      enableAdding: false,
      variants: vegetableVariant,
      field: SelectorType.tiles,
    },
  ];

  return (
    <div className={style.wrapper}>
      <h2 className={style.sectionTitle}>CONFIGURE BASE</h2>

      {formFields.map((formField, index) => (
        <SectionItem
          index={index}
          sectionTitle={formField.title}
          variants={formField.variants}
          enableAdding={formField.enableAdding}
          fieldType={formField.field}
        />
      ))}
    </div>
  );
};

export default BaseSection;
