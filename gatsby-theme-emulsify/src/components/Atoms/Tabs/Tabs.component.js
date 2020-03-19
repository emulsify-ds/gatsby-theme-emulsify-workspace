/**
 * @file Tabs.component.js
 * Exports a Tabs component.
 */

import React from "react";
import PropTypes from "prop-types";
import "./tabs.css";

/**
 * Component that renders a Tab link interface.
 */
const Tabs = ({ children, defaultTab }) => {
  return (
    <nav>
      <ol>
        <li class="default">{defaultTab}</li>
        {React.Children.map(children, link => (
          <li>{link}</li>
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
