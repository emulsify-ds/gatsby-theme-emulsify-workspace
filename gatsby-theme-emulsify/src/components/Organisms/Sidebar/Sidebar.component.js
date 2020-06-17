import PropTypes from "prop-types";
import { Component } from "react";
/** @jsx jsx */
import { jsx, useColorMode, MenuButton, Close } from "theme-ui";

import "./sidebar.css";

import DownIcon from "../../../../assets/down.svg";
import MainMenu from "../../Molecules/Menus/MainMenu.component";

const Link = process.env.STORYBOOK_ENV
  ? ({ children }) => children
  : require("gatsby").Link;

function withColorValue(Component) {
  return function WrappedComponent(props) {
    const [colorMode] = useColorMode();
    return <Component {...props} colorMode={colorMode} />;
  };
}

/**
 * Component that renders the sidebar.
 */
class Sidebar extends Component {
  static propTypes = {
    siteTitle: PropTypes.string,
  };

  static defaultProps = {
    siteTitle: ``,
  };

  state = { isSidebarOpen: false };

  toggleSidebar = () => {
    this.setState((prevState) => ({
      isSidebarOpen: !prevState.isSidebarOpen,
    }));
  };

  open = () => {
    this.props.toggleOpen();
  };

  render() {
    const {
      siteTitle,
      menu,
      id,
      collection,
      designSystems,
      colorMode,
    } = this.props;
    return (
      <div
        className="sidebar"
        sx={
          colorMode === "default"
            ? {
                variant: "layout.sidebar.light",
              }
            : {
                variant: "layout.sidebar.dark",
              }
        }
      >
        {designSystems.length ? (
          <nav
            className="parent-menu"
            sx={
              colorMode === "default"
                ? {
                    variant: "menus.parent.light",
                  }
                : {
                    variant: "menus.parent.dark",
                  }
            }
          >
            <Close
              className="parent-menu__toggle parent-menu__toggle--close"
              onClick={this.open}
              aria-label="Toggle Parent Menu"
              sx={{
                variant: "menus.parent.close",
              }}
            />
            <ul
              sx={{
                variant: "menus.parent.list",
              }}
            >
              {designSystems.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.link}
                    sx={{
                      variant: "menus.parent.links",
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
            variant: "layout.sidebar.inner",
          }}
        >
          <div
            className="sidebar__header"
            sx={{
              variant: "layout.sidebar.header",
            }}
          >
            <DownIcon
              className="parent-menu__toggle parent-menu__toggle--open"
              onClick={this.open}
              aria-label="Toggle Parent Menu"
              sx={{
                variant: "layout.sidebar.downIcon",
              }}
            />
            <h1
              className="sidebar__heading"
              sx={{
                variant: "layout.sidebar.heading",
              }}
            >
              <Link
                to="/"
                sx={{
                  variant: "layout.sidebar.homeLink",
                }}
              >
                {siteTitle}
              </Link>
            </h1>
            {!this.state.isSidebarOpen && (
              <MenuButton
                aria-label="Open Sidebar Menu"
                className="sidebar__toggle"
                onClick={this.toggleSidebar}
                sx={{
                  variant: "menus.main.menuButton",
                }}
              />
            )}
            {this.state.isSidebarOpen && (
              <Close
                aria-label="Close Sidebar Menu"
                className="sidebar__toggle"
                onClick={this.toggleSidebar}
                sx={{
                  variant: "menus.main.closeButton",
                }}
              />
            )}
          </div>
          <nav
            className={
              this.state.isSidebarOpen
                ? "sidebar__nav sidebar__nav--open"
                : "sidebar__nav"
            }
          >
            <MainMenu
              menu={menu}
              id={id}
              filter="pages"
              collection={collection}
            />
          </nav>
          <footer
            className="sidebar__footer"
            sx={{
              variant: "layout.sidebar.footer",
            }}
          >
            Design System Powered by{" "}
            <a
              href="http://emulsify.info"
              target="_blank"
              rel="noopener noreferrer"
              sx={{
                variant: "layout.sidebar.footerLink",
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

export default Sidebar = withColorValue(Sidebar);
