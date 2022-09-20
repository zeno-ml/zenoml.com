import React from "react";
import clsx from "clsx";
import styles from "./styles.module.css";

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<"svg">>;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: "for any datatype",
    Svg: require("@site/static/img/undraw_docusaurus_mountain.svg").default,
    description: (
      <>
        Zeno's extensible <span className="heroEmphasis">Python API</span> can be used to run models, distill new metadata
        columns, and transform data for deep model evaluation.
      </>
    ),
  },
  {
    title: "with no coding experience",
    Svg: require("@site/static/img/undraw_docusaurus_tree.svg").default,
    description: (
      <>
        Zeno's interactive <span className="heroEmphasis">Exploration UI</span> can be used to explore model performance across a
        variety of use cases and discover unknown failures.
      </>
    ),
  },
  {
    title: "across models over time",
    Svg: require("@site/static/img/undraw_docusaurus_react.svg").default,
    description: (
      <>
        Zeno’s automated <span className="heroEmphasis">Analysis UI</span> tracks model performance discover dataset shift and regressions. It
        also allows users to define tests and set expectations of model
        performance.
      </>
    ),
  },
];

function Feature({ title, Svg, description }: FeatureItem) {
  return (
    <div className="row heroFeature">
        <h1 className="heroSubtitle">Conduct behavioral evaluation on your models <span className="underline">{title}</span></h1>
        <p>{description}</p>
        <Svg className={styles.featureSvg} role="img" />
    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
  return (
    <section className={styles.features}>
      <div className="container">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        {/* </div> */}
      </div>
    </section>
  );
}
