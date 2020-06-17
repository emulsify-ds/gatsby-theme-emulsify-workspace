export default {
  tabLinks: {
    list: {
      backgroundColor: "gray",
      margin: 0,
      listStyle: "none",
      fontSize: 0,
    },
    defaultListItem: {
      light: {
        backgroundColor: "tabsItemBg",
        color: "background",
        display: "inline-block",
        margin: 0,
        px: 4,
        py: 3,
      },
      dark: {
        backgroundColor: "tabsItemBg",
        color: "background",
        display: "inline-block",
        margin: 0,
        px: 4,
        py: 3,
      },
    },
    listItem: {
      display: "inline-block",
      margin: 0,
      padding: 3,
      pl: 3,
      "&:hover svg": {
        opacity: 1,
      },
    },
    links: {
      light: {
        a: {
          color: "background",
          "&:hover": {
            color: "background",
          },
        },
      },
      dark: {
        a: {
          color: "text",
          "&:hover": {
            color: "text",
          },
        },
      },
    },
  },
};
