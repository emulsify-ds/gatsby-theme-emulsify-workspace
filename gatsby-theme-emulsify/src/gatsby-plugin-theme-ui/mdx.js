export default {
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
