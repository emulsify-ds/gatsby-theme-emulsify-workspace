import { Component } from "react";
/** @jsx jsx */
import { jsx } from "theme-ui";

import "./main-menu.css";

import DownIcon from "../../../../assets/down.svg";
import UpIcon from "../../../../assets/up.svg";
import Menu from "./Menu.component";
import MenuComponent from "./MenuComponent.component";

/**
 * Component that renders the main menu.
 */
export default class MainMenu extends Component {
  state = { activeIndex: null };

  toggle = (index) => {
    if (this.state.activeIndex !== index) {
      this.setState({ activeIndex: index });
    } else {
      this.setState({ activeIndex: null });
    }
  };

  render() {
    const { menu, id, filter, collection } = this.props;
    let menuItems = menu;

    const directoryTree = {};
    directoryTree.children = [];

    menuItems.forEach((item) => {
      // Filter by filter prop.
      if (item.sourceInstanceName === filter) {
        // Not the following pages.
        if (item.childMdx) {
          const itemDir = item.relativeDirectory;
          // Only if it has a parent directory.
          if (itemDir !== "") {
            directoryTree.children.push({
              parent: itemDir,
              item: item,
              active: item.childMdx.id === id ? true : false,
            });
          }
        }
      }
    });

    directoryTree.children.sort(function (a, b) {
      if (a.parent[0] < b.parent[0]) {
        return -1;
      }
      if (a.parent[0] > b.parent[0]) {
        return 1;
      }
      return 0;
    });

    const groupedMenuItems = directoryTree.children.reduce((acc, item) => {
      const parentItem = acc[item.parent] || [];
      return {
        ...acc,
        [item.parent]: [...parentItem, item.item],
      };
    }, {});

    const isComponentsMenu = (name) => name === "Components";

    return (
      <ul
        className="main-menu"
        sx={{
          variant: "menus.main.list",
        }}
      >
        {Object.keys(groupedMenuItems).map((parentKey, parentIndex) => {
          const parentName = parentKey.split("-").pop();
          const parentNameSplit = parentName.split("_").pop();
          let activeItem = false;
          groupedMenuItems[parentKey].forEach((item) => {
            if (item.childMdx.id === id) {
              activeItem = true;
            }
          });
          return (
            // eslint-disable-next-line jsx-a11y/no-noninteractive-element-interactions
            <li
              key={parentIndex}
              className={`menu-item ${
                activeItem === true ||
                this.state.activeIndex === parentIndex ||
                groupedMenuItems[parentKey][0].name.toLowerCase() === collection
                  ? "menu-item--open"
                  : ""
              }`}
              onClick={this.toggle.bind(this, parentIndex)}
              onKeyDown={this.toggle.bind(this, parentIndex)}
              sx={{
                variant: "menus.main.listItem",
              }}
            >
              <span>
                {parentNameSplit}
                <DownIcon
                  className="menu-icon menu-icon--down"
                  aria-label="Toggle Open"
                  sx={{
                    variant: "menus.main.downIcon",
                  }}
                />
                <UpIcon
                  className="menu-icon menu-icon--up"
                  aria-label="Toggle Closed"
                  sx={{
                    variant: "menus.main.upIcon",
                  }}
                />
              </span>
              {isComponentsMenu(parentNameSplit) ? (
                <MenuComponent menu={menu} filter="components" id={id} />
              ) : (
                <Menu
                  menu={groupedMenuItems[parentKey]}
                  filter="pages"
                  id={id}
                />
              )}
            </li>
          );
        })}
      </ul>
    );
  }
}
