import ChartSelect from "@site/src/components/ChartSelect";
import DatatypeSelect from "@site/src/components/DatatypeSelect";
import { HomepageHeader } from "@site/src/components/HomepageHeader/HomepageHeader";
import ReportSelect from "@site/src/components/ReportSelect";
import { Sections } from "@site/src/components/Sections/Sections";
import { Sponsors } from "@site/src/components/Sponsors/Sponsors";

import Layout from "@theme/Layout";
import React from "react";

export function Header({ title, summary, description }): JSX.Element {
  return (
    <div>
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
        <div id="pageWrapper">
          <Sections />
          <hr />
          <DatatypeSelect />
          <hr />
          <ChartSelect />
          <hr />
          <ReportSelect />
          <Sponsors />
        </div>
      </div>
    </Layout>
  );
}
