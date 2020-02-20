<img src="./hero.png" />

[![Four Kitchens](https://img.shields.io/badge/4K-Four%20Kitchens-35AA4E.svg)](https://fourkitchens.com/)

<h4 align="center">A Style Guide <em>Generator</em> powered by <a href="https://gatsbyjs.org">Gatsby Themes</a> and <a href="https://github.com/mdx-js/specification">MDX</a>.
</h4>

## A Modern Workflow is Component-driven

Emulsify is a customizable and themeable style guide _generator_ built with Gatsby. It reads your documentation and component library and builds a style guide for you. Using MDX you can author custom documentation for each component and other helpful pages for your design system's audience.

## Setup

### Quickstart

This is a Yarn Workspace, so to get started quickly, you can use the example set up in this project. Simply clone this project and run `yarn develop` at root (which actually runs `yarn workspace example develop`).

#### Documentation Pages

Writing Markdown and MDX is supported out of the box. As you can see in the example project, create a `styleguide` directory in the root of your starter (path is also configurable in your `gatsby-config.js` file)and start adding directories and pages. Note: there is one special directory that will be treated uniquely and that is the `Components` directory. It is expected your project components will live somewhere outside of your style guide documentation, so this directory is populated automatically. Read on for details:

### Documenting Components

As above, documenting your components is supported out of the box. By default it will look in your `components` directory, but that path is also configurable via `gatsby-config.js`. Create a `Code.mdx` file alongside one of your component.

If you'd like display your components in your style guide, there is an example of how to do this in the example project using Storybook. Here were the steps used to leverage that you would follow in your project:

1. Install Storybook `npx -p @storybook/cli sb init` (use the command that makes sense for your Storybook instance)
2. In `package.json`, change your Storybook build script to be:

`"build-storybook": "build-storybook -o static/storybook"`

3. Also in that file, change the following two Gatsby commands to be:

```
"develop": "npm run build-storybook && gatsby develop",
"build": "npm run build-storybook && gatsby build",
```

Now, when running `yarn develop`, you will be building your Storybook instance to Gatsby's static directory as a part of your Gatsby workflow. Now, you can go to the file you'd like to insert your component into and use the following shortcode to print your Storybook component:

`<StorybookComponent id="button--emoji" height="75px" />`

The `id` for your component is the ID that Storybook uses to identify the component in their iframe, which is `COMPONENT_DIRECTORY--COMPONTENT_NAME`. Now you will see your component shown in your documentation. See the example project component directory for a couple of examples.

TODO: Document `<TableOfContents />`

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
