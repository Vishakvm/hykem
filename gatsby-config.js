/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
    plugins: [
        { resolve: `gatsby-plugin-react-helmet` },
        { resolve: `gatsby-plugin-sass` },
        {
            resolve: 'gatsby-plugin-manifest',
            options: {
                icon: 'static/img/hykem_favicon.png',
            },
        },
    ]
}
