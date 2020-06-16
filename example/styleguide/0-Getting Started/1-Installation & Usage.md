---
title: "Installation & Usage"
description: "How to install and use Emulsify Gatsby Starter Drupal edition"
publishToStyleGuide: true
---

## Installation

In your project, run:

`npm i gatsby-theme-emulsify`

## Usage

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

```html
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

```html
```html
<div class="cta">
  <h2>This is a call to action</h2>
  <Button>Click here</Button>
</div>```
```

#### Other MDX shortcodes available:

`<ContrastWrapper>`: Wraps the contents of this component in a "dark" wrapper (opposite of background color). Usage:

```html
<ContrastWrapper>
Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.
</ContrastWrapper>
```

#### Images and files

You can link to images and files as well. See below for syntax:

Image Markdown:

```html
![City](./city.jpg)
```

![City](./city.jpg)

File Markdown:

```html
[Download the SVG here](logo.svg)

[Download the PDF here](blank.pdf)
```

[Download the SVG here](logo.svg)

[Download the PDF here](blank.pdf)

### Linking Style Guides Together or linking to other systems

There is a `designSystems` configuration in `gatsby-config.js` that allows for links to other systems. This will open up in an offscreen menu by default. See below for an example:

```html
designSystems: [
  {
    name: "Style Guide 1",
    link: "http://emulsify.info"
  },
  {
    name: "Style Guide 2",
    link: "http://fourkitchens.com""
  },
],
```

[Next: Example Documentation](/1-documentation/colors/)
