---
slug: newsletter
title: "Halfway Evals - January 2023"
authors: [ac, ab]
tags: ["halfway evals"]
---

Hello world 👋!

This is the first iteration of our newsletter **Halfway Evals**.
It has been an exciting last few weeks since we relaunched Zeno, with over 600 created projects containing over 8,000 evaluated AI systems we're super happy that you are as excited as we are about where we're going.
All of you have created over 1,400 slices to evaluate your data and there are over 60 reports that communicate findings about model evaluations.
We're very excited that so many of you find tremendous value in Zeno and share these insights with other people.

However, you as a user were not the only one to learn something in this process.
We as the developers behind Zeno have also learned a ton about evaluation, best practices, and what you want to do with Zeno.
In the spirit of our open-source evaluation platform, we want to give back and share some of these learnings in this regular (montly) newsletter.
We'll be discussing interesting evaluation work, new research in the area, and new developments in Zeno.

Buckle up, we'll dive right in with this one!

## 🔥 Hot Evals

### [Gemini Evaluation Paper](https://arxiv.org/abs/2312.11444)

The release of Google's Gemini model family has sparked widespread interest in the LLM community.
Researchers at CMU (with some help from us Zeno folks) have done a [deep-dive into Gemini's language abilities](https://x.com/gneubig/status/1737108966931673191?s=20).
They've compared Gemini Pro (Gemini Ultra, a GPT-4 competitor will be released at a later point in time) to GPT-3.5-Turbo, GPT-4-Turbo, and Mixtral.
The overall conclusion is that Gemini is close but slightly behind GPT-3.5-Turbo for all English tasks, but ahead on translation into languages that it supports.
For more detailed results, [read the paper](https://arxiv.org/abs/2312.11444) or explore the data used in the paper on [GitHub](https://t.co/S7S9473xtP).
Furthermore, each chapter of the paper is linked to a Zeno report to facilitate further analysis.

### [HuggingFace is dropping DROP](https://huggingface.co/blog/leaderboard-drop-dive)

The HuggingFace [Open LLM Leaderboard](https://huggingface.co/spaces/HuggingFaceH4/open_llm_leaderboard) is the go-to place for people to compare LLMs.
Recently, HuggingFace has added [three new benchmarks](https://twitter.com/clefourrier/status/1722555555338956840) to their leaderboard to make it even more robust and general-purpose.
However, they quickly noticed that something was off with their DROP scores (DROP is one of the newly added benchmarks).
[Using Zeno](https://hub.zenoml.com/report/1255/DROP%20Benchmark%20Exploration) to dive into the results, they quickly discovered the reason behind the fluctuations in their benchmark results.
Since the problems were linked to the evaluation code of the benchmark (such as the token used to stop generation), HuggingFace decided to remove DROP from the leaderboard until a revised version of the benchmark appears.

## 🗞️ Press

## ✨ New in Zeno

We've recently been focusing on making it even easier for you to analyze your evaluation results in Zeno by [integrating Zeno into other AI evaluation frameworks](https://zenoml.com/docs/integrations/).
You can now directly upload your model outputs if you're using the [EleutherAI LM Evaluation Harness](https://github.com/EleutherAI/lm-evaluation-harness) or the [Ragas Framework](https://docs.ragas.io/en/latest/index.html).

For **Ragas**, we've added [a detailed tutorial](https://docs.ragas.io/en/latest/howtos/integrations/zeno.html) on how to use Zeno to investigate the results of your evaluation.
You can look at an example of how this looks like in Zeno [here](https://hub.zenoml.com/project/b35c83b8-0b22-4b9c-aedb-80964011d7a7/ragas%20FICA%20eval).

The integration with the **EleutherAI LM Evaluation Harness** goes even further.
Here, we wrote a script that can be used to directly upload all your evaluation data as a Zeno project, allowing you to directly compare different models on the various benchmarks that EleutherAI provides.
To get started visualizing your LM Evaluation Harness data in Zeno, simply follow [these instructions](https://github.com/EleutherAI/lm-evaluation-harness#visualizing-results) or take a look at our [example notebook](https://github.com/EleutherAI/lm-evaluation-harness/blob/main/examples/visualize-zeno.ipynb).
We've already used this integration for some of our own projects, such as [this one](https://hub.zenoml.com/project/ba44d31c-9e02-4330-bdbe-0760dfe85dc4/Mamba%20Eval_hellaswag)!

---

_If you have questions about Zeno or anything we've highlighted in this newsletter, have ideas of new Zeno features or content for an upcomming issue of Halfway Evals, or simply want to say hi, get in touch via [email](mailto:hello@zenoml.com) or join our [Discord](https://discord.gg/km62pDKAkE)._
