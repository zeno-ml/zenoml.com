import { Header } from "@site/src/pages";
import React from "react";
import { CodeBlock } from "./CodeBlock";

import Link from "@docusaurus/Link";
import styles from "./styles.module.css";

export function Code() {
  const pythonCode = `from zeno_client import ZenoClient, ZenoMetric
  
# Initialize a client with our API key.
client = ZenoClient(YOUR_API_KEY)

# Create a project.
project = client.create_project(name="Writing Assistant", view="text-classification")

# Upload the data.
df = ... # Your DataFrame
project.upload_dataset(df, id_column="id", data_column='text', label_column="label")
system_df = ... # Your system outputs
proj.upload_system(system_df, name="GPT-4", id_column="id", output_column="output")`;
  const pipCode = `pip install zeno-client`;

  return (
    <div className={styles.container}>
      <div className={styles.innerContainer}>
        <div className={styles.header}>
          <Header
            title="Getting Started"
            summary="Getting Started"
            description="Upload your results to Zeno in just a few lines of code"
          ></Header>
          <div
            className={styles.buttons}
            style={{ justifyContent: "space-between", alignItems: "center" }}
          >
            <Link className="button button--lg heroButtonSecondary" to="/docs/intro">
              Learn More
            </Link>
          </div>
        </div>
        <br />
        <CodeBlock language="python" code={pipCode} />
        <CodeBlock language="python" code={pythonCode} />
      </div>
    </div>
  );
}
