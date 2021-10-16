import React from "react";
import styles from "./Button.module.scss";

export const Button = ({ text }) => {
  return (
    <div className={styles.box}>
      <p>{text}</p>
    </div>
  );
};
