module.exports = {
  pathPrefix: "/gatsby-theme-emulsify-workspace",
  plugins: [
    {
      resolve: 'gatsby-theme-emulsify',
      options: {
        componentLibPath: 'components', // Where your component library lives
        docPagesPath: 'styleguide', // Where your custom styleguide pages live
        UILibPath: "https://lucid-colden-c2abf5.netlify.com/iframe.html", // Where your Storybook instance lives
        basePath: __dirname, // Needed to make above paths relative to your project
        // designSystems: [
        //   {
        //     name: "Basic", // Other design system you may want to link to in a parent/child situation
        //     link: "/"
        //   },
        // ],
        // Site Metadata for style guide
        siteMetadata: {
          title: 'Example',
          description: '',
          author: '',
        },
      },
    },
  ],
};
