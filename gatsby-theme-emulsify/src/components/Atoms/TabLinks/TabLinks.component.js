/**
 * @file TabLinks.component.js
 *
 * Exports a Tab links component.
 */

import React from "react";
import PropTypes from "prop-types";
/** @jsx jsx */
import { jsx } from "theme-ui";

import ExternalIcon from "./ExternalIcon.js";

/**
 * Component that renders a Tab link interface.
 */
const Tabs = ({ children, defaultTab }) => {
  return (
    <nav
      sx={{
        borderBottom: theme => `2px solid ${theme.colors.grayDark}`
      }}
    >
      <ol
        sx={{
          backgroundColor: "muted",
          color: "text",
          margin: 0,
          listStyle: "none",
          fontSize: 0
        }}
      >
        <li
          class="default"
          sx={{
            backgroundColor: "accent",
            color: "background",
            display: "inline-block",
            margin: 0,
            padding: 3,
            pl: 3
          }}
        >
          {defaultTab}
        </li>
        {React.Children.map(children, link => (
          <li
            sx={{
              display: "inline-block",
              margin: 0,
              padding: 3,
              pl: 3
            }}
          >
            {link}
            <ExternalIcon />
          </li>
        ))}
      </ol>
    </nav>
  );
};

Tabs.propTypes = {
  defaultTab: PropTypes.string
};

Tabs.defaultProps = {
  defaultTab: "Vanilla JS"
};

export default Tabs;
