import React from "react";

export function TryWithZeno(props) {
  return (
    <a href={props.url} style={{ display: "flex", width: "fit-content" }}>
      <div id="zeno-try" style={{ display: "flex", alignItems: "center", width: "fit-content" }}>
        <img width="25px" src="/img/zeno-white.png" alt="Zeno logo"></img>
        <p
          style={{
            color: "white",
            fontWeight: "700",
            margin: "0px",
            marginLeft: "10px",
          }}
        >
          Open With Zeno
        </p>
      </div>
    </a>
  );
}
