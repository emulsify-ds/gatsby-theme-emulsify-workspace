import React from "react";
import { graphql } from "gatsby";
/** @jsx jsx */
import { jsx, ThemeProvider } from "theme-ui";
import theme from "../../gatsby-plugin-theme-ui/index";

import Site from "./Site";
import SEO from "./seo";
import "./layout.css";

// Components for MDX
import TableOfContents from "../Molecules/TableOfContents/TableOfContents.component";
import StorybookComponent from "../Atoms/StorybookComponent/StorybookComponent.component";
import CodeBlock from "../Atoms/CodeBlock/CodeBlock.component";
import ContrastWrapper from "../Atoms/ContrastWrapper/ContrastWrapper.component";
import TabLinks from "../Atoms/TabLinks/TabLinks.component";

export default (props) => {
  const { pageContext } = props;
  const post = props.data.mdx;

  /**
   * These components are exposed to the style guide authors
   * so that they can use MDX to layout their component documentation, usage, etc.
   */
  const [components] = React.useState({
    TableOfContents: () => (
      <TableOfContents items={post.tableOfContents.items} />
    ),
    pre: (props) => <div {...props} />,
    StorybookComponent,
    code: CodeBlock,
    ContrastWrapper,
    TabLinks,
  });
  const site = props.data.site;
  const docPages = props.data.allMdx.edges;
  const componentNodes = props.data.allFile.nodes;
  return (
    <ThemeProvider theme={theme} components={components}>
      <Site
        collection={post.fields.collection}
        id={post.id}
        menu={componentNodes}
        pageTitle={post.frontmatter.title}
        fields={post.fields}
        frontmatter={post.frontmatter}
        body={post.body}
        title={site.siteMetadata.title}
        docPages={docPages}
        designSystems={site.siteMetadata.designSystems}
        parentDirectory={pageContext.parentDir}
      />
      <SEO
        title={post.frontmatter.title}
        description={post.frontmatter.description || post.excerpt}
        keywords={[`gatsby`, `application`, `react`]}
      />
    </ThemeProvider>
  );
};

export const pageQuery = graphql`
  query ComponentBySlug($slug: String!) {
    site {
      siteMetadata {
        title
        designSystems {
          name
          link
        }
      }
    }
    mdx(fields: { slug: { eq: $slug } }) {
      id
      excerpt(pruneLength: 160)
      body
      frontmatter {
        title
        description
        tab
      }
      tableOfContents
      fields {
        parentDir
        collection
      }
    }
    allMdx {
      edges {
        node {
          id
          fields {
            slug
            collection
            parentDir
          }
          frontmatter {
            title
            tab
            tabOrder
          }
        }
      }
    }
    allFile(sort: { fields: childMdx___fields___sortOrder }) {
      nodes {
        sourceInstanceName
        relativeDirectory
        name
        childMdx {
          id
          frontmatter {
            title
            tab
          }
          fields {
            slug
          }
        }
      }
    }
  }
`;
