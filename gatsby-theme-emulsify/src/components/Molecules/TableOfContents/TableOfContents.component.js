/** @jsx jsx */
import { jsx } from "theme-ui";

import "./table-of-contents.css";

const TableOfContents = ({ items }) => {
  if (!items) {
    return null;
  }
  return (
    <ul className="toc__list">
      {items.map(item => (
        <li key={item.url} className="toc__item">
          <a
            className="toc__link"
            href={item.url}
            sx={{
              color: "text"
            }}
          >
            {item.title}
          </a>
          <TableOfContents items={item.items} />
        </li>
      ))}
    </ul>
  );
};

export default ({ items }) => (
  <section className="toc">
    <h2 className="toc__h2">Table of Contents</h2>
    <TableOfContents items={items} />
  </section>
);
