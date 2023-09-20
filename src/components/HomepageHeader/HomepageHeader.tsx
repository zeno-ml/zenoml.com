import Link from "@docusaurus/Link";
import React from "react";
import { Demo } from "../Demo/Demo";
import styles from "./index.module.css";

export function HomepageHeader() {
  return (
    <div className={styles.headerContainer}>
      <div className={styles.header}>
        <div className={styles.headerLeft}>
          <h1 style={{ fontSize: "56px" }}>AI Evaluation Platform</h1>
          <h3 className={styles.subheader}>
            <b>Zeno</b> is an interactive platform for evaluating any AI system.
            You can explore your data, discover failures, and create and share
            interactive evaluation reports.
          </h3>
          <div
            className={styles.buttons}
            style={{ justifyContent: "space-between", alignItems: "center" }}
          >
            <div className={styles.buttons}>
              <Link
                className="button button--lg heroButtonSecondary"
                to="/docs/quickstart"
              >
                Quickstart
              </Link>
              <Link
                style={{ color: "#6a1b9a" }}
                className="button button--lg heroButtonSecondary"
                to="https://hub.zenoml.com/"
              >
                Discover
              </Link>
            </div>
            <iframe
              src="https://ghbtns.com/github-btn.html?user=zeno-ml&repo=zeno&type=star&count=true&size=large"
              frameborder="0"
              scrolling="0"
              width="170"
              height="30"
              title="GitHub"
            ></iframe>
          </div>
        </div>
        <Demo />
      </div>
    </div>
  );
}
