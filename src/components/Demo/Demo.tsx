import React from "react";
import styles from "./index.module.css";

export function Demo() {
  return (
    <div className={styles.demo}>
      <video controls width="100%">
        <source
          src={require("@site/static/img/teaser.mp4").default}
          type="video/mp4"
        ></source>
      </video>
    </div>
  );
}
