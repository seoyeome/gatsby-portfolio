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
    {
      resolve: `gatsby-plugin-sharp`,
      options: {
        defaults: {
          formats: [`auto`, `webp`],
          placeholder: `dominantColor`,
          quality: 80,
          breakpoints: [750, 1080, 1366, 1920],
          backgroundColor: `transparent`,
        },
        // 문제가 되는 AVIF 형식 비활성화
        avifOptions: {
          quality: 0, // 0으로 설정하면 AVIF 생성 안함
          lossless: false,
          speed: 0,
        },
      },
    },
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
    //     icon: `src/images/`, // This will be created
    //   },
    // },
  ],
}
