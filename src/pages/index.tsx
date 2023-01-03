import React from "react";
import Layout from "@theme/Layout";

import DatatypeSelect from "@site/src/components/DatatypeSelect";
import ReportSelect from "@site/src/components/ReportSelect";
import { HomepageHeader } from "@site/src/components/HomepageHeader/HomepageHeader";
import { Sections } from "@site/src/components/Sections/Sections";
import { APISnippets } from "@site/src/components/APISnippets/ApiSnippets";

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
  return (
    <Layout
      title={`Zeno ML`}
      description="Machine learning evaluation framework"
    >
      <div id="homepage">
        <HomepageHeader />
        <div id="pageWrapper">
          <Sections />
          <Header
            title="Explore"
            summary="Interactively explore your data"
            description="Zeno's modular instance view can be extended to render any data type and model output"
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
