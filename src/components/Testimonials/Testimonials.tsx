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
        "Demystifying benchmarkings and evaluation practices, and communicating them to a wider audience effectively is very difficult. Zeno does a great job of encouraging taking a critical look at your metrics and your datasets, which is much needed in the field!",
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
