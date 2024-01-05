import Link from "@docusaurus/Link";
import React, { useCallback, useState } from "react";
import { Demo } from "../Demo/Demo";
import styles from "./index.module.css";

export function HomepageHeader() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  let frameId = null;

  const updatePosition = (newPosition) => {
    setPosition(newPosition);
    frameId = null;
  };

  const handleMouseMove = useCallback((e) => {
    if (frameId) {
      cancelAnimationFrame(frameId);
    }

    const boundingRect = e.target.getBoundingClientRect();

    frameId = requestAnimationFrame(() =>
      updatePosition({
        x: e.clientX - boundingRect.left,
        y: e.clientY - boundingRect.top,
      })
    );
  }, []);

  const gradientStyle = {
    width: "100%",
    height: "100%",
    background: `radial-gradient(circle at ${position.x}px ${position.y}px, #6A1B9A, rgba(106, 27, 154, 0.80))`,
  };

  return (
    <div className={styles.headerContainer} style={gradientStyle} onMouseMove={handleMouseMove}>
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
              Try Zeno
            </Link>
          </div>
        </div>
      </div>
      <Demo />
    </div>
  );
}
