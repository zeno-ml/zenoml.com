import { Header } from "@site/src/pages";
import React from "react";
import styles from "./styles.module.css";

let imageStyle = {
  padding: "50px",
  width: "500px",
};

export default function DiscoverSelect() {
  return (
    <div className={styles.reportWrapper}>
      <div className={styles.left}>
        <img
          style={imageStyle}
          src={require("@site/static/img/slice-finder.png").default}
          alt="Screenshot of radar chart"
        />
      </div>
      <div className={styles.right}>
        <Header
          title="Error Discovery"
          summary="Error Discovery"
          description="Discover where your models fail with automated error analysis."
        ></Header>
        <p>
          Zeno includes advanced error discovery techniques such as{" "}
          <a href="https://research.google/pubs/slice-finder-automated-data-slicing-for-model-validation/">
            slice finder
          </a>{" "}
          to automatically surface your models' systematic failures.
        </p>
      </div>
    </div>
  );
}
