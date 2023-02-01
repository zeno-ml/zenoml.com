import React from "react";

type SectionItem = {
  title: string;
  description: string;
  icon: React.ComponentType<React.ComponentProps<"png">>;
};

const SectionList: SectionItem[] = [
  {
    title: "Explore",
    description:
      "Explore data and model outputs with customizable views for any data type",
    icon: require("@site/static/img/explore-icon.png").default,
  },
  {
    title: "Evaluate",
    description:
      "Interactively discover, test and save model behavior for analysis and updates",
    icon: require("@site/static/img/slice-icon.png").default,
  },
  {
    title: "Report",
    description:
      "Create exportable visualizations and charts comparing models and slices",
    icon: require("@site/static/img/report-icon.png").default,
  },
];

export function Sections() {
  return (
    <div id="section-2">
      {SectionList.map((props, idx) => (
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            width: "calc(33% - 40px)",
          }}
        >
          <div>
            <img
              style={{
                borderRadius: "5px",
                height: "140px",
                width: "140px",
                minHeight: "140px",
                minWidth: "140px",
                border: "1px solid #EBEBEA",
              }}
              src={props.icon}
            ></img>
          </div>
          <div style={{ marginLeft: "20px" }}>
            <h2
              style={{
                fontSize: "30px",
                marginBottom: "10px",
              }}
            >
              {props.title}
            </h2>
            <p>{props.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
