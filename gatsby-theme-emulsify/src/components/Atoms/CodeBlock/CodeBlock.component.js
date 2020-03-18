import Highlight, { defaultProps } from "prism-react-renderer";
import themeDark from "prism-react-renderer/themes/duotoneDark";
import themeLight from "prism-react-renderer/themes/duotoneLight";
/** @jsx jsx */
import { jsx, useColorMode } from "theme-ui";

export default ({ children, className }) => {
  const language = className.replace(/language-/, "");
  const [colorMode] = useColorMode();

  return (
    <Highlight
      {...defaultProps}
      theme={colorMode === "default" ? themeDark : themeLight}
      code={children.trim()}
      language={language}
    >
      {({ className, style, tokens, getLineProps, getTokenProps }) => (
        <pre
          className={className}
          style={{ ...style }}
          sx={{
            mb: 8,
            mt: 0,
            py: 8,
            px: 6
          }}
        >
          {tokens.map((line, i) => (
            <div key={i} {...getLineProps({ line, key: i })}>
              {line.map((token, key) => (
                <span key={key} {...getTokenProps({ token, key })} />
              ))}
            </div>
          ))}
        </pre>
      )}
    </Highlight>
  );
};
