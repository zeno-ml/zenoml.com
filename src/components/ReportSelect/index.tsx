import { Header } from "@site/src/pages";
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
        <div className={styles.imageWrapper} />
      </div>
      <div className={styles.right}>
        <Header
          title="Report"
          summary="Report Authoring"
          description="Create reports with interactive visualizations and markdown"
        ></Header>
        <p>
          Visualizations can be combined with rich markdown text to share insights and tell stories
          about your data and model performance.
        </p>
        <p>Reports can be authored collaboratively and published broadly.</p>
      </div>
    </div>
  );
}
