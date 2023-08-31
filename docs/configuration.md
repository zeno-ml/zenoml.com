---
sidebar_position: 5
---

# Configuration file

Zeno options are set using a `TOML` file such as the following:

```toml title="Example TOML configuration for an image classification task"
view = "image-classification"
metadata = "./metadata.csv"
functions = "./tests/"
models = [
	"./model_epochs_2.pth",
	"./model_epochs_5.pth",
	"./model_epochs_10.pth",
	"./model_epochs_20.pth"
]
data_path = "./data/"
data_column = "id"
data_type = "path"
```

Which is used to run zeno with `zeno config.toml`.

## Configuration options

The configuration file has the the following options.

### `view`

The Zeno View used for the given data and task, e.g. `image-classification`. **Required**

See [Instance views](/docs/views) for a list of available views.

### `metadata`

Path to a `csv` or `parquet` file with metadata for data instances. **Required**

Must have a column with unique identifiers for each instance, specificed by [`id_column`](/docs/configuration#id_column).

**Jupyter**: A Pandas DataFrame.

### `functions`

Path to a directory with Python files implementing Zeno functions.

**Jupyter**: A list of functions with Zeno decorators.

### `models`

List of models to test.

Can either be paths or strings which are passed directly to the [`load_model`](/docs/api#Predict) function.

---

### `id_column`

The column with unique identifiers in the metadata file. **Optional**

By default it is `id`.

### `data_column`

The column with either file names for data instances or raw data (e.g. text). **Optional**

By default it is `id`.

### `label_column`

The column with either file names for data instances or raw data (e.g. text). **Optional**

By default it is `label`.

### `data_path`

The directory with data instances. **Optional** If data is stored in the metadata file, **Required** if `data_column` contains references to files on disk.

### `label_path`

The directory with label files. **Optional**

### `batch_size`

The batch size used when running inference. **Optional**

### `cache_path`

Where cache outputs are stored. **Optional**

By default it is `.zeno_cache` in the same directory as the `TOML` file. Cache stores preprocesssing and model outputs.

### `samples`

Number of samples to show by default in view. Default 30. **Optional**

### `calculate_histogram_metrics`

Whether to calculate metrics for each histogram's bins to color them by metric.
Set to `false` if you have a large dataset where calculating metrics can be costly. Default True. **Optional**

### `multiprocessing`

Whether to run the Zeno data processing pipeline with multiprocessing or not. Default True. **Optional**

### `editable`

Whether users should be able to create/delete/edit slices, folder, and reports. If set to false any changes to the frontend will not be saved in the backend. Default True. **Optional**

### `serve`

Whether Zeno should be served on localhost. If False, the FastAPI instance is returned. Useful for hosting on services such as AWS Lambda. Default True. **Optional**

### `host`

The host to run Zeno on, should be changed to run on custom domains. Default `localhost`. **Optional**

### `port`

The port to run Zeno on. **Optional**
