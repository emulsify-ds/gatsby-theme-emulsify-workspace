<img src="https://raw.githubusercontent.com/emulsify-ds/gatsby-theme-emulsify-workspace/master/EmulsifyDesignSystem.png" />

[![Four Kitchens](https://img.shields.io/badge/4K-Four%20Kitchens-35AA4E.svg)](https://fourkitchens.com/)

<h4 align="center">A Style Guide <em>Generator</em> powered by <a href="https://gatsbyjs.org">Gatsby</a>, <a href="https://github.com/mdx-js/specification">MDX</a>, and <a href="https://theme-ui.com/">Theme UI</a>.
</h4>

## Summary

The Emulsify Gatsby Theme is a fully customizable/themeable style guide _generator_ built with Gatsby. It reads your documentation and component library and builds a style guide for you. Using MDX you can author custom documentation for your components as well as any other pages for your design system audience.

## Setup

### Installation

As per Gatsby theme best practices, this repo is a Yarn workspace containing the Gatsby theme as well as an `example` directory to see how to use it in a project. 

To install just the Gatsby theme in your project, run:

`npm i gatsby-theme-emulsify`

### Documenting Pages

Writing MDX (and Markdown) is supported out of the box. As you can see in the example project, if you create a `styleguide` directory in the root of your starter (this path is configurable in your `gatsby-config.js` file) and start adding directories and pages, they will automatically populate to the style guide. Note: the `Components` directory will be treated uniquely because it is expected that your project components live separately - read on for more info about documenting components:

### Documenting Components

By default, this project will look for component documentation in your `components` directory, but that path is also configurable via `gatsby-config.js`. Create an MDX (or Markdown) file alongside any component in that directory to document it and the Gatsby theme will automatically consume them.

#### Displaying Components - Storybook Installation

If you'd like to display isolated components in your style guide, there is built-in support for [Storybook](https://storybook.js.org/). To leverage this in your project, follow Storybook's instructions for installing. Here were the steps we took to install in the `example` project:

1. Install Storybook: `npx -p @storybook/cli sb init`
2. Configure Storybook build path for Gatsby: in `package.json`, change your Storybook build script to be:

`"build-storybook": "build-storybook -o static/storybook"`

3. Run Storybook build with Gatsby commands (optional): in `package.json`, you can change the following two Gatsby commands to be:

```
"develop": "npm run build-storybook && gatsby develop",
"build": "npm run build-storybook && gatsby build",
```

Now, when running `yarn develop`, you will be building your Storybook instance to Gatsby's static directory as a part of your Gatsby workflow. 

#### Displaying Components - MDX

Now, you can go to the MDX file where you'd like to display your component and use the following MDX shortcode:

`<StorybookComponent id="button--emoji" />`

The `id` for your component is the ID that Storybook uses to identify the component in their iframe, which is `COMPONENT_DIRECTORY--COMPONTENT_NAME` (you can find this in the Storybook URL). Now you will see your component shown in your documentation. See the `example` components directory for usage ideas. Also, there is a height prop that you can configure to increase the height of the iframe (e.g., `<StorybookComponent id="button--emoji" height="100px" />`).

#### Displaying Components - Component Code

You can also show component code in your MDX files using the traditional backtick syntax (uses [PRISMJS](https://github.com/PrismJS/prism) and [Prism React Rendered](https://github.com/FormidableLabs/prism-react-renderer)) like so:

```
```html
<div class="cta">
  <h2>This is a call to action</h2>
  <Button>Click here</Button>
</div>```
```

#### Other MDX shortcodes available:

`<DarkWrapper>`: Wraps the contents of this component in a "dark" wrapper (opposite of background color). Usage:

```
<DarkWrapper>
Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.
</DarkWrapper>
```

## Theming

The style guide should match your organization's identity, so it is important that this project is fully customizable. 

### Theme UI

We use [Theme UI](https://theme-ui.com/) to manage the styling of the theme. This API-based method of building allows you to easily update/extend/override via config for quickly changing the look/feel. See their [documentation](https://theme-ui.com/getting-started) for details, and the `example` theme for an example override file (`example/src/gatsby-plugin-theme-ui/index.js`). Also, this allows us to quickly implement a dark mode, which is enabled by default (also to add new modes).

### Gatsby Shadowing

For complete control, Gatsby themes allow fully overriding components via [shadowing](https://www.gatsbyjs.org/docs/themes/shadowing/). From the layout to specific components, this allows you full customization over the look/feel and even functionality of the project.

## Contributing

### Workspace Installation

- Clone this workspace and run `yarn` from root to install dependencies
- Also helpful: `yarn develop` at root will actually run `yarn workspace example develop`.

## Roadmap

- Code Tabs shortcode for adding multiple "tabs" for different kinds of code
- Search
- Remove ordering numbers (01_) from url slug

