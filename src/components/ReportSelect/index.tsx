import React from "react";

let imageStyle = {
  width: "350px",
  objectFit: "contain",
  border: "1px solid var(--gray)",
  borderRadius: "4px",
  margin: "5px",
  padding: "10px",
  background: "white",
};

export default function DatatypeSelect() {
  return (
    <div style={{ display: "flex", width: "100%" }}>
      <div
        style={{
          width: "60%",
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
          justifyContent: "center",
          alignItems: "middle",
        }}
      >
        <img
          style={imageStyle}
          src={require("@site/static/img/chart.png").default}
        />
        <img
          style={imageStyle}
          src={require("@site/static/img/line-chart.png").default}
        />
        <img
          style={{ ...imageStyle, width: "500px" }}
          src={require("@site/static/img/trend-chart.png").default}
        />
      </div>
      <div style={{ width: "40%", marginRight: "10px", marginLeft: "10px" }}>
        <p style={{ fontSize: "22px" }}>
          Slices created in the exploration page can be used to build
          interactive visualizations for deeper analyses of model behavior. This
          includes bar charts for comparing slice performance across models and
          trend tables for detecting regressions in slice performance.
        </p>
        <p style={{ fontSize: "22px" }}>
          The charts can be exported as PDFs or PNGs for sharing with other
          stakeholders.
        </p>
      </div>
    </div>
  );
}
