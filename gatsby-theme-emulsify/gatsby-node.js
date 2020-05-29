const _ = require("lodash");
const { createFilePath } = require(`gatsby-source-filesystem`);

// This should get removed eventually https://github.com/gatsbyjs/gatsby/issues/13072#issuecomment-523204930.
const express = require(`express`);
exports.onCreateDevServer = ({ app }) => {
  app.use(express.static(`public`));
};

exports.createPages = async ({ actions, graphql }) => {
  const { createPage } = actions;

  const PageLayout = require.resolve(`./src/components/Templates/layout.js`);

  return graphql(
    `
      query loadPagesQuery($limit: Int!) {
        allMdx(
          limit: $limit
          filter: { frontmatter: { publishToStyleGuide: { eq: true } } }
          sort: { order: ASC, fields: fields___sortOrder }
        ) {
          edges {
            node {
              id
              fields {
                parentDir
                slug
              }
              frontmatter {
                title
                description
                publishToStyleGuide
              }
            }
          }
        }
      }
    `,
    { limit: 1000 }
  ).then(result => {
    if (result.errors) {
      throw result.errors;
    }

    result.data.allMdx.edges.forEach(edge => {
      createPage({
        path: edge.node.fields.slug,
        component: PageLayout,
        context: {
          slug: edge.node.fields.slug,
          collection: edge.node.fields.collection,
          parentDir: edge.node.fields.parentDir
        }
      });
    });
  });
};

exports.onCreateNode = async ({ node, actions, getNode }) => {
  const { createNodeField } = actions;

  if (node.internal.type === `Mdx`) {
    let value = createFilePath({
      node,
      getNode
    }).toLowerCase();
    value = value.replace(/\s+/g, "-").toLowerCase();
    createNodeField({
      name: `slug`,
      node,
      value
    });

    // For items added to menu, get the parent node.
    if (
      node.frontmatter.title !== "404 Page Not Found" ||
      node.frontmatter.title !== "Home"
    ) {
      createNodeField({
        node,
        name: `sortOrder`,
        value: value
      });
      const parent = getNode(_.get(node, "parent"));
      createNodeField({
        node,
        name: "collection",
        value: _.get(parent, "sourceInstanceName")
      });
      createNodeField({
        node,
        name: "parentDir",
        value: _.get(parent, "relativeDirectory")
      });
    }
  }
};
