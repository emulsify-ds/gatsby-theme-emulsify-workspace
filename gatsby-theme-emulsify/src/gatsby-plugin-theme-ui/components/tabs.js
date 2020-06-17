export default {
  tabs: {
    nav: {
      backgroundColor: "accent",
      px: [4, null, 16],
      py: 4,
      pb: 0,
    },
    link: {
      color: "background",
      borderTopLeftRadius: 0,
      borderTopRightRadius: 0,
      fontWeight: "heading",
      marginRight: 2,
      px: 4,
      py: 2,
      ":hover": {
        backgroundColor: "muted",
      },
      "&.active": {
        backgroundColor: "background",
        color: "accent",
      },
    },
  },
};
