import { Header } from "@site/src/pages";
import React from "react";
import styles from "./styles.module.css";

export function Trending(props) {
  return (
    <div className={styles.container}>
      <Header
        title="Trending"
        summary="Trending Projects and Reports"
        description="Explore popular public projects and reports on Zeno Hub"
      ></Header>
      <br />
      <div className={styles.iframe}>
        <iframe
          height="250"
          width="100%"
          src="https://hub.zenoml.com/embed/entry/featured/4"
        ></iframe>
      </div>
    </div>
  );
}
