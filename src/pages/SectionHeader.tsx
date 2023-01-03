import React from "react";

import styles from "./index.module.css";

type SectionItem = {
  title: string;
  description: string;
  icon: React.ComponentType<React.ComponentProps<"png">>;
};

const SectionList: SectionItem[] = [
  {
    title: "Explore",
    description: "Explore your data and model outputs",
    icon: require("@site/static/img/explore-icon.png").default,
  },
  {
    title: "Slice",
    description: "Create slices of your data",
    icon: require("@site/static/img/slice-icon.png").default,
  },
  {
    title: "Report",
    description: "Export summary reprots",
    icon: require("@site/static/img/report-icon.png").default,
  },
];

export function SectionHeader() {
  return (
    <div id="section-2">
      {SectionList.map((props, idx) => (
        <div>
          <div className="sectionIcon">
            <img
              style={{
                borderRadius: "5px",
                height: "150px",
                border: "1px solid #EBEBEA",
              }}
              src={props.icon}
            ></img>
          </div>
          <h2 className={styles.teaserTitle}>{props.title}</h2>
          <p>{props.description}</p>
        </div>
      ))}
    </div>
  );
}
