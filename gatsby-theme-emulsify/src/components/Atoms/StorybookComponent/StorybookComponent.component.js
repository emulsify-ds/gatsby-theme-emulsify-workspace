import PropTypes from "prop-types";
import { StaticQuery, graphql } from "gatsby";
import React from "react";

const StorybookComponent = ({ id, width, height, data }) => {
  return (
    <StaticQuery
      query={graphql`
        query siteUILib {
          site {
            siteMetadata {
              UILibPath
            }
          }
        }
      `}
      render={data => (
        <iframe
          style={{
            border: "none",
            width,
            height
          }}
          title={`storybook-component-${id}`}
          src={`${data.site.siteMetadata.UILibPath}?id=${id}`}
        />
      )}
    />
  );
};

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
