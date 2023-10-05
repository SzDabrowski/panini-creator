import React, { useState } from "react";
import style from "../Section.module.css";

import { SectionItem } from "../SectionItem/SectionItem";

import { SelectorType } from "../../data/enums/enum";

import { eggVariants } from "../../data/egg";

type IngredientType = "cheese" | "meat" | "dressing";
type HiddenSection = "cheese" | "meat" | "dressing" | null;

interface iExtrasSection {}

interface iSection {
  sectionTitle: string;
  variants: string[];
  enableSwitch: boolean;
  switchState: boolean;

  SelectionIngredient: React.ElementType;
}

export const ExtrasSection = ({}: iExtrasSection) => {
  const [switchState, setSwitchState] = useState<boolean>(true);

  const formFields = [
    {
      title: "Eggs",
      enableAdding: true,
      variants: eggVariants,
      field: SelectorType.Carousel,
    },
  ];

  return (
    <div className={style.wrapper}>
      <h3 className={style.sectionTitle}>CONFIGURE EXTRAS</h3>

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

export default ExtrasSection;
