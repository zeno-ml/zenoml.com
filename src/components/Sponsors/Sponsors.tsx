import React from "react";

import styles from "./styles.module.css";

export function Sponsors(props) {
  return (
    <div className={styles.sponsorsWrap}>
      <p className={styles.intro}>Sponsors and Organizations</p>
      <div className={styles.group}>
        <img src="/img/mozilla-text.png" height="35px" className={styles.logo} />
        <img src="/img/nsf-logo.png" height="80px" className={styles.logo} />
        <img src="/img/cmu-logo.png" height="75px" className={styles.logo} />
        <img src="/img/hcii-logo.png" height="75px" className={styles.logo} />
      </div>
    </div>
  );
}
