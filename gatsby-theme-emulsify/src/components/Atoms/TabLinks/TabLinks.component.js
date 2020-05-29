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
    <nav
      sx={{
        borderBottom: theme => `2px solid ${theme.colors.grayDark}`
      }}
    >
      <ol
        sx={{
          backgroundColor: "accent",
          color: "text",
          margin: 0,
          listStyle: "none",
          fontSize: 0
        }}
      >
        <li
          className="default"
          sx={
            colorMode === "default"
              ? {
                  backgroundColor: "rgb(42, 39, 52)",
                  color: "background",
                  display: "inline-block",
                  margin: 0,
                  px: 4,
                  py: 3
                }
              : {
                  backgroundColor: "rgb(250, 248, 245)",
                  color: "background",
                  display: "inline-block",
                  margin: 0,
                  px: 4,
                  py: 3
                }
          }
        >
          {defaultTab}
        </li>
        {React.Children.map(children, link => (
          <li
            sx={{
              display: "inline-block",
              margin: 0,
              padding: 3,
              pl: 3,
              "&:hover svg": {
                opacity: 1
              }
            }}
          >
            <span
              sx={
                colorMode === "default"
                  ? {
                      a: {
                        color: "background",
                        "&:hover": {
                          color: "background"
                        }
                      }
                    }
                  : {
                      a: {
                        color: "text",
                        "&:hover": {
                          color: "text"
                        }
                      }
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
  defaultTab: PropTypes.string
};

Tabs.defaultProps = {
  defaultTab: "Vanilla JS"
};

export default Tabs;
