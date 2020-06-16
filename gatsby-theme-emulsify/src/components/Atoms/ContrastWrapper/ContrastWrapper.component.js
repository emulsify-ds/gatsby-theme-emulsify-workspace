import PropTypes from "prop-types";
/** @jsx jsx */
import { jsx } from "theme-ui";

const ContrastWrapper = ({ children }) => (
  <div
    sx={{
      variant: "wrapper.contrast",
      mx: "calc(50% - 37vw)",
      my: 12,
      py: 12,
      px: 16
    }}
  >
    {children}
  </div>
);

ContrastWrapper.propTypes = {
  children: PropTypes.node
};

ContrastWrapper.defaultProps = {
  children: null
};

export default ContrastWrapper;
