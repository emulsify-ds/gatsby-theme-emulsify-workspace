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
      if (item.childMdx) {
        isActive = item.childMdx.id === id;
        directoryTree.children.push({
          item: item,
          active: isActive,
        });
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
