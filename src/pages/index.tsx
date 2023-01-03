import React, { useEffect, useState } from "react";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import DatatypeSelect from "@site/src/components/DatatypeSelect";
import ReportSelect from "@site/src/components/ReportSelect";

import { HomepageHeader } from "./HomepageHeader";
import { SectionHeader } from "./SectionHeader";
import { APISnippets } from "./ApiSnippets";

function Header({ title, summary, description }): JSX.Element {
  return (
    <div className="header">
      <hr style={{ marginBottom: "10px" }} />
      <p className="headerTitle">{title}</p>
      <h1>{summary}</h1>
      <h3 className="headerDescription">{description}</h3>
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
      </div>
    </Layout>
  );
}
