import React from "react";
import { PropsWithChildren } from "react";
import styles from "./AppContainer.module.css";

export const AppContainer = (props: PropsWithChildren<{}>) => {
  return <div className={styles.container}>{props.children}</div>;
};
