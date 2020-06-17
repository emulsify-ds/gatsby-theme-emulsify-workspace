import { Component } from "react";
/** @jsx jsx */
import { jsx } from "theme-ui";

import ListItem from "../../Atoms/ListItem/ListItem.component";

/**
 * Component that renders a menu.
 */
export default class Menu extends Component {
  render() {
    const { menu, id } = this.props;

    const directoryTree = {};
    directoryTree.children = [];

    menu.forEach((item) => {
      let isActive = false;
      // Components
      if (item.sourceInstanceName === "components") {
        // Only add one Components subitem to menu - should be refactored later.
        if (item.name === "Code") {
          // Mark the item active if its id is the same as the id of the current page.
          isActive = item.childMdx.id === id;
          if (!isActive) {
            // Also mark the item active if the current page id corresponds to a menu item that shares a prefix with the Code item (sibling).
            let prefix = item.childMdx.fields.slug.replace("code/", "");
            let siblings = menu.filter((menuitem) =>
              menuitem.childMdx
                ? menuitem.childMdx.id === id &&
                  menuitem.childMdx.fields.slug.startsWith(prefix)
                : ""
            );
            isActive = siblings.length > 0;
          }
          directoryTree.children.push({
            item: item,
            active: isActive,
          });
        }
      }
      // Pages
      else {
        if (item.childMdx) {
          isActive = item.childMdx.id === id;
          directoryTree.children.push({
            item: item,
            active: isActive,
          });
        }
      }
    });

    return (
      <ul
        className="menu-child"
        sx={{
          margin: (theme) => `0 0 0 ${theme.space[4]}`,
          "& .menu-link": {
            fontSize: 0,
            textTransform: "uppercase",
          },
        }}
      >
        {directoryTree.children.map(function (item, i) {
          return (
            <ListItem
              active={item.active}
              item={item.item}
              key={item.item.childMdx.id}
              itemName={item.item.childMdx.frontmatter.title}
              itemLink={item.item.childMdx.fields.slug}
              icon
              sx={{
                fontSize: 1,
              }}
            />
          );
        })}
      </ul>
    );
  }
}
