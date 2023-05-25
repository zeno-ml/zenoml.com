import React from "react";
import styles from "./styles.module.css";

let imageStyle = {
  width: "300px",
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
          src={require("@site/static/img/chart.png").default}
        />
        <img
          style={imageStyle}
          src={require("@site/static/img/line-chart.png").default}
        />
        <img
          style={{ ...imageStyle, width: "400px" }}
          src={require("@site/static/img/trend-chart.png").default}
        />
      </div>
      <div className={styles.right}>
        <p>
          Slices created in the Exploration page can be used to build
          interactive visualizations for deeper analyses of model behavior.
          Visualizations include bar charts for comparing slice performance
          across models and trend tables for detecting regressions in slice
          performance.
        </p>
        <p>
          Zeno charts can be exported as PDFs or PNGs for sharing with other
          stakeholders, or shared as links for live views of model performance.
        </p>
      </div>
    </div>
  );
}
