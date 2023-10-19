import React from "react";

import styles from "./styles.module.css";

export function Sponsors(props) {
  return (
    <div className={styles.sponsorsWrap}>
      <p className={styles.intro}>Sponsors and Organizations</p>
      <div className={styles.group}>
        <img src="/img/mozilla-text.png" height="35px" className={styles.logo} alt="Mozilla logo" />
        <img src="/img/nsf-logo.png" height="80px" className={styles.logo} alt="NSF logo" />
        <img src="/img/cmu.png" height="80px" className={styles.logo} alt="CMU logo" />
      </div>
    </div>
  );
}
