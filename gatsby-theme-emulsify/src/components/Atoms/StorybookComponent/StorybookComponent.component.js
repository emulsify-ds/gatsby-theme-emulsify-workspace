import PropTypes from "prop-types";
import React from "react";

const basePath = "/storybook/iframe.html";

const StorybookComponent = ({ id, width, height }) => (
  <iframe
    style={{
      border: "none",
      width,
      height
    }}
    title={`storybook-component-${id}`}
    src={`${basePath}?id=${id}`}
  />
);

StorybookComponent.propTypes = {
  id: PropTypes.string,
  height: PropTypes.string,
  width: PropTypes.string
};

StorybookComponent.defaultProps = {
  id: "",
  height: "auto",
  width: "auto"
};

export default StorybookComponent;
