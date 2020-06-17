import colors from "./colors";
import space from "./space";
import fonts from "./fonts";

// components
import buttons from "./components/buttons";
import wrapper from "./components/wrapper";
import listItems from "./components/listItems";
import headings from "./components/headings";
import layout from "./components/layout";
import menus from "./components/menus";
import tabs from "./components/tabs";
import pre from "./components/pre";
import storybook from "./components/storybook";
import tabLinks from "./components/tabLinks";

// MDX
import mdx from "./mdx.js";

// example theme file
export default {
  breakpoints: ["480px", "768px", "1024px"],
  radii: ["2px", "3px"],
  ...colors,
  ...space,
  ...fonts,
  ...buttons,
  ...wrapper,
  ...listItems,
  ...headings,
  ...layout,
  ...menus,
  ...tabs,
  ...pre,
  ...storybook,
  ...tabLinks,
  ...mdx,
};
