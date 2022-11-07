import React, { useEffect, useState } from "react";
import clsx from "clsx";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import CodeBlock from '@theme/CodeBlock';
import DatatypeSelect from "@site/src/components/DatatypeSelect";
import ReportSelect from "@site/src/components/ReportSelect";

import video from "@site/static/img/exploration.mp4";

import styles from "./index.module.css";

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header id="section-1">
      <video loop="true" autoplay="autoplay" muted id="video-background">
        <source src={video} className="showVid" type="video/mp4"></source>
      </video>

      <span className="content">
        <h1>ML Evaluation doesn't reflect real-life performance. It should.</h1>
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
      </span>
    </header>
  );
}

type SectionItem = {
  title: string;
  icon: React.ComponentType<React.ComponentProps<"png">>;
};

const SectionList: SectionItem[] = [
  {
    title: "Explore",
    icon: require("@site/static/img/sliceIcon.png").default,
  },
  {
    title: "Report",
    icon: require("@site/static/img/reportIcon.png").default,
  },
  {
    title: "Code",
    icon: require("@site/static/img/codeIcon.png").default,
  }
];

function SectionHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <div id="section-2">
      {SectionList.map((props, idx) => (
        <div>
          <div className="sectionIcon">
            <img src={props.icon}></img>
          </div>
          <h2 className="sectionTitle">{props.title}</h2>
        </div>
      ))}
    </div>
  );
}

function Header({ title, summary, description }): JSX.Element {
  return (
    <div className="header">
      <p className="headerTitle">{title}</p>
      <h1>{summary}</h1>
      <h3 className="headerDescription">{description}</h3>
    </div>
  );
}


function APISnippets() {
  const { siteConfig } = useDocusaurusContext();

  return (
  <div className="container heroTwoColumn">
    <p>Potential description of all the functions</p>
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
        <div id="pageWrapper">
          <SectionHeader />
          <Header 
            title="Explore"
            summary="Interactively explore your data"
            description="Use Zeno for any datatype"
          ></Header>
          <DatatypeSelect />
          <Header 
            title="Report"
            summary="Report your findings to stakeholders"
            description="Display your slices in matricies and more"
          ></Header>
          <ReportSelect />
          <Header 
            title="Code"
            summary="Code to refine your analysis"
            description="Use existing python functions to refine your search"
          ></Header>
          <APISnippets />
        </div>
        
        {/* <ExploreSection />
        <ReportSection />
        <CodeSection /> */}
      </div>
    </Layout>
  );
}
