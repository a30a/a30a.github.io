require(`dotenv`).config({
  path: `.env`,
})

module.exports = {
  siteMetadata: {
    siteTitle: `a30a`,
    siteTitleAlt: `a30a`,
    siteUrl: `https://a30a.dev`,
    siteDescription: `Yet another developer site`,
    siteLanguage: `kr`
  },
  plugins: [
    {
      resolve: `@lekoarts/gatsby-theme-minimal-blog`,
      options: {
        navigation: [
          {
            title: `블로그`,
            slug: `/blog`,
          },
          {
            title: `백대현`,
            slug: `/author`,
          },
        ],
      formatString: `YYYY.MM.DD`
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: `UA-163947439-1`,
        head: false
      },
    },
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `a30a - Yet another developer site`,
        short_name: `a30a`,
        start_url: `/`,
        background_color: `#fff`,
        theme_color: `#6B46C1`,
        display: `standalone`,
      },
    },
    `gatsby-plugin-offline`,
    `gatsby-plugin-netlify`,
    // `gatsby-plugin-webpack-bundle-analyser-v2`,
  ],
}
