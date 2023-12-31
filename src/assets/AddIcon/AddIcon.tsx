import React from "react";
import styles from "./AddIcon.module.css";

interface iAddIconProps {
  onClick: () => void;
  className?: String;
}

export const AddIcon = ({ onClick, className }: iAddIconProps) => {
  return (
    <svg
      onClick={onClick}
      className={styles.addIcon}
      xmlns="http://www.w3.org/2000/svg"
      width="17"
      height="17"
      viewBox="0 0 17 17"
      fill="none"
    >
      <rect
        className={styles.addIconBackground}
        x="0.25"
        y="0.25"
        width="16.5"
        height="16.5"
        rx="8.25"
        stroke="currentColor"
        strokeWidth="0.5"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M8.25 12.5L8.25 4.5L8.75 4.5L8.75 12.5L8.25 12.5Z"
        fill="currentColor"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12.5 8.75H4.5V8.25H12.5V8.75Z"
        fill="currentColor"
      />
    </svg>
  );
};

export default AddIcon;
