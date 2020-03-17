/** @jsx jsx */
import { jsx } from "theme-ui";
import { Link } from "gatsby";

import "./tabs.css";

export default ({ tabs, id }) => (
  <nav
    className="tabs"
    sx={{
      backgroundColor: "accent",
      px: [4, null, 16],
      py: 4,
      pb: 0
    }}
  >
    <ul>
      {tabs.map(tab => (
        <li key={tab.node.id}>
          <Link
            to={tab.node.fields.slug}
            className={tab.node.id === id ? "active" : ""}
            sx={{
              color: "background",
              borderTopLeftRadius: 0,
              borderTopRightRadius: 0,
              fontWeight: "heading",
              marginRight: 2,
              px: 4,
              py: 2,
              ":hover": {
                backgroundColor: "grayDarker"
              },
              "&.active": {
                backgroundColor: "background",
                color: "accent"
              }
            }}
          >
            {tab.node.frontmatter.tab}
          </Link>
        </li>
      ))}
    </ul>
  </nav>
);
