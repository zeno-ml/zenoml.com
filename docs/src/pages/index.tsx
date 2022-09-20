import React from "react";
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
      <h1 className="heroTitle">Conduct <span className="underline">behavioral evaluation</span> on your ML models
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
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`Zeno ML`}
      description="Machine learning evaluation framework"
    >
      <HomepageHeader />
      <main className="heroMain">
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
