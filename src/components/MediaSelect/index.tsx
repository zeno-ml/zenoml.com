import React, { useState } from "react";
import styles from "./styles.module.css";

function Selections({ select }) {
  return (
    <>
      <span>{select}</span>
    </>
  );
}

export default function Select(props) {
  const [selection, setSelection] = useState(props.default);

  let menu = (
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
  );

  return (
    <div id={styles.selectContainer}>
      {menu}
      <div id={styles.imageContainer}>
        {props.list
          .find((element) => {
            return element.select == selection;
          })
          .images.map((img) => (
            <img
              style={{
                maxHeight: "175px",
                maxWidth: "325px",
                objectFit: "contain",
                padding: "10px",
                background: "white",
                borderRadius: "4px",
                border: "1px solid var(--gray)",
              }}
              src={img}
            />
          ))}
      </div>
    </div>
  );
}
