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
    description: "Tell stories about findings in your data and models",
    icon: require("@site/static/img/report-icon.png").default,
  },
];

export function Sections() {
  return (
    <div id="section-2">
      {SectionList.map((props, idx) => (
        <SectionBlock {...props} key={idx} />
      ))}
    </div>
  );
}

function SectionBlock(props) {
  return (
    <div className="section-container">
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
      <div className="section-text-container">
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
  );
}