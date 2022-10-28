import React, { useEffect, useState } from "react";
import clsx from "clsx";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import CodeBlock from '@theme/CodeBlock';
import HomepageTeaser from "@site/src/components/HomepageTeaser";
import HomepageFeatures from "@site/src/components/HomepageFeatures";


import styles from "./index.module.css";

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className="heroBanner heroDemoGradient">
      <div className="heroTitle">
        <h1 className="heroTitleMain">
          Interactive machine learning evaluation
        </h1>
        <h2>
          A general-purpose framework for evaluating your models
        </h2>
      </div>

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
      <div style={{padding:'100px'}}>
        <HomepageFeatures />
      </div>
    </header>
  );
}

function APISnippets() {
  const { siteConfig } = useDocusaurusContext();

  const [selectedTab, setSelectedTab] = useState("Model");
  // const handleInput = event => {
  //   setSelectedTab(event.target.value);
  // };
  const handleInput = labelSelected => {
    setSelectedTab(labelSelected);
  };
  return (
  <div className="container heroTwoColumn">
    <h1>{ selectedTab }</h1>
    <Tabs groupId="operating-systems">
      <TabItem value="model" label="Model">
        <CodeBlock
          language="py"
          title="/src/components/Pythonfile.py"
          showLineNumbers>
          {`def hello_world():
      print("Hello, model!")`}
        </CodeBlock>
      </TabItem>
      <TabItem value="Metric" label="Metric">
        <CodeBlock
          language="py"
          title="/src/components/Pythonfile.py"
          showLineNumbers>
          {`def hello_world():
      print("Hello, metric!")`}
        </CodeBlock>
      </TabItem>
      <TabItem value="Distill" label="Distill">
        <CodeBlock
          language="py"
          title="/src/components/Pythonfile.py"
          showLineNumbers>
          {`def hello_world():
      print("Hello, distill!")`}
        </CodeBlock>
      </TabItem>
      <TabItem value="Transform" label="Transform">
        <CodeBlock
          language="py"
          title="/src/components/Pythonfile.py"
          showLineNumbers>
          {`def hello_world():
      print("Hello, transform!")`}
        </CodeBlock>
      </TabItem>
    </Tabs>
  </div>
  );
}

export default function Home(): JSX.Element {
  const [show, setShow] = useState(true);
  const controlIntroDemo = () => {
    if (window.scrollY > 500) {
      setShow(false);
    } else {
      setShow(true);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", controlIntroDemo);
  }, []);

  const { siteConfig } = useDocusaurusContext();

  return (
    <Layout
      title={`Zeno ML`}
      description="Machine learning evaluation framework"
    >
      <div id="homepage">
      <HomepageHeader />
      <main className="heroMain">
        <HomepageTeaser />
        <APISnippets/>
      </main>
      </div>
    </Layout>
  );
}
