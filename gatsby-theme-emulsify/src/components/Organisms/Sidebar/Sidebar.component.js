import PropTypes from "prop-types";
import React, { Component } from "react";
/** @jsx jsx */
import { jsx } from "theme-ui";

import "./sidebar.css";
import "./sidebar-design.css";

import CloseIcon from "../../../../assets/close.svg";
import DownIcon from "../../../../assets/down.svg";
import MenuIcon from "../../../../assets/menu-bars.svg";
import MainMenu from "../../Molecules/Menus/MainMenu.component";

const Link = process.env.STORYBOOK_ENV
  ? ({ children }) => children
  : require("gatsby").Link;

/**
 * Component that renders the sidebar.
 */
export default class Sidebar extends Component {
  static propTypes = {
    siteTitle: PropTypes.string
  };

  static defaultProps = {
    siteTitle: ``
  };

  state = { isSidebarOpen: false };

  toggleSidebar = () => {
    this.setState(prevState => ({
      isSidebarOpen: !prevState.isSidebarOpen
    }));
  };

  open = () => {
    this.props.toggleOpen();
  };

  render() {
    const { siteTitle, menu, id, collection, designSystems } = this.props;
    return (
      <div
        className="sidebar"
        sx={{
          backgroundColor: "gray",
          color: "white",
          flex: "0 1 33%"
        }}
      >
        {designSystems.length ? (
          <nav
            className="parent-menu"
            sx={{
              backgroundColor: "grayDarkest"
            }}
          >
            <CloseIcon
              className="parent-menu__toggle parent-menu__toggle--close"
              onClick={this.open}
              aria-label="Toggle Parent Menu"
              sx={{
                fill: "white",
                padding: 1
              }}
            />
            <ul
              sx={{
                px: 4
              }}
            >
              {designSystems.map(link => (
                <li key={link.name}>
                  <a
                    href={link.link}
                    sx={{
                      color: "white"
                    }}
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        ) : null}
        <div
          className="sidebar__inner"
          sx={{
            px: 4
          }}
        >
          <div
            className="sidebar__header"
            sx={{
              borderBottom: "1px solid rgba(255, 255, 255, 0.4)",
              pb: 4,
              marginBottom: [null, null, "3rem"]
            }}
          >
            <DownIcon
              className="parent-menu__toggle parent-menu__toggle--open"
              onClick={this.open}
              aria-label="Toggle Parent Menu"
              sx={{
                fill: "white",
                padding: 1
              }}
            />
            <h1
              className="sidebar__heading"
              sx={{
                fontSize: 7,
                margin: ["0 auto 0 0", null, " 1rem auto 1rem 0"]
              }}
            >
              <Link
                to="/"
                sx={{
                  color: "background"
                }}
              >
                {siteTitle}
              </Link>
            </h1>
            <MenuIcon
              className="sidebar__toggle"
              onClick={this.toggleSidebar}
              aria-label="Toggle Sidebar Menu"
              sx={{
                fill: "white",
                height: "2rem",
                paddingLeft: 4
              }}
            />
          </div>
          <nav
            className={
              this.state.isSidebarOpen
                ? "sidebar__nav sidebar__nav--open"
                : "sidebar__nav"
            }
          >
            <ul className="main-menu">
              <MainMenu
                menu={menu}
                id={id}
                filter="pages"
                collection={collection}
              />
            </ul>
          </nav>
          <footer
            className="sidebar__footer"
            sx={{
              fontSize: "0.65rem",
              py: 3,
              borderTop: [null, null, "1px solid rgba(255, 255, 255, 0.4)"]
            }}
          >
            Design System Powered by{" "}
            <a
              href="http://emulsify.info"
              target="_blank"
              rel="noopener noreferrer"
              sx={{
                color: "white"
              }}
            >
              <strong>Emulsify</strong>
            </a>
          </footer>
        </div>
      </div>
    );
  }
}
