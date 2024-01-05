import { Header } from "@site/src/pages";
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
          key={props.select}
          className={selection == props.select ? styles.activeSelection : styles.inactiveSelection}
          onClick={() => setSelection(props.select)}
        >
          <Selections key={idx} {...props} />
        </div>
      ))}
    </div>
  );

  return (
    <div className={styles.container}>
      <div className={styles.sideBar}>
        <Header
          title="Explore"
          summary="Data Exploration"
          description="Zeno can visualize any type of data, from images to text, audio, sensor data, and more."
        ></Header>
        {menu}
      </div>
      <div id={styles.imageContainer}>
        {props.list
          .find((element) => {
            return element.select == selection;
          })
          .images.map((img) => (
            <img
              key={img}
              style={{
                maxHeight: "130px",
                maxWidth: "180px",
                objectFit: "cover",
                padding: "10px",
                background: "white",
                borderRadius: "4px",
                border: "1px solid var(--gray)",
                boxShadow: "0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)",
              }}
              src={img}
              alt="Example image from Imagenette"
            />
          ))}
      </div>
    </div>
  );
}
