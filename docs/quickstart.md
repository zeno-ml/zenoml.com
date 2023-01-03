---
sidebar_position: 2
---

# Quickstart

Install the Zeno Python package.

```bash
pip install zenoml
```

## Command Line

1. Create a folder with at least one Python file, a [`model`](/docs/api#predict) function, and any number of additional [Zeno functions](/docs/api/).

2. Create a configuration `TOML` file, `config.toml`, with the [required options](/docs/configuration), primarily a [view](/docs/views/) and metadata file.

3. Run Zeno:

```bash
zeno config.toml
```

## Jupyter Notebooks

1. Import zeno with `import zeno from zeno`

2. Create a Pandas DataFrame and any number of functions with Zeno decorators.

3. Run zeno with a dict of options:

```python
zeno({
	"view": "image-classification",
	"metadata": my_dataframe,
	"functions": [my_function, my_other_function],
	"models": ['model_a', 'model_b']
})
```
