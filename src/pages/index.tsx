import { APISnippets } from "@site/src/components/ApiSnippets/ApiSnippets";
import DatatypeSelect from "@site/src/components/DatatypeSelect";
import { HomepageHeader } from "@site/src/components/HomepageHeader/HomepageHeader";
import ReportSelect from "@site/src/components/ReportSelect";
import { Sections } from "@site/src/components/Sections/Sections";
import { Sponsors } from "@site/src/components/Sponsors/Sponsors";
import { Demo } from "@site/src/components/Demo/Demo";

import Layout from "@theme/Layout";
import React from "react";

function Header({ title, summary, description }): JSX.Element {
  return (
    <div className="header">
      <hr style={{ marginBottom: "10px" }} />
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
        <Sponsors />
        <Demo />
        <div id="pageWrapper">
          <Sections />
          <Header
            title="Explore"
            summary="Explore your data"
            description="Zeno's modular instance view can be extended to render any data type and model output"
          ></Header>
          <DatatypeSelect />
          <Header
            title="Report"
            summary="Create interactive reports"
            description="Track and compare performance across slices and models"
          ></Header>
          <ReportSelect />
          <Header
            title="Extend"
            summary="Extend Zeno with the Python API"
            description="Add new models, metrics, and metadata columns with the Python API"
          ></Header>
          <APISnippets />
        </div>
      </div>
    </Layout>
  );
}
