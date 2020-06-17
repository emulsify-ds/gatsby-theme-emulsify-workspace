const white = "#fff";
const nearWhite = "#e2ebf2";
const lightGray = "#889096";
const gray = "#6E7479";
const darkGray = "#313436";
const black = "#000";

export default {
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
};
