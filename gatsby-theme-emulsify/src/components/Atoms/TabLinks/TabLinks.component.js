/**
 * @file TabLinks.component.js
 *
 * Exports a Tab links component.
 */

import React from "react";
import PropTypes from "prop-types";
/** @jsx jsx */
import { jsx, useColorMode } from "theme-ui";

import ExternalIcon from "./ExternalIcon.js";

/**
 * Component that renders a Tab link interface.
 */
const Tabs = ({ children, defaultTab }) => {
  const [colorMode] = useColorMode();
  return (
    <nav>
      <ol
        sx={{
          variant: "tabLinks.list",
        }}
      >
        <li
          className="default"
          sx={
            colorMode === "default"
              ? {
                  variant: "tabLinks.defaultListItem.light",
                }
              : {
                  variant: "tabLinks.defaultListItem.dark",
                }
          }
        >
          {defaultTab}
        </li>
        {React.Children.map(children, (link) => (
          <li
            sx={{
              variant: "tabLinks.listItem",
            }}
          >
            <span
              sx={
                colorMode === "default"
                  ? {
                      variant: "tabLinks.links.light",
                    }
                  : {
                      variant: "tabLinks.links.dark",
                    }
              }
            >
              {link}
            </span>
            <ExternalIcon />
          </li>
        ))}
      </ol>
    </nav>
  );
};

Tabs.propTypes = {
  defaultTab: PropTypes.string,
};

Tabs.defaultProps = {
  defaultTab: "Vanilla JS",
};

export default Tabs;
