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

  if (
    props.list
      .filter((s) => s.select === selection)[0]
      .select.startsWith("Your")
  ) {
    return (
      <div id={styles.selectContainer} style={{ alignItems: "center" }}>
        {menu}
        <h2>
          <a href="/docs/views/new-view">
            Learn how to support your custom data type <br />
            with a single JavaScript file.
          </a>
        </h2>
      </div>
    );
  }

  return (
    <div id={styles.selectContainer}>
      {menu}
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          gap: 10,
          flexWrap: "wrap",
        }}
      >
        {props.list
          .find((element) => {
            return element.select == selection;
          })
          .images.map((img) => (
            <img
              style={{
                maxHeight: "150px",
                maxWidth: "350px",
                objectFit: "contain",
              }}
              src={img}
            />
          ))}
      </div>
    </div>
  );
}
