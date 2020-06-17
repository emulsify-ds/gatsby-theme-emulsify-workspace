export default {
  menus: {
    parent: {
      light: {
        backgroundColor: "primary",
      },
      dark: {
        backgroundColor: "accent",
      },
      close: {
        fill: "background",
        padding: 1,
      },
      list: {
        px: 4,
      },
      links: {
        color: "background",
      },
    },
    main: {
      menuButton: {
        display: ["block", "block", "none"],
        marginTop: "0.5rem",
        "> svg": {
          height: "2rem",
          width: "2rem",
        },
      },
      closeButton: {
        marginTop: "0.5rem",
        "> svg": {
          height: "2rem",
          width: "2rem",
        },
      },
      list: {
        fontSize: 1,
      },
      listItem: {
        borderBottom: "1px solid rgba(255, 255, 255, 0.4)",
        fontSize: "1.1rem",
        fontWeight: "heading",
        mb: 1,
        pb: 1,
      },
      downIcon: {
        fill: "highlight",
        height: "20px",
        top: "7px",
        width: "20px",
      },
      upIcon: {
        fill: "highlight",
        height: "20px",
        top: "7px",
        width: "20px",
      },
    },
  },
};
