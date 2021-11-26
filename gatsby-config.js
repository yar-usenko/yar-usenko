module.exports = {
  siteMetadata: {
    siteUrl: `https://usenko.pp.ua`,
  },
  plugins: [
    `gatsby-plugin-sitemap`
  ].filter(Boolean),
  flags: {
    FAST_DEV: true
  }
}