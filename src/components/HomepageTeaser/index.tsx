import React from "react";
import clsx from "clsx";
import styles from "./styles.module.css";

type FeatureItem = {
  title: string;
  video: React.ComponentType<React.ComponentProps<"svg">>;
  description: JSX.Element;
};

function FadeInSection(props) {
  const [isVisible, setVisible] = React.useState(true);
  const domRef = React.useRef();
  React.useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => setVisible(entry.isIntersecting));
    });
    observer.observe(domRef.current);
    return () => observer.unobserve(domRef.current);
  }, []);
  return (
    <div
      className={`fade-in-section ${isVisible ? "is-visible" : ""}`}
      ref={domRef}
    >
      {props.children}
    </div>
  );
}

const FeatureList: FeatureItem[] = [
  {
    title: "Zeno: your one stop shop for model evaluation",
    video: require("@site/static/img/exploration.mp4").default,
    description: (
      <>
        Zeno's extensible <span className="heroEmphasis">Python API</span> can
        be used to run models, distill new metadata columns, and transform data
        for deep model evaluation.
      </>
    ),
  }
];

function Feature({ title, video, description }: FeatureItem) {
  return (
    <FadeInSection>
      <div className="heroDescription">
        <h1 className="heroSubtitle">
          {title}
        </h1>
        <p>{description}</p>
      </div>
      <video className="heroDemo" controls autoPlay={true}>
        <source src={video} className="showVid" type="video/mp4"></source>
      </video>
    </FadeInSection>
  );
}

export default function HomepageTeaser(): JSX.Element {
  return (
    <div className="container">
      {FeatureList.map((props, idx) => (
        <Feature key={idx} {...props} />
      ))}
    </div>
  );
}
