import React, { useRef } from "react";
import Link from "@docusaurus/Link";
import styles from "./index.module.css";

import video from "@site/static/img/teaser.mp4";

export function HomepageHeader() {
  let videoRef = useRef();

  function setPlayback() {
    if (videoRef) {
      videoRef.current.playbackRate = 1.25;
    }
  }

  return (
    <header className={styles.header}>
      <div className={styles.headerLeft}>
        <h1>Evaluation for Modern AI</h1>
        <h3 className={styles.subheader}>
          <b>Zeno</b> is a machine learning evaluation framework for exploring
          your data, debugging foundational models, and tracking and comparing
          model performance.
        </h3>
        <div
          className={styles.buttons}
          style={{ justifyContent: "space-between" }}
        >
          <div className={styles.buttons}>
            <Link
              className="button button--lg heroButtonSecondary"
              to="/docs/quickstart"
            >
              Quickstart
            </Link>
            <Link
              className="button button--lg heroButtonSecondary"
              to="/docs/intro"
            >
              Explore Docs
            </Link>
          </div>
          <Link
            style={{ color: "var(--ifm-color-primary)" }}
            className="button button--lg heroButtonSecondary"
            to="/docs/demos"
          >
            Try it!
          </Link>
        </div>
      </div>
      <div className={styles.headerRight}>
        <video
          ref={videoRef}
          controls
          width="100%"
          onCanPlay={() => setPlayback()}
        >
          <source src={video} type="video/mp4"></source>
        </video>
      </div>
    </header>
  );
}
