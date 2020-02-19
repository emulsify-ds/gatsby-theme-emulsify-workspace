<img src="./hero.png" />

[![Four Kitchens](https://img.shields.io/badge/4K-Four%20Kitchens-35AA4E.svg)](https://fourkitchens.com/)

<h4 align="center">A Design System <em>Generator</em> powered by <a href="https://gatsbyjs.org">Gatsby Themes</a> and <a href="https://github.com/mdx-js/specification">MDX</a>.
</h4>

## A Modern Workflow is Component-driven

Components win. They’re the building blocks of UI. Everywhere you look, people are building component libraries and they’re using component based frameworks to build them. Working on a component library is hard work and ensuring an organization buys into your design system is even harder. Storybook has become the defacto ["workshop"](http://bradfrost.com/blog/post/the-workshop-and-the-storefront/) for components. However, it is not the appropriate tool for a organization's design system, which includes all sorts of other information and may only display a subset of the components in your library.

Emulsify is a customizable and themeable design system _generator_ built with Gatsby. It reads your component library and builds a design system for you. Using MDX you can author custom documentation for each component and other helpful pages for your design system's audience.

## Setup

### Quickstart

Using a Gatsby Starter is the fastest way to get up-and-running.

- [Twig Starter](https://github.com/fourkitchens/gatsby-starter-emulsify-twig)
- React Starter (coming soon)
- [Drupal Starter](https://github.com/fourkitchens/gatsby-starter-emulsify-drupal) (Drupal 8 theme including Storybook for a Pattern Library)

#### Manual Installation

* Create a directory for your design system.
```sh
mkdir my-design-system
cd my-design-system
```
* `yarn init`
* `yarn add react react-dom gatsby gatsby-theme-emulsify`
* Create a `gatsby-config.js`
```js
module.exports = {
  plugins: [
    {
      resolve: "gatsby-theme-emulsify",
      options: {
        componentLibPath: 'components', // Where your component library lives
        docPagesPath: 'styleguide', // Where your custom styleguide pages live
        basePath: __dirname, // Needed to make above paths relative to your project
        designSystems: [
          {
            name: "Acme Corporation", // Other design system you may want to link to in a parent/child situation
            link: "https://acme-design-system.netlify.com"
          },
        ],
        // Site Metadata for style guide
        siteMetadata: {
          title: "B&E Security",
          description: "Your favorite security company",
          author: "B&E Security",
        }
      },
    },
  ],
}
```
* In your project root, create a `components` directory and add a directory for each component.
* Add your component and an adjacent `.yml` file that will be used to populate the data needed to render the component.
* In your project root, create a `styleguide` directory and inside it create a `Components` directory with an empty `.md` file in it. This is needed for placing links to each component in the sidebar.
```md
---
title: "Components"
description: "This is the components section"
publishToStyleGuide: true
---
```
* You're now ready to start documenting your component library!

### Documenting Components

Create a `Code.mdx` file alongside one of your component.

Inside of `Code.mdx`, use the `<Code />`, `<Component />`, and/or `<TableOfContents />` components in your MDX to fluidly author your docs and inline code snippets and rendered examples of your component.

#### Example
```mdx
---
title: "CTAs"
description: "Call To Action component for use on landing pages"
tab: "Code"
tabOrder: 1
publishToStyleGuide: true
---

<TableOfContents />

# This is a CTA

## Example

<Component />

## Source

<Code />
```

This file will be used to generate a "Code" tab on CTA component documentation. Create any number of tabs: "Style", "Usage", etc...

#### Custom MDX components available:

* `<Code />` renders the source for you component with syntax highlighting
* `<Component />` renders your component inline
* `<TableOfContents />` renders a Table of Contents for the given page

### Custom pages
In a `styleguide` directory in your component library root directory, you can create custom pages to be added to your design system.

Inside `styleguide`, create a directory called `1__Getting Started`.

<details>
<summary>💡 Hint</summary>
Prepending your directories with numbers like "1__" is a great way to sort your sidebar links.
</details>

Inside `1__Getting Started` create `Welcome.md`.

#### Example

```md
---
title: "Welcome"
description: "Welcome to the Acme Corporation design system"
publishToStyleGuide: true
---

# Welcome to the Acme Corporation design system!
```

This page will be automatically added to the menu bar in your design system.

## Examples

The following design systems were build with Emulsify:

* https://my-design-system-emulsify.netlify.com/
* https://acme-design-system-emulsify.netlify.com/

## Contributing

### Setup
* TODO

## FAQs on component driven design/development
<details>
<summary>
<b>Q: What is Component-driven Development?</b>
</summary>
<p>The familiar metaphor of thinking about the web as "pages" is inaccurate. The web is better thought of as a collection of components that are assembled together: headers, footers, navigation items, and so on. For instance, a site has a header that gets applied to every page, and if you update the header that change shows up throughout the site. This approach to building sites is called component-driven development.</p>
<p>Components are the reusable chunks of web sites. They can be small (inputs, labels, buttons), medium (header, footer, cards), or large (landing page template, photo gallery). Emulsify adopts the method of Atomic Design, where the smallest components are atoms, which are assembled into molecules, organisms, templates, and finally pages. (Yes, we still call them "pages"; it makes it easier to talk with clients.)</p>
</details>

<details>
<summary>
<b>Q: What is a Living Style Guide?</b>
</summary>
Maintain a Style Guide that is Never Out of Date
Everyone loves a style guide, but few projects are able to maintain them. Emulsify takes a "living style guide" approach where the style guide components are the same ones in use on the live site. No more worries about components going out of date or looking different than the style guide.
</details>

## Roadmap
- [Theme UI](https://theme-ui.com/) integration
- React support
- Move Twig functionality to Gatsby plugin
- Clean up gatsby node to abstract language support
- Code tabs (tab per language loaded)
- Search
