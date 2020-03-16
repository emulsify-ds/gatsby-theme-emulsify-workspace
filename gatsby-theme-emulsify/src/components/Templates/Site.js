import React from "react";
import { MDXRenderer } from "gatsby-plugin-mdx";
/** @jsx jsx */
import { Flex, jsx } from "theme-ui";

import Sidebar from "../Organisms/Sidebar/Sidebar.component";
import Tabs from "../Organisms/Tabs/Tabs.component";

import "./site.css";
import "./main.css";
import "./main-design.css";

export default ({
  title,
  pageTitle,
  body,
  docPages,
  designSystems,
  id,
  menu,
  parentDirectory,
  collection
}) => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const toggleOpen = () => {
    setIsMenuOpen(prevState => !prevState);
  };

  let tabs = docPages
    .filter(
      docPage =>
        docPage.node.fields &&
        docPage.node.fields.parentDir === parentDirectory &&
        docPage.node.frontmatter.tab
    )
    .sort(function(a, b) {
      return a.node.frontmatter.tabOrder - b.node.frontmatter.tabOrder;
    });
  return (
    <div className={isMenuOpen ? "wrapper-open wrapper" : "wrapper"}>
      <Flex className="main">
        <Sidebar
          id={id}
          pages={docPages}
          siteTitle={title}
          toggleOpen={toggleOpen}
          menu={menu}
          collection={collection}
          designSystems={designSystems}
        />
        <Flex
          className="main-content"
          sx={{
            flexBasis: [null, "80%", null]
          }}
        >
          <h1
            className="main-title"
            sx={{
              background:
                "linear-gradient(90deg, var(--dot-bg-color) 20px, transparent 1%) center, linear-gradient(var(--dot-bg-color) 20px, transparent 1%) center, var(--dot-color)",
              backgroundSize: "22px 22px",
              color: "background",
              fontSize: 9,
              mb: 0,
              marginTop: 0,
              px: [4, null, 16],
              py: [8, null, 48],
              pb: [8, null, 8]
            }}
          >
            {pageTitle}
          </h1>
          {tabs.length ? <Tabs tabs={tabs} id={id} /> : null}
          <div
            className="main-content-content"
            sx={{
              px: [4, null, 16],
              py: 12
            }}
          >
            <MDXRenderer>{body}</MDXRenderer>
          </div>
        </Flex>
      </Flex>
    </div>
  );
};
