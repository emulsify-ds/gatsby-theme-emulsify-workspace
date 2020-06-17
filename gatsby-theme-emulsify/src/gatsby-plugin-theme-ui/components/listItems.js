export default {
  listItems: {
    menuItem: {
      lineHeight: 1.4,
      mb: 0,
      pb: 0,
      "&.menu-item--child--active::before": {
        border: (theme) => `5px solid ${theme.colors.menuItemBorder}`,
        borderBottomColor: "transparent",
        borderRightColor: "transparent",
        borderTopColor: "transparent",
        borderRadius: 0,
        left: "-2px",
        ml: "-7px",
      },
    },
    menuLinks: {
      color: "background",
      fontSize: 1,
      fontWeight: "heading",
      "&:hover": {
        opacity: "0.75",
        textDecoration: "none",
      },
    },
  },
};
