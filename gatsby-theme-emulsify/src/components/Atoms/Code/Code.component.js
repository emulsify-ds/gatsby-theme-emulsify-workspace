/**
 * @file Code.component.js
 * Exports a CodeSnippet component.
 */

import React from "react";
import PropTypes from "prop-types";
import SyntaxHighlighter from "react-syntax-highlighter";
import ReactDOMServer from "react-dom/server";
import { vs2015 } from "react-syntax-highlighter/dist/esm/styles/hljs";
import "./code-snippet.css";

/**
 * Component that renders a CodeSnippet.
 */
const Code = ({ children }) => {
  const codeMarkup = ReactDOMServer.renderToString(children);
  console.log(children);

  return (
    <SyntaxHighlighter language="javascript" style={vs2015} wrapLines>
      {codeMarkup}
    </SyntaxHighlighter>
  );
};

Code.propTypes = {
  component: PropTypes.element
};

Code.defaultProps = {
  component: null
};

export default Code;
