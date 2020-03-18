import React from "react";
import { graphql } from "gatsby";
import { MDXProvider } from "@mdx-js/react";
/** @jsx jsx */
import { jsx } from "theme-ui";

import Site from "./Site";
import SEO from "./seo";
import "./layout.css";

// Components for MDX
import TableOfContents from "../Molecules/TableOfContents/TableOfContents.component";
import StorybookComponent from "../Atoms/StorybookComponent/StorybookComponent.component";
import DarkWrapper from "../Atoms/DarkWrapper/DarkWrapper.component";

const HEADINGS = [
  ({ children, props }) => <h1 {...props}>{children}</h1>,
  ({ children, props }) => <h2 {...props}>{children}</h2>,
  ({ children, props }) => <h3 {...props}>{children}</h3>,
  ({ children, props }) => <h4 {...props}>{children}</h4>,
  ({ children, props }) => <h5 {...props}>{children}</h5>,
  ({ children, props }) => <h6 {...props}>{children}</h6>
];

const Heading = level => ({ props, children }) => {
  const H = HEADINGS[level - 1];
  const name =
    typeof children === "string"
      ? children.replace(/\s+/g, "-").toLowerCase()
      : "";
  return (
    <a
      name={name}
      href={`#${name}`}
      sx={{
        color: "text"
      }}
    >
      <H {...props}>{children}</H>
    </a>
  );
};

export default props => {
  const { pageContext } = props;
  const post = props.data.mdx;

  /**
   * These components are exposed to the style guide authors
   * so that they can use MDX to layout their component documentation, usage, etc.
   */
  const [components] = React.useState({
    h1: Heading(1),
    h2: Heading(2),
    h3: Heading(3),
    h4: Heading(4),
    h5: Heading(5),
    h6: Heading(6),
    TableOfContents: () => (
      <TableOfContents items={post.tableOfContents.items} />
    ),
    StorybookComponent,
    DarkWrapper
  });
  const site = props.data.site;
  const docPages = props.data.allMdx.edges;
  const componentNodes = props.data.allFile.nodes;
  return (
    <MDXProvider components={components}>
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
    </MDXProvider>
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
    allFile {
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
