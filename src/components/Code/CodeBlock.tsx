import { Highlight, themes } from "prism-react-renderer";
import React from "react";
import { useCopyToClipboard } from "react-use";

interface CodeBlockProps {
  language: string;
  code: string;
}

export function CodeBlock({ language, code }: CodeBlockProps) {
  const [state, copyToClipboard] = useCopyToClipboard();

  const copyCode = () => {
    // Logic to copy `code`
    copyToClipboard(code);
  };

  return (
    <div style={{ position: "relative" }}>
      <Highlight theme={themes.vsLight} code={code} language="python">
        {({ style, tokens, getLineProps, getTokenProps }) => (
          <pre style={style}>
            {tokens.map((line, i) => (
              <div key={i} {...getLineProps({ line })}>
                <span
                  style={{
                    display: "inline-block",
                    width: "3em",
                    color: "var(--gray)",
                  }}
                >
                  {i + 1}
                </span>
                {line.map((token, key) => (
                  <span key={key} {...getTokenProps({ token })} />
                ))}
              </div>
            ))}
          </pre>
        )}
      </Highlight>
      <button
        className="button heroButton"
        style={{
          position: "absolute",
          top: "10px",
          right: "10px",
        }}
        onClick={copyCode}
      >
        {state.value ? "Copied!" : "Copy code"}
      </button>
    </div>
  );
}
