import React from "react";

import styles from "./styles.module.css";

export function Sponsors(props) {
  return (
    <div className={styles.group}>
      <p className={styles.intro}>Sponsors and Organizations: </p>
      <img src="/img/mozilla-text.png" height="35px" className={styles.logo} />
      <img src="/img/nsf-logo.png" height="50px" className={styles.logo} />
      <img src="/img/cmu-wordmark.png" height="35px" className={styles.logo} />
    </div>
  );
}
