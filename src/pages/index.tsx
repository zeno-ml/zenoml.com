import ChartSelect from "@site/src/components/ChartSelect";
import DatatypeSelect from "@site/src/components/DatatypeSelect";
import { HomepageHeader } from "@site/src/components/HomepageHeader/HomepageHeader";
import ReportSelect from "@site/src/components/ReportSelect";
import { Sections } from "@site/src/components/Sections/Sections";
import { Sponsors } from "@site/src/components/Sponsors/Sponsors";

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
    <Layout title={`Zeno`} description="AI Evaluation Platform">
      <div id="homepage">
        <HomepageHeader />
        <Sponsors />
        <div id="pageWrapper">
          <Sections />
          <Header
            title="Explore"
            summary="Explore your data"
            description="Zeno's modular instance view can be extended to render any data type and model output"
          ></Header>
          <DatatypeSelect />
          <Header
            title="Chart"
            summary="Create interactive visualizations"
            description="Track and compare performance across slices and models"
          ></Header>
          <ChartSelect />
          <Header
            title="Report"
            summary="Communicate your findings with reports"
            description="Create reports with interactive visualizations and markdown"
          ></Header>
          <ReportSelect />
        </div>
      </div>
    </Layout>
  );
}
