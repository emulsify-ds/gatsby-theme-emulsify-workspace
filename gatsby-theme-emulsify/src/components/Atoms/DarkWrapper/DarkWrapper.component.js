import PropTypes from "prop-types";
/** @jsx jsx */
import { jsx } from "theme-ui";

const DarkWrapper = ({ children }) => (
  <div
    sx={{
      backgroundColor: "text",
      color: "background",
      mx: "calc(50% - 37vw)",
      my: 12,
      py: 12,
      px: 16
    }}
  >
    {children}
  </div>
);

DarkWrapper.propTypes = {
  children: PropTypes.node
};

DarkWrapper.defaultProps = {
  children: null
};

export default DarkWrapper;
