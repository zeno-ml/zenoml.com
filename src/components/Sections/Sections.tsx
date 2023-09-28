import React from "react";
import styles from "./styles.module.css";

type SectionItem = {
  title: string;
  description: string;
  icon: React.ComponentType<React.ComponentProps<"png">>;
};

const SectionList: SectionItem[] = [
  {
    title: "Explore",
    description: "Visualize data and model outputs with views for any data type",
    icon: require("@site/static/img/explore-icon.png").default,
  },
  {
    title: "Analyze",
    description: "Discover and save errors for model comparison and updates",
    icon: require("@site/static/img/slice-icon.png").default,
  },
  {
    title: "Report",
    description: "Create rich, interactive reports sharing your findings",
    icon: require("@site/static/img/report-icon.png").default,
  },
];

export function Sections() {
  return (
    <div className={styles.sectionContainer}>
      {SectionList.map((props, idx) => (
        <SectionBlock {...props} key={idx} />
      ))}
    </div>
  );
}

function SectionBlock(props) {
  return (
    <div className={styles.section}>
      <div>
        <img className={styles.image} src={props.icon}></img>
      </div>
      <div className="section-text-container">
        <h2
          style={{
            fontSize: "26px",
            fontWeight: "600",
            marginBottom: "10px",
            color: "black",
          }}
        >
          {props.title}
        </h2>
        <p className={styles.description}>{props.description}</p>
      </div>
    </div>
  );
}
