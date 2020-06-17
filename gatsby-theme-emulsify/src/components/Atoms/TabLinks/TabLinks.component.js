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
          backgroundColor: "gray",
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
                  backgroundColor: "tabsItemBg",
                  color: "background",
                  display: "inline-block",
                  margin: 0,
                  px: 4,
                  py: 3
                }
              : {
                  backgroundColor: "tabsItemBg",
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
