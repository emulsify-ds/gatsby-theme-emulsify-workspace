// example theme file
export default {
  breakpoints: ["480px", "768px", "1024px"],
  space: {
    "0": "0",
    "1": "0.25rem",
    "2": "0.5rem",
    "3": "0.75rem",
    "4": "1rem",
    "5": "1.25rem",
    "6": "1.5rem",
    "8": "2rem",
    "10": "2.5rem",
    "12": "3rem",
    "16": "4rem",
    "20": "5rem",
    "24": "6rem",
    "32": "8rem",
    "40": "10rem",
    "48": "12rem",
    "56": "14rem",
    "64": "16rem"
  },
  colors: {
    text: "#313436",
    background: "#fff",
    white: "#fff",
    gray: "#889096",
    grayLight: "#C1C9CF",
    grayLighter: "#E2EBF2",
    grayDark: "#6E7479",
    grayDarker: "#505558",
    grayDarkest: "#313436",
    black: "#000",
    modes: {
      dark: {
        text: "#fff",
        background: "#313436",
        white: "#000",
        gray: "#313436",
        grayLight: "#505558",
        grayLighter: "#6E7479",
        grayDark: "#E2EBF2",
        grayDarker: "#C1C9CF",
        grayDarkest: "#889096",
        black: "#fff"
      }
    }
  },
  fonts: {
    body:
      "-apple-system, BlinkMacSystemFont, Segoe UI, Helvetica, Arial, sans-serif, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol, sans-serif",
    heading:
      "-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif",
    code:
      "'SFMono-Regular', Consolas, 'Roboto Mono', 'Droid Sans Mono', 'Liberation Mono', Menlo, Courier, monospace"
  },
  fontSizes: [
    "0.8rem",
    "0.9rem",
    "1rem",
    "1.25rem",
    "1.5rem",
    "1.75rem",
    "2rem",
    "2.25rem",
    "2.5rem",
    "2.75rem"
  ],
  fontWeights: {
    body: 400,
    heading: 700
  },
  lineHeights: {
    body: 1.5,
    heading: 1.7
  },
  radii: ["2px", "3px"],
  styles: {
    root: {
      fontFamily: "body",
      fontSize: "17px",
      fontWeight: "body",
      lineHeight: "body"
    },
    "h1, h2, h3, h4, h5, h6": {
      fontFamily: "heading",
      fontWeight: "heading",
      m: "0 0 1.45rem 0",
      textRendering: "optimizeLegibility"
    },
    h1: {
      fontSize: 8
    },
    h2: {
      fontSize: 7
    },
    h3: {
      fontSize: 6
    },
    h4: {
      fontSize: 5
    },
    h5: {
      fontSize: 4
    },
    h6: {
      fontSize: 3
    },
    a: {
      color: "text",
      ":hover, :active": {
        color: "black"
      }
    }
  }
};
