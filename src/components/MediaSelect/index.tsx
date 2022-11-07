import React, {useState} from "react";
import clsx from "clsx";
import styles from "./styles.module.css";

function Selections({ select, extra, video }) {
  return (
      <>
        <span>{select}</span>
        <span className={styles.extra}>{extra}</span>
      </>
  );
}

export default function Select(propss) {

  const [selection, setSelection] = useState(propss.default);

  return (
    <div id={styles.selectContainer}>
      <div>
        {propss.list.map((props, idx) => (
          <div className={selection==props.select ? styles.activeSelection : styles.inactiveSelection} onClick={() => setSelection(props.select)}>
            <Selections key={idx} {...props} /> 
          </div>
        ))}
      </div>
      <video className={styles.video} autoPlay={true}>
        <source src={propss.list.find(element => {return element.select==selection;}).video} className="showVid" type="video/mp4"></source>
      </video>
    </div>
  );
}
