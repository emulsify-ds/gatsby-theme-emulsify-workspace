import PropTypes from "prop-types";
/** @jsx jsx */
import { jsx } from "theme-ui";

const ContrastWrapper = ({ children }) => (
  <div
    sx={{
      variant: "wrapper.contrast",
    }}
  >
    {children}
  </div>
);

ContrastWrapper.propTypes = {
  children: PropTypes.node,
};

ContrastWrapper.defaultProps = {
  children: null,
};

export default ContrastWrapper;
