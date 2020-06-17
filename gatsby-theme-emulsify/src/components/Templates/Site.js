import React from "react";
import { MDXRenderer } from "gatsby-plugin-mdx";
/** @jsx jsx */
import { Flex, jsx, useColorMode, Button } from "theme-ui";

import Sidebar from "../Organisms/Sidebar/Sidebar.component";
import Tabs from "../Organisms/Tabs/Tabs.component";

import "./site.css";
import "./main.css";

export default ({
  title,
  pageTitle,
  body,
  docPages,
  designSystems,
  id,
  menu,
  parentDirectory,
  collection,
}) => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [colorMode, setColorMode] = useColorMode();

  const toggleOpen = () => {
    setIsMenuOpen((prevState) => !prevState);
  };

  let tabs = docPages
    .filter(
      (docPage) =>
        docPage.node.fields &&
        docPage.node.fields.parentDir === parentDirectory &&
        docPage.node.frontmatter.tab
    )
    .sort(function (a, b) {
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
            variant: "layout.main",
          }}
        >
          <Button
            onClick={(e) => {
              setColorMode(colorMode === "default" ? "dark" : "default");
            }}
            variant="secondary"
            sx={{
              cursor: "pointer",
              position: "fixed",
              top: 4,
              right: [16, 16, 4],
              borderRadius: "2px",
              padding: 2,
              fontSize: 0,
              zIndex: 10,
            }}
          >
            {colorMode === "default" ? "Dark" : "Light"}
          </Button>
          <h1
            className="main-title"
            sx={{
              variant: "headings.hero",
            }}
          >
            {pageTitle}
          </h1>
          {tabs.length ? <Tabs tabs={tabs} id={id} /> : null}
          <div
            className="main-content-content"
            sx={{
              variant: "layout.mainContent",
            }}
          >
            <MDXRenderer>{body}</MDXRenderer>
          </div>
        </Flex>
      </Flex>
    </div>
  );
};
