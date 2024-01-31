import ChartSelect from "@site/src/components/ChartSelect";
import DatatypeSelect from "@site/src/components/DatatypeSelect";
import { HomepageHeader } from "@site/src/components/HomepageHeader/HomepageHeader";
import ReportSelect from "@site/src/components/ReportSelect";
import { Sponsors } from "@site/src/components/Sponsors/Sponsors";
import { Trending } from "@site/src/components/Trending/Trending";

import Layout from "@theme/Layout";
import React from "react";
import { Code } from "../components/Code/Code";
import DiscoverSelect from "../components/DiscoverSelect";
import { Testimonials } from "../components/Testimonials/Testimonials";

export function Header({ title, summary, description }): JSX.Element {
  return (
    <div>
      <h2 style={{ fontSize: "40px" }}>{summary}</h2>
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
          <br />
          <Trending />
          <br />
        </div>
        <Testimonials />
        <br />
        <div id="pageWrapper">
          <DatatypeSelect />
          <hr />
          <DiscoverSelect />
          <hr />
          <ChartSelect />
          <hr />
          <ReportSelect />
        </div>
        <Code />
        <Sponsors />
      </div>
    </Layout>
  );
}
