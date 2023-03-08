---
sidebar_position: 4
---

# Python API

Zeno has 4 primary decorator functions: `model`, `metric`, `distill`, and `inference`.

You can pass any number of files with decorated functions to Zeno, but you **must have only one `model`**.

## ZenoOptions

Every Zeno function is passed a ZenoOptions object with the following parameters.
The column values refer to column names in the DataFrame and the paths refer to directories relative to the Zeno configuration file.

```python
@dataclass
class ZenoOptions:
    """Parameters passed to Zeno test functions.

    Args:
        id_column (str): Column in dataframe with unique identifiers.
        data_column (str): Column in dataframe with either raw data or path to data.
        label_column (str): Column in dataframe with
                            either raw labels or path to labels.
        output_column (str): Column in dataframe with a given
                             model's raw output or path to output
        data_path (str): Path to directory with data files.
        label_path (str): Path to directory with label files.
        output_path (str): Path to directory with a given model's output.
        distill_columns (map[str, str]): Map from distiller name to distill column.
    """

    id_column: str
    data_column: str
    label_column: str
    output_column: str
    distill_columns: Dict[str, str]
    data_path: str
    label_path: str
    output_path: str
```

## Model

`model` functions should return a function that returns a list of model outputs for a given model name.

The function returned by `model` should take two parameters: a Pandas DataFrame and a ZenoOptions object.

```python
@model
def model(model_path: Path) -> Callable[[df: DataFrame, ops: ZenoOptions], ModelReturn]
```

### ModelReturn

The function should return the following object:

```python
class ModelReturn(BaseModel):
    """Return type for model functions.

    Args:
        model_output (Series | List): Model output for each sample.
        embedding (Series | List[List[float]] | List[NDArray] | NDArray | None):
        High-dimensional embedding for each sample. Optional.
        other_returns (Dict[str, Series | List] | None): Other returns from the model
        to be shown as metadata columns in the UI.
    """

    model_output: Union[Series, List[Any]]
    embedding: Union[Series, List[List[float]], List[NDArray], NDArray, None] = None
    other_returns: Union[Dict[str, Union[Series, List[Any]]], None] = None
```

### Example

```python title="Load mock model and return outputs"
@model
def model_fn(model_path):
    mod = load_model(model_path)
    def pred(df: DataFrame, ops: ZenoOptions):
        return ModelReturn(model_output=mod(df[ops.data_column]))
    return pred
```

## Metric

Functions with the `metric` decorator return a continuous number given a subset of data.
Metrics can be classic functions such as accuracy, or specific measures such as word prevalence.

```python
@metric
def metric_func(df: pd.DataFrame, ops: ZenoOptions) -> MetricReturn:
```

### MetricReturn

It should return the following:

```python
class MetricReturn(BaseModel):
    """Return type for metric functions.

    Args:
        metric (float): Average metric over subset of data
        variance (float): Variance of metric over subset of data
    """

    metric: float
    variance: Union[float, None] = None
```

### Example

```python title="Calculate accuracy of model"
@metric
def accuracy(df, ops):
    return MetricReturn(metric=100 * (df[ops.label_column] == df[ops.output_column]).sum() / len(df))
```

## Distill

`distill` functions return a derived metadata column from input data and/or model outputs.

```python
@distill
def distill_fn(df: pd.DataFrame, ops: ZenoOptions) -> DistillReturn:
```

### DistillReturn

They should return the following object:

```python
class DistillReturn(BaseModel):
    """Return type for distill functions

    Args:
        distill_output (Series | List): Distill outputs for each sample.
    """

    distill_output: Union[Series, List[Any]]
```

### Example

```python title="Get amplitude of sound file"
@distill
def amplitude(df, ops: ZenoOptions):
    files = [os.path.join(ops.data_path, f) for f in df[ops.data_column]]
    amps = []
    for audio in files:
        y, _ = librosa.load(audio)
        amps.append(np.abs(y).mean())
    return DistillReturn(distill_output=amps)
```

## Inference

You can create a [Gradio](https://gradio.app/) interface for your model by adding an `inference` decorator.
This interface allows you to upload new instances and interactively test your model.

```python
@inference
def inference_fn(ops: ZenoOptions) -> InferenceReturn
```

### InferenceReturn

It should return the following:

```python
class InferenceReturn(BaseModel):
    """Return type for inference UI functions.
    Take a look at the Gradio documentation for details.

    Args:
        input_components (List[Blocks]): List of Gradio input components.
        output_components (Blocks): Gradio output component.
        input_columns (List[str]): List of input column names matching the
        input components.
    """

    input_components: List[IOComponent]
    output_component: IOComponent
    input_columns: List[str]
```

### Example

```python title="Create Gradio interface for image classification model"
@inference
def gradio_inference(ops: ZenoOptions):
    return InferenceReturn(
        input_components=[gr.Image(type="filepath")],
        output_component=gr.Text(label="Output"),
        input_columns=[ops.data_column],
    )
```
