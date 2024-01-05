import React from "react";

import styles from "./styles.module.css";
import { Testimonial } from "./Testimonial";

export function Testimonials(props) {
  let testimonials = [
    {
      name: "Clementine, Hugging Face",
      message:
        "Using Zeno we were able to systematically debug the Open LLM Leaderboard and improve the benchmarks we use.",
      project: "https://hub.zenoml.com/report/1255/DROP%20Benchmark%20Exploration",
    },
    {
      name: "Hailey, Eleuther AI",
      message:
        "Visualizing benchmarking results with Zeno makes it much easier to find systematic failures and differences between models.",
      project: "https://hub.zenoml.com/project/c72065fa-9fea-4904-82f8-5e1fe4b5a685/MMLU/",
    },
  ];

  let testimonialComponents = testimonials.map((testimonial) => (
    <Testimonial
      name={testimonial.name}
      message={testimonial.message}
      project={testimonial.project}
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
