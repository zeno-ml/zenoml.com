import Link from "@docusaurus/Link";
import React from "react";
import { Demo } from "../Demo/Demo";
import styles from "./index.module.css";

export function HomepageHeader() {
  return (
    <div className={styles.headerContainer}>
      <div className={styles.header}>
        <div className={styles.headerLeft}>
          <h1 style={{ fontSize: "45px" }}>AI Evaluation Made Easy</h1>
          <h4 className={styles.subheader}>
            Discover how your AI performs with <b>Zeno</b>. Explore your data, uncover
            failures, and create beautiful, interactive reports.
          </h4>
          <div
            className={styles.buttons}
            style={{ justifyContent: "space-between", alignItems: "center" }}
          >
            <div className={styles.buttons}>
              <Link className="button button--lg heroButtonSecondary" to="/docs/intro">
                Get Started
              </Link>
              <Link
                style={{ color: "#6a1b9a" }}
                className="button button--lg heroButtonSecondary"
                to="https://hub.zenoml.com/"
              >
                Explore
              </Link>
            </div>
            <iframe
              src="https://ghbtns.com/github-btn.html?user=zeno-ml&repo=zeno-build&type=star&count=true&size=large"
              width="140"
              height="30"
              title="GitHub"
            ></iframe>
          </div>
        </div>
        <div className={styles.headerRight}>
          <Demo />
        </div>
      </div>
    </div>
  );
}
