const _ = require("lodash");
const path = require("path");
const { createFilePath } = require(`gatsby-source-filesystem`);

// This should get removed eventually https://github.com/gatsbyjs/gatsby/issues/13072#issuecomment-523204930.
const express = require(`express`);
exports.onCreateDevServer = ({ app }) => {
  app.use(express.static(`public`));
};

/**
 * Uses the presence of published md files as a way to decide what assets should show in the styleuide and groups them together.
 */
function createAssetMap(mdFiles) {
  const dirs = {};
  return mdFiles.reduce((acc, current) => {
    const mdParentDir = current.fields.parentDir;
    if (!dirs[mdParentDir]) {
      dirs[mdParentDir] = true;
      return [
        ...acc,
        {
          mdFile: current
        }
      ];
    }

    return acc;
  }, []);
}

exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions;

  const ComponentPost = require.resolve(`./src/components/Templates/layout.js`);

  return graphql(`
    {
      allMdx(
        limit: 1000
        filter: { frontmatter: { publishToStyleGuide: { eq: true } } }
      ) {
        nodes {
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
  `).then(result => {
    if (result.errors) {
      throw result.errors;
    }

    // Create component pages.
    const mdFiles = result.data.allMdx.nodes;

    const assetMap = createAssetMap(mdFiles);

    mdFiles.forEach(mdFile => {
      const fileRead = Promise.resolve("No Code found");
      return fileRead.then(() => {
        createPage({
          path: mdFile.fields.slug,
          component: ComponentPost,
          context: {
            slug: mdFile.fields.slug,
            collection: mdFile.fields.collection,
            parentDir: mdFile.fields.parentDir
          }
        });
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

    // Get the parent node
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
};
