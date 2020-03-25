const _ = require("lodash");
const { createFilePath } = require(`gatsby-source-filesystem`);

// This should get removed eventually https://github.com/gatsbyjs/gatsby/issues/13072#issuecomment-523204930.
const express = require(`express`);
exports.onCreateDevServer = ({ app }) => {
  app.use(express.static(`public`));
};

// Inspired by https://github.com/xaviemirmon/gatsby_drupal_menus/blob/master/index.js
function createMenuHierarchy(menuData, menuName) {
  let tree = [],
    menuObject = {},
    mappedElem;

  // First map the items of the array to an object -> create a hash table.
  menuData.forEach(menuItem => {
    // Check before adding items (e.g., && arrElem.enabled === true)
    if (menuItem.menu_name === menuName) {
      // If traditional menu structure (parents are links)
      if (menuItem.parent_menu_item !== null) {
        menuObject[menuItem.id] = menuItem;
        menuObject[menuItem.id].parent_menu_item = menuItem.parent_menu_item;
        menuObject[menuItem.id]["children"] = [];
      }
      // If parent is just a directory
      if (menuItem.parent_dir !== null) {
        menuObject[menuItem.parent_dir] = [];
        // menuObject[menuItem.id].parent_dir = menuItem.parent_dir;
        menuObject[menuItem.parent_dir]["children"] = [];
      }
    }
  });

  for (let id in menuObject) {
    if (menuObject.hasOwnProperty(id)) {
      mappedElem = menuObject[id];
      // If the element is not at the root level, add it to its parent array of children.
      if (mappedElem.parent_menu_item) {
        menuObject[mappedElem.parent_menu_item]["children"].push(mappedElem);
      } else if (mappedElem.parent_dir) {
        menuObject[mappedElem.parent_dir]["children"].push(mappedElem);
      }
      // If the element is at the root level, add it to first level elements array.
      else {
        tree.push(mappedElem);
      }
    }
  }
  return tree;
}

// Form of working Menu Data
const menuData = [
  {
    id: "68006957-d13a-50db-9f11-42789d95781c",
    menu_name: "Menu Name Test",
    parent_dir: "0__Getting started",
    menu_item_name: "Somewhere Sub 1 (Child)",
    menu_item_url: "/somewhere/else"
  },
  {
    id: "716336ad-8ef2-5e1a-b053-e759275bdd07",
    menu_name: "Menu Name Test",
    parent_dir: "0__Getting started",
    menu_item_name: "Somewhere Sub 2 (Child)",
    menu_item_url: "/somewhere/else-2"
  },
  {
    id: "7f107164-fbe4-519f-af8e-e3e441a4f6fa",
    menu_name: "Menu Name Test",
    parent_dir: "1__Documentation",
    menu_item_name: "Elsewhere Sub 1 (Child)",
    menu_item_url: "/elsewhere/else"
  },
  {
    id: "29c74508-cb69-5002-8818-7ca6e1e5163f",
    menu_name: "Menu Name Test",
    parent_dir: "1__Documentation",
    menu_item_name: "Elsewhere Sub 2 (Child)",
    menu_item_url: "/elsewhere/else-2"
  }
];

// Working Menu Array Creation
// console.log(createMenuHierarchy(menuData, "Menu Name Test"));

exports.createPages = async ({ actions, graphql }) => {
  const { createPage } = actions;

  const PageLayout = require.resolve(`./src/components/Templates/layout.js`);

  return graphql(
    `
      query loadPagesQuery($limit: Int!) {
        allMdx(
          limit: $limit
          filter: { frontmatter: { publishToStyleGuide: { eq: true } } }
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
    value = value.replace(/[0-9]+_{2,2}/g, "");
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
