import React, { useEffect, useState } from "react";
import style from "./RadioSelect.module.css";

interface iRadioSelect {
  checked?: boolean;
  name: string;
  id: string;
  label: string;
  value: string;
}

export const RadioSelect = (props: iRadioSelect) => {
  return (
    <div className={style.wrapper}>
      <input
        type="radio"
        className={style.input}
        name={props.name}
        checked={props.checked}
        id={props.id}
        value={props.value}
      />
      <label htmlFor={props.id} className={style.label}>
        {props.label}
      </label>
    </div>
  );
};
