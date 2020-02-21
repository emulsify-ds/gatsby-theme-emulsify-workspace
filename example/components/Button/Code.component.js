/**
 * @file Code.component.js
 * Exports a CodeSnippet component.
 */

import React from "react";
import PropTypes from "prop-types";
import SyntaxHighlighter from "react-syntax-highlighter";
import reactElementToJSXString from "react-element-to-jsx-string";
import { vs2015 } from "react-syntax-highlighter/dist/esm/styles/hljs";

/**
 * Component that renders a CodeSnippet.
 */
const Code = ({ children, language, component }) => {
  const codeMarkup = reactElementToJSXString(children);
  console.log(children);

  return (
    <SyntaxHighlighter language={language} style={vs2015} wrapLines>
      {codeMarkup}
    </SyntaxHighlighter>
  );
};

Code.propTypes = {
  component: PropTypes.element,
  language: PropTypes.string
};

Code.defaultProps = {
  component: null,
  language: "javascript"
};

export default Code;
