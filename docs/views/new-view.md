# Creating a view

If your data type or task is not supported by an existing View, you can author a new one.
A View at its core is a function that takes state parameters and returns a DOM element to render.

To create a new View you can use the [Svelte](https://svelte.dev/) cookiecutter template:

```bash
pip install cookiecutter
cookiecutter https://github.com/zeno-ml/instance-views --directory template-svelte
```

This will create a simple Svelte project for creating a new view.
In the `frontend/src/Component.svelte` file you can find a scaffolded component that takes all the available parameters such as data paths and the current table.

To include make your view available by default in Zeno, create a pull request in the [instance-views](https://github.com/zeno-ml/instance-views) directory adding your view to the `views.json` file and creating a new folder for it.
