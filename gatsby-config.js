/**
 * Configure your Gatsby site with this file.
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-config/
 */

module.exports = {
  siteMetadata: {
    title: `개인 포트폴리오`,
    description: `A personal portfolio website built with Gatsby`,
    author: `@seoyeome`,
    siteUrl: `https://gatsbyportfolio.com`,
  },
  plugins: [
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    // Temporarily removing manifest plugin to avoid icon issues
    // {
    //   resolve: `gatsby-plugin-manifest`,
    //   options: {
    //     name: `gatsby-portfolio`,
    //     short_name: `portfolio`,
    //     start_url: `/`,
    //     background_color: `#1a1a2e`,
    //     theme_color: `#8a2be2`,
    //     display: `minimal-ui`,
    //     icon: `src/images/gatsby-icon.png`, // This will be created
    //   },
    // },
  ],
}
