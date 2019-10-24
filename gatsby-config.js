module.exports = {
  pathPrefix: "/gatsby-svg-filters",
  siteMetadata: {
    title: `Gatsby SVG Filters`,
    description: `SVGFilters implementation(s) ran using Gatsbyjs `,
    author: `@ilhamfadheel`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-svg-filters`,
        short_name: `svg-filters`,
        lang: `en`,
        start_url: `/`,
        background_color: `#72798b`,
        theme_color: `#72798b`,
        display: `minimal-ui`,
        icon: `src/images/IF.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
