import React from "react";
import style from "./SwitchWrapper.module.css";

import { Switch } from "../Switch/Switch";

interface iSwitchWrapper {
  state: boolean;
  title: String;
  handleSwitch: () => void;
}

export const SwitchWrapper = ({
  title,
  state,
  handleSwitch,
}: iSwitchWrapper) => {
  return (
    <div className={style.wrapper}>
      <span className={style.title}>{title}</span>
      <Switch onChange={handleSwitch} state={state} />
    </div>
  );
};
