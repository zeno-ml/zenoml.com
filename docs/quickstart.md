---
sidebar_position: 2
---

# Quickstart

Install the Zeno Python package.

```bash
pip install zenoml
```

## Command Line

Zeno includes a command line helper to set up a new project which guides you through creating the TOML configuration file:

```bash
zeno init
```

You can then run Zeno with

```bash
zeno config.toml
```

## Jupyter Notebooks

1. Import zeno with `import zeno from zeno`

2. Create a Pandas DataFrame with your metadata.

3. Run zeno with a dict of options:

```python
zeno({
	"view": "image-classification",
	"metadata": my_dataframe,
	"data_path": "path/to/data",
	"data_column": "image_path",
})
```

## Adding Models and Metrics

To add model predictions and metrics, you can write functions with the [Python API](/docs/api) wrappers.

If using the command line, create a folder with a Python file including these functions and add the folder as an option to the TOML file:

```toml
functions = "path/to/functions"
```

In Jupyter Notebooks, you can pass a list of functions to the `functions` option:

```python
zeno({
	"functions": [model_function, accuracy_function]
})
```
