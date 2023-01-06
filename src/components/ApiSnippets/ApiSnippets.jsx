import React from "react";
import Tabs from "@theme/Tabs";
import TabItem from "@theme/TabItem";
import CodeBlock from "@theme/CodeBlock";

export function APISnippets() {
  return (
    <div className="heroTwoColumn">
      <div className="textLeft">
        <p style={{ fontSize: "22px" }}>
          The <b>Python API</b> is used to add models, metrics, and new metadata
          columns to Zeno.
        </p>
        <p style={{ fontSize: "22px" }}>
          The <code>@model</code> functions wraps Python libraries such as
          PyTorch, Tensorflow, Keras, HuggingFace, etc. to get model
          predictions.&nbsp;<code>@metric</code> functions are used to calculate
          different metrics on slices of data.&nbsp;<code>@distill</code>{" "}
          functions derive new metadata columns from your data instances.
        </p>
      </div>
      <Tabs className="tabs" groupId="operating-systems">
        <TabItem value="model" label="Model">
          <CodeBlock
            language="py"
            title="Audio transcription using the OpenAI Whisper model"
            showLineNumbers
          >
            {`@model
def load_model(model_path):
  model = whisper.load_model("tiny")

  def pred(df, ops: ZenoOptions):
    # Get a list of paths for each audio file
    files = [os.path.join(ops.data_path, f) for f in df[ops.data_column]]
    return [model.transcribe(f)["text"] for f in files]

  return pred`}
          </CodeBlock>
        </TabItem>
        <TabItem value="Metric" label="Metric">
          <CodeBlock language="py" title="Calculating accuracy" showLineNumbers>
            {`@metric
def accuracy(df, ops: ZenoOptions):
  if len(df) == 0:
    return 0
  # Calculate the accuracy of the model if not empty
  return 100 * (df[ops.label_column] == df[ops.output_column]).sum() / len(df)`}
          </CodeBlock>
        </TabItem>
        <TabItem value="Distill" label="Distill">
          <CodeBlock
            language="py"
            title="Disitilling a metadata column of audio amplitudes"
            showLineNumbers
          >
            {`@distill
def amplitude(df, ops: ZenoOptions):
  # Get a list of paths for each audio file
  files = [os.path.join(ops.data_path, f) for f in df[ops.data_column]]
  amps = []
  for audio in files:
    # Load each audio file and calculate the amplitude
    y, _ = librosa.load(audio)
    amps.append(float(np.abs(y).mean()))
  return amps`}
          </CodeBlock>
        </TabItem>
      </Tabs>
    </div>
  );
}
