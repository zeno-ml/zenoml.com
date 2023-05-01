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
    <header>
      <div className={styles.header}>
        <div className={styles.headerLeft}>
          <h1 style={{ fontSize: "42px" }}>
            AI Data Management & <br /> Evaluation Platform
          </h1>
          <h3 className={styles.subheader}>
            <b>Zeno</b> is an interactive platform for exploring and managing
            your data, debugging your models, and tracking and comparing model
            performance.
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
                to="/docs/demos"
              >
                Try it!
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
      </div>
    </header>
  );
}
