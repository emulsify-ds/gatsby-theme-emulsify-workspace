<p align="center"><img src="https://raw.githubusercontent.com/emulsify-ds/documentation/master/.gitbook/assets/logo.png" width="400" /></p>

Emulsify is an open-source tool for creating design systems with reusable components and clear guidelines for teams. Emulsify helps organizations scale their design while reducing cost, streamlining workflows, and improving accessibility.

# Emulsify Gatsby theme

### Style guide _generator_ powered by <a href="https://gatsbyjs.org">Gatsby</a>, <a href="https://github.com/mdx-js/specification">MDX</a>, and <a href="https://theme-ui.com/">Theme UI</a>

**Emulsify Gatsby theme** is a fully customizable/themeable style guide _generator_ built with Gatsby. It reads your documentation and component library and builds a style guide for you. Using MDX you can author custom documentation for your components as well as any other pages for your design system audience.

## Examples

1. [Western University of Pennsylvania](https://laughing-pike-7c72c6.netlify.com/)
2. [Default example](https://emulsify-ds.github.io/gatsby-theme-emulsify-workspace/) (no overrides, just default content)

## Setup

### Installation

As per Gatsby theme best practices, this repo is a Yarn workspace containing the Gatsby theme as well as an `example` directory to see how to use it in a project.

To install just the Gatsby theme in your project, run:

`npm i gatsby gatsby-theme-emulsify`

### Setting up Basic Site Information

Create a local `gatsby-config.js` file (see [the example one](https://github.com/emulsify-ds/gatsby-theme-emulsify-workspace/blob/master/example/gatsby-config.js) for documented options) and enter your basic site information in the `siteMetadata` fields.

### Documenting Pages

Writing MDX/Markdown is supported out of the box. By default, if you create a `styleguide` directory in the root of your starter and start adding directories and pages (you have to at least create index.md and 404.md), they will automatically populate to the style guide (you can also set this path to something different in the `docPagesPath` field of your local `gatsby-config.js` file). Note: the directory name `Components` is reserved, because it is expected that your project components live separately so although you should create that directory if you want Components, any pages you add inside it won't be loaded - read on for more info about documenting those components.

### Documenting Components

By default, the style guide will look for component documentation in your `components` directory, but that path is also configurable via a local `gatsby-config.js` using the `componentLibPath` field. Once you have that set, create an MDX (or Markdown) file alongside any component in that directory to document it and the Gatsby theme will automatically consume them and add them to the reserved `Components` directory (again, see `example` components).


#### Displaying Components - Storybook Installation

If you'd like to display isolated components in your style guide, there is built-in support for [Storybook](https://storybook.js.org/). To leverage this in your project, follow Storybook's instructions for installing based on your need. Here were the steps we took to install in the `example` project:

1. Install Storybook: `npx -p @storybook/cli sb init`
2. Configure Storybook build path for Gatsby: in `package.json`, e.g., change your Storybook build script to be:

`"build-storybook": "build-storybook -o static/storybook" // Again, based on where you want to build/deploy`

3. Set your Storybook iframe build path in the `UILibPath` field in `gatsby-config.js` (e.g., if you use `/static/storybook` like above, you could use your local path like `/storybook/iframe.html`). This can also be a remote source if you're deploying your Storybook instance somewhere else.
4. Run Storybook build with Gatsby commands (optional): in `package.json`, you can change the following Gatsby commands to be:

```
"styleguide-develop": "npm run build-storybook && gatsby develop",
"styleguide-build": "npm run build-storybook && gatsby build",
"styleguide-deploy": "npm run build-storybook && gatsby build --prefix-paths && gh-pages -d public"
```

##### Emulsify Drupal Specific

If you're using [Emulsify Drupal](https://github.com/emulsify-ds/emulsify-drupal), you will also want to do the following:

5. Uncomment the Gatsby-specific sections of `.storybook/webpack.config.js` and `.storybook/config.js` and edit `babel.config.js` to be the following:

```
module.exports = api => {
  api.cache(true);

  const presets = ['babel-preset-gatsby', 'minify'];

  const comments = false;

  return { presets, comments };
};
```

Now, when running `yarn styleguide-develop`, you will be building your Storybook instance to Gatsby's static directory as a part of your Gatsby style guide build.

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

- Search
- Remove ordering numbers (01_) from url slug

## Author

Emulsify&reg; is a product of [Four Kitchens &mdash; We make BIG websites](https://fourkitchens.com).
