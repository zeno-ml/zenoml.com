import React from "react";
import clsx from "clsx";
import styles from "./styles.module.css";


type FeatureItem = {
  title: string;
  video: React.ComponentType<React.ComponentProps<"svg">>;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: "for any datatype",
    video: require("@site/static/img/undraw_docusaurus_mountain.svg").default,
    description: (
      <>
        Zeno's extensible <span className="heroEmphasis">Python API</span> can be used to run models, distill new metadata
        columns, and transform data for deep model evaluation.
      </>
    ),
  },
  {
    title: "with no coding experience",
    video: require("@site/static/img/undraw_docusaurus_tree.svg").default,
    description: (
      <>
        Zeno's interactive <span className="heroEmphasis">Exploration UI</span> can be used to explore model performance across a
        variety of use cases and discover unknown failures.
      </>
    ),
  },
  {
    title: "across models over time",
    video: require("@site/static/img/undraw_docusaurus_react.svg").default,
    description: (
      <>
        Zeno’s automated <span className="heroEmphasis">Analysis UI</span> tracks model performance discover dataset shift and regressions. It
        also allows users to define tests and set expectations of model
        performance.
      </>
    ),
  },
];

function Feature({ title, video, description }: FeatureItem) {
  return (
    <div className="row heroFeature">
        <div className="heroDescription">
          <h1 className="heroSubtitle">Conduct behavioral evaluation <strong><em>{title}</em></strong></h1>
          <p>{description}</p>
        </div>
        {/* <Svg className={styles.featureSvg} role="img" /> */}
        <video className="heroDemo"></video>
    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
  return (
    <div className="container">
        {FeatureList.map((props, idx) => (
          <Feature key={idx} {...props} />
        ))}
      {/* </div> */}
    </div>
  );
}
