import React from "react";
import styles from "./index.module.css";

export function Demo() {
  return (
    <div style={{ paddingBottom: "30px", paddingTop: "20px", textAlign: "center" }}>
      <video controls autoPlay={true} loop className={styles.demo}>
        <source src={require("@site/static/img/teaser.mp4").default} type="video/mp4"></source>
      </video>
    </div>
  );
}
