---
slug: newsletter-24-01
title: "Halfway Evals - January 2023"
authors: [ac, ab]
tags: ["halfway evals"]
---

Welcome to the first edition of the Zeno newsletter, **Halfway Evals**! In each edition, we'll discuss the community's work around Zeno, interesting research and projects on AI evaluation, and new Zeno features.

Before we dive in, we wanted to look back at the last few months since we launched [Zeno Hub](https://hub.zenoml.com). Our users have created over **800 projects** and **1,400 slices** to evaluate more than **10,000 AI systems**! These insights have been used to author over **160 reports**, communicating interesting findings and insights. It's exciting to see how Zeno is being used to make AI evaluation more accessible and transparent.

## 🌎 Community

_Highlighting work from the Zeno community._

- **[An In-Depth Look at Gemini's Language Abilities](https://arxiv.org/abs/2312.11444)** - Researchers at CMU, including the Zeno team, conducted a [deep dive into Gemini's language abilities](https://x.com/gneubig/status/1737108966931673191?s=20). They compared Gemini Pro, Google's newly released LLM, with GPT-3.5-Turbo, GPT-4-Turbo, and Mixtral. Overall, they found that Gemini approaches but lags behind GPT-3.5-Turbo in all English tasks, yet performs better in translation into languages it supports. For more detailed results, [read the paper](https://arxiv.org/abs/2312.11444) or explore the code on [GitHub](https://t.co/S7S9473xtP). Each section of the paper is linked to a Zeno report for further exploration!

- **[Open LLM Leaderboard: DROP Deep Dive](https://huggingface.co/blog/leaderboard-drop-dive)** - The HuggingFace [Open LLM Leaderboard](https://huggingface.co/spaces/HuggingFaceH4/open_llm_leaderboard) is a popular repository for comparing new LLMs. HuggingFace recently added [three new benchmarks](https://twitter.com/clefourrier/status/1722555555338956840) to their leaderboard to better represent real-world performance. After receiving feedback from the community, they noticed significant fluctuations in the scores for one benchmark, DROP. [Using Zeno](https://hub.zenoml.com/report/1255/DROP%20Benchmark%20Exploration), they quickly discovered the reason behind the variance and decided to remove DROP from the leaderboard until a revised version of the benchmark is developed.

## 📰 Evaluation News

_Interesting news from the world of AI evaluation._

- **[CRUXEval](https://crux-eval.github.io/)** - A new evaluation dataset for code reasoning, understanding, and execution. Instead of having models generate code, CRUXEval asks models to either predict the output or input of a given function based on its signature. This dataset supplements classic code generation datasets such as HumanEval and MBPP.
- **[CommonGen Leaderboard](https://inklab.usc.edu/CommonGen/leaderboard.html)** - CommonGen is a challenging benchmark task asking models to generate coherent sentences describing everyday scenarios. They recently released a leaderboard for the task, showing how state-of-the-art models, including GPT-4, perform significantly worse than humans.

## ✨ New in Zeno

_Updates to Zeno that you might have missed._

### Integrations

We've been focusing on making it even easier for you to analyze your evaluation results in Zeno by [integrating Zeno into other AI evaluation frameworks](https://zenoml.com/docs/integrations/).
You can now directly upload your model outputs if you're using the [EleutherAI LM Evaluation Harness](https://github.com/EleutherAI/lm-evaluation-harness) or the [Ragas Framework](https://docs.ragas.io/en/latest/index.html).

- **Ragas** is a library for model-graded evaluation of RAG applications. We've added [a detailed tutorial](https://docs.ragas.io/en/latest/howtos/integrations/zeno.html) on how to use Zeno to investigate your evaluation results. You can view an example of this in Zeno [here](https://hub.zenoml.com/project/b35c83b8-0b22-4b9c-aedb-80964011d7a7/ragas%20FICA%20eval).

- **EleutherAI LM Evaluation Harness** - We wrote a script that allows you to directly upload all your evaluation data as a Zeno project, enabling you

to compare different models across various benchmarks provided by EleutherAI. To start visualizing your LM Evaluation Harness data in Zeno, follow [these instructions](https://github.com/EleutherAI/lm-evaluation-harness#visualizing-results) or take a look at our [example notebook](https://github.com/EleutherAI/lm-evaluation-harness/blob/main/examples/visualize-zeno.ipynb). We've already used this integration for some of our own projects, such as [this one](https://hub.zenoml.com/project/ba44d31c-9e02-4330-bdbe-0760dfe85dc4/Mamba%20Eval_hellaswag)!

### Documentation

We've also been working on improving our documentation to make it easier for you to get started with Zeno. This includes use cases, tutorials, and integration guides. If you have any suggestions for what you'd like to see in our documentation, please let us know!

---

_If you have questions about Zeno or anything we've highlighted in this newsletter, have ideas for new Zeno features or content for an upcoming issue of Halfway Evals, or simply want to say hi, get in touch via [email](mailto:hello@zenoml.com) or join our [Discord](https://discord.gg/km62pDKAkE)._
