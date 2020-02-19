import PropTypes from "prop-types";
import React, { Component } from "react";
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
      <div className="sidebar">
        {designSystems.length ? (
          <nav className="parent-menu">
            <CloseIcon
              className="parent-menu__toggle parent-menu__toggle--close"
              onClick={this.open}
              aria-label="Toggle Parent Menu"
            />
            <ul>
              {designSystems.map(link => (
                <li key={link.name}>
                  <a href={link.link}>{link.name}</a>
                </li>
              ))}
            </ul>
          </nav>
        ) : null}
        <div className="sidebar__inner">
          <div className="sidebar__header">
            <DownIcon
              className="parent-menu__toggle parent-menu__toggle--open"
              onClick={this.open}
              aria-label="Toggle Parent Menu"
            />
            <h1 className="sidebar__heading">
              <Link to="/">{siteTitle}</Link>
            </h1>
            <MenuIcon
              className="sidebar__toggle"
              onClick={this.toggleSidebar}
              aria-label="Toggle Sidebar Menu"
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
          <footer className="sidebar__footer">
            Design System Powered by{" "}
            <a
              href="http://emulsify.info"
              target="_blank"
              rel="noopener noreferrer"
            >
              <strong>Emulsify</strong>
            </a>
          </footer>
        </div>
      </div>
    );
  }
}
