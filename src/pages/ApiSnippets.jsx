import React from "react";
import Tabs from "@theme/Tabs";
import TabItem from "@theme/TabItem";
import CodeBlock from "@theme/CodeBlock";

import styles from "./index.module.css";

export function APISnippets() {
  return (
    <div className="container heroTwoColumn">
      <div className="textLeft">
        <p>
          Zeno's <b>Python API</b> plugs in model predictions, metrics, and new
          metadata columns. The API has three Python decorator functions which
          can be used with any Python libraries.
        </p>
        <p>
          The <code>@model</code> functions
        </p>
      </div>
      <Tabs groupId="operating-systems">
        <TabItem value="model" label="Model">
          <CodeBlock
            language="py"
            title="/src/components/Pythonfile.py"
            showLineNumbers
          >
            {`@model
  def load_model(model_path):
	  # Load the OpenAI Whisper audio transcription model
	  model = whisper.load_model("tiny")
  
	  def pred(df, ops: ZenoOptions):
		  # Get a list of paths for each audio file
		  files = [os.path.join(ops.data_path, f) for f in df[ops.data_column]]
		  # Transcribe each audio file
		  return [model.transcribe(f)["text"] for f in files]
  
	  return pred`}
          </CodeBlock>
        </TabItem>
        <TabItem value="Metric" label="Metric">
          <CodeBlock
            language="py"
            title="/src/components/Pythonfile.py"
            showLineNumbers
          >
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
            title="/src/components/Pythonfile.py"
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
