import React from "react";
import { Link } from "gatsby";

export default ({ tabs, id }) => (
  <nav className="tabs">
    <ul>
      {tabs.map(tab => (
        <li key={tab.node.id}>
          <Link
            to={tab.node.fields.slug}
            className={tab.node.id === id ? "active" : ""}
          >
            {tab.node.frontmatter.tab}
          </Link>
        </li>
      ))}
    </ul>
  </nav>
);
