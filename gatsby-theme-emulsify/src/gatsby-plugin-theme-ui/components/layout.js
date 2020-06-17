export default {
  layout: {
    main: {
      flexBasis: [null, "80%", null],
    },
    mainContent: {
      px: [4, null, 16],
      py: 12,
    },
    sidebar: {
      light: {
        backgroundColor: "muted",
        color: "background",
        flex: "0 1 33%",
      },
      dark: {
        backgroundColor: "secondary",
        color: "background",
        flex: "0 1 33%",
      },
      inner: {
        px: 4,
      },
      header: {
        borderBottom: "1px solid rgba(255, 255, 255, 0.4)",
        pb: 4,
        marginBottom: [null, null, "3rem"],
      },
      downIcon: {
        fill: "background",
        padding: 1,
      },
      heading: {
        fontSize: 7,
        margin: ["0 auto 0 0", null, "1rem auto 1rem 0"],
      },
      homeLink: {
        color: "background",
      },
      footer: {
        fontSize: "0.65rem",
        py: 3,
        borderTop: [null, null, "1px solid rgba(255, 255, 255, 0.4)"],
      },
      footerLink: {
        color: "background",
      },
    },
  },
};
