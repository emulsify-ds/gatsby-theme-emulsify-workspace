/**
 * @file Code.component.js
 * Exports a CodeSnippet component.
 */

import React from "react";
import Highlight, { defaultProps } from "prism-react-renderer";
import reactElementToJSXString from "react-element-to-jsx-string";

/**
 * Component that renders a CodeSnippet.
 */
const CodeBlock = ({ children, language }) => {
  const codeMarkup = reactElementToJSXString(children);
  return (
    <Highlight {...defaultProps} code={codeMarkup} language="javascript">
      {({ className, style, tokens, getLineProps, getTokenProps }) => (
        <pre className={className} style={{ ...style, padding: "20px" }}>
          {tokens.map((line, i) => (
            <div key={i} {...getLineProps({ line, key: i })}>
              {line.map((token, key) => (
                <span key={key} {...getTokenProps({ token, key })} />
              ))}
            </div>
          ))}
        </pre>
      )}
    </Highlight>
  );
};

export default CodeBlock;
