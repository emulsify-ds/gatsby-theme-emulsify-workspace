/** @jsx jsx */
import { jsx } from "theme-ui";

const TableOfContents = ({ items }) => {
  if (!items) {
    return null;
  }
  return (
    <ul
      className="toc__list"
      sx={{
        margin: 0,
        "& .toc__list": {
          ml: 4
        }
      }}
    >
      {items.map(item => (
        <li
          key={item.url}
          className="toc__item"
          sx={{
            listStyle: "none",
            margin: 0,
            padding: 0,
            "&:before": {
              content: '"-"',
              marginRight: 2
            }
          }}
        >
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
  <section
    className="toc"
    sx={{
      backgroundColor: "grayLighter",
      borderRadius: 1,
      padding: 4,
      mb: 8
    }}
  >
    <h2
      className="toc__h2"
      sx={{
        fontSize: 3,
        mb: 3,
        mt: 0
      }}
    >
      Table of Contents
    </h2>
    <TableOfContents items={items} />
  </section>
);
