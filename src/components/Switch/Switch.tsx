import React, { useEffect, useState } from "react";
import style from "./Switch.module.css";

interface iSwitch {
  state: boolean;
  onChange(e: React.ChangeEvent<HTMLInputElement>): void;
}

export const Switch = ({ onChange, state }: iSwitch) => {
  const [checkedState, setCheckedState] = useState<boolean>(state);

  useEffect(() => {
    setCheckedState(state);
    console.log(state);
  }, [state]);

  return (
    <label className={style.switch}>
      <input
        type={"checkbox"}
        checked={checkedState}
        onChange={(e) => {
          setCheckedState(!checkedState);
          onChange(e);
        }}
      />
      <span className={style.slider} />
    </label>
  );
};
