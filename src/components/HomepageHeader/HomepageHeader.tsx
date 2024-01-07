import Link from "@docusaurus/Link";
import React from "react";
import { Demo } from "../Demo/Demo";
import styles from "./index.module.css";

export function HomepageHeader() {
  return (
    <div className={styles.headerContainer}>
      <div className={styles.header}>
        <h1 style={{ fontSize: "72px", textAlign: "center", fontFamily: "'Hammersmith One'" }}>
          AI Evaluation Made Easy
        </h1>
        <h4 className={styles.subheader}>
          Discover how your AI performs with <b>Zeno</b>.
          <br /> Explore your data, uncover failures, and create beautiful, interactive charts.
        </h4>
        <div
          className={styles.buttons}
          style={{ justifyContent: "space-between", alignItems: "center" }}
        >
          <div className={styles.buttons}>
            <Link className="button button--lg heroButtonSecondary" to="/docs/intro">
              Get Started
            </Link>
            <Link className="button button--lg heroButtonSecondary" to="https://hub.zenoml.com/">
              Explore Projects
            </Link>
          </div>
        </div>
      </div>
      <Demo />
    </div>
  );
}
