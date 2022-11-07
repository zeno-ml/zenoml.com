import React from "react";
import clsx from "clsx";

import styles from "./styles.module.css";

export default function Header({ title, summary, description }): JSX.Element {
  return (
    <>
      <p className={styles.headerTitle}>{title}</p>
      <h1>{summary}</h1>
      <h3>{description}</h3>
    </>
  );
}
