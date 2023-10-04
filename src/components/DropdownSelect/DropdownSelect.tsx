import React, { useState } from "react";
import {
  ArrowRightIcon,
  ArrowLeftIcon,
  ArrowUpIcon,
  ArrowDownIcon,
} from "../../assets/ArrowIcons";

import styles from "./DropdownSelect.module.css";

interface iDropdownSelect {
  items: String[];
}

export const DropdownSelect = ({ items }: iDropdownSelect) => {
  const [selectedItem, setSelectedItem] = useState(items[0]);
  const [isOpen, setIsOpen] = useState<Boolean>(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  const handleSelect = () => {
    return null;
  };

  return (
    <div className={styles.wrapper} onClick={handleClick}>
      <div className={styles.selectedItem}>{selectedItem}</div>
      {isOpen && (
        <div className={styles.options}>
          {items.map((item, index) => {
            if (item !== selectedItem) {
              return (
                <div
                  key={index}
                  className={styles.option}
                  onClick={handleSelect}
                >
                  {" "}
                  {item}
                </div>
              );
            }
          })}
        </div>
      )}
      <span className={styles.arrow}>
        {isOpen ? <ArrowUpIcon /> : <ArrowDownIcon />}
      </span>
    </div>
  );
};
