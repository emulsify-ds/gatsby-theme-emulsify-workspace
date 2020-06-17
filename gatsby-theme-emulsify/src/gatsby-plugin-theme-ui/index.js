const white = "#fff";
const nearWhite = "#e2ebf2";
const lightGray = "#889096";
const gray = "#6E7479";
const darkGray = "#313436";
const black = "#000";

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
    "64": "16rem",
  },
  useColorSchemeMediaQuery: true,
  colors: {
    text: darkGray,
    background: white,
    primary: darkGray,
    secondary: black,
    accent: gray,
    highlight: nearWhite,
    muted: lightGray,
    menuItemBorder: nearWhite,
    tabsBg: gray,
    tabsItemBg: "#2a2734",
    modes: {
      dark: {
        text: white,
        background: darkGray,
        primary: lightGray,
        secondary: white,
        accent: lightGray,
        highlight: gray,
        muted: darkGray,
        menuItemBorder: gray,
        tabsBg: lightGray,
        tabsItemBg: "#faf8f5",
      },
    },
  },
  fonts: {
    body:
      "-apple-system, BlinkMacSystemFont, Segoe UI, Helvetica, Arial, sans-serif, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol, sans-serif",
    heading:
      "-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif",
    code:
      "'SFMono-Regular', Consolas, 'Roboto Mono', 'Droid Sans Mono', 'Liberation Mono', Menlo, Courier, monospace",
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
    "2.75rem",
  ],
  fontWeights: {
    body: 400,
    heading: 700,
  },
  lineHeights: {
    body: 1.5,
    heading: 1.7,
  },
  radii: ["2px", "3px"],
  buttons: {
    primary: {
      bg: "text",
      color: "background",
    },
    secondary: {
      bg: "background",
      color: "text",
    },
    menu: {
      // you can reference other values defined in the theme
      color: "background",
    },
  },
  wrapper: {
    contrast: {
      bg: "text",
      color: "background",
    },
  },
  listItems: {
    menuLinks: {
      color: "background",
    },
  },
  headings: {
    hero: {
      bg: "text",
      color: "background",
    },
  },
  styles: {
    root: {
      fontFamily: "body",
      fontSize: "17px",
      fontWeight: "body",
      lineHeight: "body",
    },
    "h1, h2, h3, h4, h5, h6": {
      fontFamily: "heading",
      fontWeight: "heading",
      m: "0 0 1.45rem 0",
      textRendering: "optimizeLegibility",
    },
    h1: {
      fontSize: 6,
    },
    h2: {
      fontSize: 5,
    },
    h3: {
      fontSize: 4,
    },
    h4: {
      fontSize: 3,
    },
    h5: {
      fontSize: 2,
    },
    h6: {
      fontSize: 1,
    },
    a: {
      color: "primary",
      ":hover, :active": {
        color: "secondary",
      },
    },
    pre: {
      backgroundColor: "text",
      padding: 4,
      my: 2,
    },
  },
};
