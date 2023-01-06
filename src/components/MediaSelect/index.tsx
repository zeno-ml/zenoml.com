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
      <div
        id={styles.selectContainer}
        style={{ alignItems: "center", width: "100%" }}
      >
        {menu}
        <h2 style={{ textAlign: "center", width: "100%" }}>
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
          flexWrap: "wrap",
          justifyContent: "space-between",
          width: "75%",
          marginLeft: "30px",
        }}
      >
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
