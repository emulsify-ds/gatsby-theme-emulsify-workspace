/**
 * @file Button.component.js
 * Exports a button component.
 */

import React from "react";
import PropTypes from "prop-types";

/**
 * Component that renders a button with a click handler.
 */
const Button = props => {
  const { onClick, children } = props;

  return (
    <button
      type="button"
      className="btn"
      onClick={onClick}
      sx={{
        backgroundColor: "primary",
        border: "none",
        borderRadius: "0.15rem",
        color: "background",
        cursor: "pointer",
        display: "inline-block",
        fontSize: 2,
        fontWeight: "heading",
        lineHeight: "2.25",
        margin: 0,
        padding: "1 6",
        textAlign: "center",
        textDecoration: "none",
        textTransform: "uppercase",
        transition: "all 0.1s ease-in-out",
        "&:hover": {
          backgroundColor: "secondary"
        }
      }}
    >
      {children}
    </button>
  );
};

Button.propTypes = {
  onClick: PropTypes.func,
  children: PropTypes.node
};

Button.defaultProps = {
  children: null,
  onClick: () => {}
};

export default Button;
