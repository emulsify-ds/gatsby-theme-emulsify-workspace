import PropTypes from "prop-types";
import { StaticQuery, graphql } from "gatsby";
/** @jsx jsx */
import { jsx } from "theme-ui";

const StorybookComponent = ({ id, height, data }) => {
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
      render={(data) => (
        <iframe
          style={{
            height,
          }}
          sx={{
            variant: "storybook",
            minHeight: !height && "150px",
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
  width: PropTypes.string,
};

StorybookComponent.defaultProps = {
  id: "",
  height: "auto",
  width: "auto",
};

export default StorybookComponent;
