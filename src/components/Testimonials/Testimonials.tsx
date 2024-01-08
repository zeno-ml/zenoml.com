import React from "react";

import styles from "./styles.module.css";
import { Testimonial } from "./Testimonial";

export function Testimonials(props) {
  let testimonials = [
    {
      name: "Clémentine, Research Scientist",
      message:
        "Thanks to the help of the Zeno team, our investigations of Open LLM Leaderboard evaluations were much faster.",
      project: "https://hub.zenoml.com/report/1255/DROP%20Benchmark%20Exploration",
      link: "https://huggingface.co/blog/leaderboard-drop-dive",
      image: require("@site/static/img/hf.png").default,
    },
    {
      name: "Hailey, Research Scientist",
      message:
        "Visualizing benchmarking results with Zeno makes it much easier to find systematic failures and differences between models.",
      project: "https://hub.zenoml.com/project/c72065fa-9fea-4904-82f8-5e1fe4b5a685/MMLU/",
      link: "https://github.com/EleutherAI/lm-evaluation-harness?tab=readme-ov-file#visualizing-results",
      image: require("@site/static/img/eleuther.png").default,
    },
  ];

  let testimonialComponents = testimonials.map((testimonial) => (
    <Testimonial
      name={testimonial.name}
      message={testimonial.message}
      project={testimonial.project}
      link={testimonial.link}
      image={testimonial.image}
    />
  ));

  return (
    <div className={styles.container}>
      <div className={styles.innerContainer}>
        <h2 style={{ fontSize: "40px" }}>Testimonials</h2>
        <div className={styles.testimonials}>{testimonialComponents}</div>
      </div>
    </div>
  );
}
