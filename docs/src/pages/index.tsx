import React, { useEffect, useState } from "react";
import clsx from "clsx";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import HomepageFeatures from "@site/src/components/HomepageFeatures";

import styles from "./index.module.css";

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className="heroBanner">
      <h1 className="heroTitle">Conduct <strong><em>behavioral evaluation</em></strong> on your ML models
      </h1>

      <div className={styles.buttons}>
        <Link
          className="button button--lg heroButton"
          to="/docs/intro/get_started"
        >
          Get Started!️
        </Link>
        <Link
          className="button button--lg heroButtonSecondary"
          to="/docs/intro"
        >
          Explore Docs
        </Link>
      </div>
    </header>
  );
}

export default function Home(): JSX.Element {
  const [show, setShow] = useState(true)
  const controlIntroDemo = () => {
    if (window.scrollY>500) {
      setShow(false)
    } else {
      setShow(true)
    }
  }

  useEffect (() => {
    window.addEventListener('scroll', controlIntroDemo)
  }, [])

  const { siteConfig } = useDocusaurusContext();

  return (
    <Layout
      title={`Zeno ML`}
      description="Machine learning evaluation framework"
    >
    <HomepageHeader />
    <div className="heroDemoIntro">
      <video className="heroDemo">
        <source src="movie.mp4" className={`hideVid ${show && 'showVid'}`} type="video/mp4"></source>
      </video>
    </div>

    <main className="heroMain">
      <HomepageFeatures />
    </main>
    </Layout>
  );
}
