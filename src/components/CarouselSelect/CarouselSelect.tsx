import React, { useState } from "react";
import style from "./CarouselSelect.module.css";
import { ArrowLeftIcon, ArrowRightIcon } from "../../assets/ArrowIcons";

interface iCarouselSelectProps {
  items: string[];
  onSelect: (selectedItem: string) => void;
  selectedItem?: string;
  icon?: React.ReactNode;
}

export const CarouselSelect = ({
  items,
  onSelect,
  icon,
  selectedItem: controlledSelectedItem,
}: iCarouselSelectProps) => {
  const [localSelectedItem, setLocalSelectedItem] = useState(items[0]);
  const selectedItem = controlledSelectedItem ?? localSelectedItem;

  const handleNext = () => {
    const currentIndex = items.indexOf(selectedItem);
    const nextIndex = (currentIndex + 1) % items.length;
    const nextItem = items[nextIndex];
    setLocalSelectedItem(nextItem);
    onSelect(nextItem);
  };

  const handlePrev = () => {
    const currentIndex = items.indexOf(selectedItem);
    const prevIndex = currentIndex === 0 ? items.length - 1 : currentIndex - 1;
    const prevItem = items[prevIndex];
    setLocalSelectedItem(prevItem);
    onSelect(prevItem);
  };

  return (
    <div className={style.wrapper}>
      <button type="button" onClick={handlePrev}>
        <ArrowLeftIcon />
      </button>
      <span>
        {icon}
        {selectedItem}
      </span>
      <button type="button" onClick={handleNext}>
        <ArrowRightIcon />
      </button>
    </div>
  );
};
