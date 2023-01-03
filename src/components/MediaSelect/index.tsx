import React, { useState } from "react";
import styles from "./styles.module.css";

function Selections({ select, extra, video }) {
  return (
    <>
      <span>{select}</span>
    </>
  );
}

export default function Select(props) {
  const [selection, setSelection] = useState(props.default);

  return (
    <div id={styles.selectContainer}>
      <div>
        {props.list.map((props, idx) => (
          <div
            className={
              selection == props.select
                ? styles.activeSelection
                : styles.inactiveSelection
            }
            onClick={() => setSelection(props.select)}
          >
            <Selections key={idx} {...props} />
          </div>
        ))}
      </div>
      <img
        className={styles.image}
        src={
          props.list.find((element) => {
            return element.select == selection;
          }).video
        }
      ></img>
    </div>
  );
}
