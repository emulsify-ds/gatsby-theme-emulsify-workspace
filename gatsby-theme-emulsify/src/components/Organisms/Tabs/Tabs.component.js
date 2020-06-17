/** @jsx jsx */
import { jsx } from "theme-ui";
import { Link } from "gatsby";

import "./tabs.css";

export default ({ tabs, id }) => (
  <nav
    className="tabs"
    sx={{
      variant: "tabs.nav",
    }}
  >
    <ul>
      {tabs.map((tab) => (
        <li key={tab.node.id}>
          <Link
            to={tab.node.fields.slug}
            className={tab.node.id === id ? "active" : ""}
            sx={{
              variant: "tabs.link",
            }}
          >
            {tab.node.frontmatter.tab}
          </Link>
        </li>
      ))}
    </ul>
  </nav>
);
