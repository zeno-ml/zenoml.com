import React from "react";
import styles from "./styles.module.css";

let imageStyle = {
  width: "400px",
  objectFit: "contain",
  border: "1px solid var(--gray)",
  borderRadius: "4px",
  margin: "5px",
  padding: "10px",
  background: "white",
};

export default function DatatypeSelect() {
  return (
    <div className={styles.reportWrapper}>
      <div className={styles.left} style={{}}>
        <img
          style={imageStyle}
          src={require("@site/static/img/report.png").default}
        />
      </div>
      <div className={styles.right}>
        <p>
          Visualizations can be combined with rich markdown text to share
          insights and tell stories about your data and model performance.
        </p>
        <p>
          Reports can be shared with other stakeholders or posted on any
          platform. All that people need to read your report is a link to it.
        </p>
      </div>
    </div>
  );
}
