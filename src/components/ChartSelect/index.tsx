import { Header } from "@site/src/pages";
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
      <div className={styles.left}>
        <img
          style={imageStyle}
          src={require("@site/static/img/radar-chart.png").default}
          alt="Screenshot of radar chart"
        />
        <div style={{ display: "flex", flexDirection: "column" }}>
          <img
            style={{ ...imageStyle, width: "300px" }}
            src={require("@site/static/img/bar-chart.png").default}
            alt="Screenshot of bar chart"
          />
          <img
            style={{ ...imageStyle, width: "300px" }}
            src={require("@site/static/img/beeswarm-chart.png").default}
            alt="Screenshot of beeswarm chart"
          />
        </div>
      </div>
      <div className={styles.right}>
        <Header
          title="Chart"
          summary="Chart Building"
          description="Create beautiful, interactive visualizations to compare model performnce
          across slices and models"
        ></Header>
        <p>
          Use Zeno's drag-and-drop interface to create interactive charts. Create a radar chart
          comparing multiple models on different slices of your data, or a beeswarm plot to compare
          hundreds of models.
        </p>
      </div>
    </div>
  );
}
