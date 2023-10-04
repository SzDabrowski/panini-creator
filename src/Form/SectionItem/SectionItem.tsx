import React, { useState } from "react";
import style from "./SectionItem.module.css";

import { SwitchWrapper } from "../../components/SwitchWrapper/SwitchWrapper";
import AddIcon from "../../assets/AddIcon/AddIcon";
import { DeleteICon } from "../../assets/DeleteIcon/DeleteIcon";

import { CarouselSelect } from "../../components/CarouselSelect/CarouselSelect";
import { DropdownSelect } from "../../components/DropdownSelect/DropdownSelect";
import { SelectTiles } from "../../components/SelectTiles/SelectTiles";

import { SelectorType } from "../../data/enums/enum";
import { buttonType } from "../../data/enums/enum";

interface iSectionItem {
  index: number;
  sectionTitle: string;
  variants: string[];
  fieldType: SelectorType;
  enableAdding?: switchVal;
  switchState?: switchVal;
}

type switchVal = true | false | undefined;

export const SectionItem = (props: iSectionItem) => {
  const [switchState, setSwitchState] = useState<boolean>(
    props.switchState || true
  );
  const [enableAdding, setEnableAdding] = useState<boolean>(
    props.enableAdding || false
  );
  const [inputsArray, setInputsArray] = useState([""]);

  function btnClickHandler(index: number) {
    if (index == 0) {
      setInputsArray([...inputsArray, ""]);
    } else {
      setInputsArray(inputsArray.slice(1));
    }
  }

  function buttomRender(direction: buttonType, index: number) {
    switch (direction) {
      case buttonType.add:
        return (
          <AddIcon
            onClick={() => {
              btnClickHandler(index);
            }}
          />
        );
      case buttonType.del:
        return (
          <DeleteICon
            onClick={() => {
              btnClickHandler(index);
            }}
          />
        );
    }
  }

  const handleSwitch = () => {
    setSwitchState(!switchState);
  };

  return (
    <section>
      <div className={style.formField}>
        {enableAdding ? (
          <SwitchWrapper
            title={props.sectionTitle}
            handleSwitch={handleSwitch}
            state={switchState}
          />
        ) : (
          <div className={style.titleWrapper}>
            <span>{props.sectionTitle}</span>
          </div>
        )}
        {switchState ? (
          <div>
            {enableAdding
              ? inputsArray.map((_, index) => (
                  <div
                    className={`${style.ingredientWrapper} ${
                      index > 0 ? style.addedField : ""
                    }`}
                  >
                    {buttomRender(
                      index === 0 ? buttonType.add : buttonType.del,
                      index
                    )}
                    {selectorRender(props.fieldType, props.variants)}
                    {props.fieldType == "carousel" && index != 0 && (
                      <div className={style.carouselSeparator} />
                    )}
                  </div>
                ))
              : selectorRender(props.fieldType, props.variants)}
          </div>
        ) : (
          <></>
        )}
      </div>
    </section>
  );
};

function selectorRender(selector: SelectorType, variants: string[]) {
  switch (selector) {
    case SelectorType.Carousel:
      return (
        <CarouselSelect
          items={variants}
          onSelect={() => {
            return null;
          }}
        />
      );
    case SelectorType.Dropdown:
      return <DropdownSelect items={variants} />;
    case SelectorType.tiles:
      return <SelectTiles items={variants} />;
  }
}
