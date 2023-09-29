import React from "react";
import styles from "./index.module.css";

export function Demo() {
  return (
    <div className={styles.demo}>
      <video controls width="100%" autoPlay>
        <source
          src={require("@site/static/img/teaser.m4v").default}
          type="video/mp4"
        ></source>
      </video>
    </div>
  );
}
