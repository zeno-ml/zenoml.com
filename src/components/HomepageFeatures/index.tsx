import React from "react";
import clsx from "clsx";

import styles from "./styles.module.css";

type FeatureItem = {
  title: string;
  icon: React.ComponentType<React.ComponentProps<"png">>;
  description: JSX.Element;
};

// function FadeInSection(props) {
//   const [isVisible, setVisible] = React.useState(true);
//   const domRef = React.useRef();
//   React.useEffect(() => {
//     const observer = new IntersectionObserver((entries) => {
//       entries.forEach((entry) => setVisible(entry.isIntersecting));
//     });
//     observer.observe(domRef.current);
//     return () => observer.unobserve(domRef.current);
//   }, []);
//   return (
//     <div
//       className={`fade-in-section ${isVisible ? "is-visible" : ""}`}
//       ref={domRef}
//     >
//       {props.children}
//     </div>
//   );
// }

const FeatureList: FeatureItem[] = [
  {
    title: "Code",
    icon: require("@site/static/img/codeIcon.png").default,
    description: (
      <>
        Transfer Python code from your existing workflows into Zeno's API
      </>
    ),
  },
  {
    title: "Slice",
    icon: require("@site/static/img/sliceIcon.png").default,
    description: (
      <>
        Slice your data to explore instances find interesting subsets
      </>
    ),
  },
  {
    title: "Report",
    icon: require("@site/static/img/reportIcon.png").default,
    description: (
      <>
        Report your slices or models in matricies or thresholds
      </>
    ),
  }
];

function Feature({ title, icon, description }: FeatureItem) {
  return (
    // <FadeInSection>
    <div className={styles.featureWrapper}>
      <div className={styles.featureIcon}>
        <img src={icon}></img>
      </div>
      <h1 className={styles.centerText}>
        {title}
      </h1>
      <p>{description}</p>
      <div className={styles.featureArrow}>
        
      </div>
    </div>
    // </FadeInSection>
  );
}

export default function HomepageTeaser(): JSX.Element {
  return (
    <div className={styles.featureContainer}>
      {FeatureList.map((props, idx) => (
        <Feature key={idx} {...props} />
      ))}
    </div>
  );
}
