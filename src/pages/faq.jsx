import Layout from "@theme/Layout";
import React from "react";

export default function FAQ() {
  return (
    <Layout title="FAQ" description="Frequently Asked Questions">
      <div
        id="faq"
        style={{
          maxWidth: "900px",
          margin: "0px auto",
          padding: "40px",
        }}
      >
        <h2 style={{ fontSize: "3rem" }}>Frequently Asked Questions</h2>
        <h3>What is Zeno?</h3>
        <p>
          <span style={{ fontWeight: "600", color: "var(--logo)" }}>Zeno</span> is an AI evaluation
          platform. It lets you explore your data and model outputs, discover model failures, and
          create rich, interactive reports. Check out public projects and reports on{" "}
          <a href="https://hub.zenoml.com">Zeno Hub</a>!
        </p>
        <h3>Is Zeno Open Source?</h3>
        <p>
          Zeno is <a href="https://github.com/zeno-ml/zeno-hub">fully open source</a>! You can
          either use our hosted Zeno Hub or host it yourself. We welcome contributions from the
          community to various aspects of Zeno, including:
        </p>
        <ul>
          <li>
            <a href="https://github.com/zeno-ml/zeno-hub">Zeno Hub</a> - Core Zeno platform code
          </li>
          <li>
            <a href="https://github.com/zeno-ml/zeno-instance-views">Zeno Instance Views</a> -
            Specification and rendering for custom data views.
          </li>
          <li>
            <a href="https://github.com/zeno-ml/zeno-build">Zeno Build</a> - Repository of example
            evaluations
          </li>
        </ul>
        <h3>How can I report an issue with Zeno?</h3>
        <p>
          Please send us a message on our{" "}
          <a href="https://discord.gg/km62pDKAkE">Discord channel</a>, file a bug on{" "}
          <a href="https://github.com/zeno-ml/zeno-hub/issues">GitHub</a>, or email{" "}
          <a href="mailto:hello@zenoml.com">
            <code>hello@zenoml.com</code>
          </a>{" "}
          if you run into any issues!
        </p>
        <h3>How do I get started?</h3>
        <p>
          You can start by{" "}
          <a href="https://hub.zenoml.com/home/cabreraalex">
            exploring public projects and reports
          </a>{" "}
          to get an idea of how Zeno works. To create your own projects please follow the{" "}
          <a href="/docs/intro#creating-a-project">Getting Started Guide</a>{" "}
        </p>
        <h3>How do I create a new project?</h3>
        <p>
          Check out the <a href="/docs/intro#creating-a-project">Getting Started Guide</a> to learn
          how to use the <code>zeno-client</code> Python library to create projects, upload data,
          and upload AI system outputs.
        </p>
        <h3>How do I get data for evaluation?</h3>
        <p>
          Zeno does not provide evaluation data. We recommend you start with a dataset similar to
          your task from public repositories such as{" "}
          <a href="https://github.com/huggingface/datasets">🤗 datasets</a>, gather data from users
          or customers, or bootstrap an evaluation set using a model or system such as ChatGPT.
        </p>
        <h3>How do I get model outputs?</h3>
        <p>
          Zeno also does not provide or run AI systems. Run models locally using services such as{" "}
          <a href="https://huggingface.co/docs/transformers/index">🤗 transformers</a> and upload
          the results to Zeno.
        </p>
        <h3>Can I run Zeno locally?</h3>
        <p>
          Check out the{" "}
          <a href="https://github.com/zeno-ml/zeno-hub/blob/main/DEVELOPMENT.md">
            Zeno Hub Developer documentation
          </a>{" "}
          for instructions on how to run the Docker containers and host Zeno yourself.
        </p>
        <h3>Where did the name Zeno come from?</h3>
        <p>
          Zeno is named after <a href="https://en.wikipedia.org/wiki/Zeno_of_Elea">Zeno of Elea</a>,
          the Greek philosopher. Zeno's{" "}
          <a href="https://en.wikipedia.org/wiki/Zeno%27s_paradoxes">Dichotomy paradox</a> states{" "}
          <i>
            "That which is in locomotion must arrive at the half-way stage before it arrives at the
            goal",{" "}
          </i>
          emblematic of the nearly infinite ways in which you can slice your data and discover model
          behaviors in Zeno.
        </p>
        <img src="/img/zeno-phil.jpeg" alt="Zeno of Elea" />
      </div>
    </Layout>
  );
}
