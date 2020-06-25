module.exports = {
  siteMetadata: {
    title: `Switchback`,
    titleTemplate: `Epic Software`,
    description: `Switchback's Blog`,
    author: `Ty Hitzeman`,
    image: 'banner.jpg',
    siteUrl: "http://localhost:8000/blog",
    mailchimp_endpoint: "https://tech.us18.list-manage.com/subscribe/post?u=cf05d1d7d6f957a5f11cea628&amp;id=b6b72a31e0",
    disqus_shortname: "switchback",
    getform_url: "https://getform.io/f/7a6695a7-c8e3-442c-bc2f-d46d3b9a535e",
    contact: {
      social: {
        facebook: 'https://facebook.com',
        twitter: 'https://twitter.com',
        instagram: 'https://instagram.com/switchback.tech',
        linkedin: 'http://linkedin.com/company/switchbacktech',
        youtube: 'https://www.youtube.com/channel/UCyB1I3yUNkIea2Wh7WaEioA',
      }
    }
  },
  mapping: {
    "MarkdownRemark.frontmatter.author": `AuthorsJson.name`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-json`,
    `gatsby-plugin-styled-components`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/assets/img`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `data`,
        path: `${__dirname}/src/data/`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 1920
            },
          },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-prefetch-google-fonts`,
      options: {
        fonts: [
          {
            family: `Montserrat`,
            subsets: [`latin`],
            variants: [`300`, `400`, `500`, `600`, `700`, `900`]
          },
          {
            family: `Marck Script`,
            subsets: [`latin`],
            variants: [`400`]
          },
          {
            family: `Dancing Script`,
            subsets: [`latin`],
            variants: [`400`, `500`, `600`, `700`]
          }
        ],
      },
    },
    {
      resolve: `gatsby-source-instagram`,
      options: {
        // type: `user-profile`,
        // hashtag: `naturesbeauty`,
        username: `switchback.tech`,
        // access_token: "EAAJfJNguJz4BAI3u9hxFCVJUwVgT39AzmO7nyRAPPEhHEiyyElx7cYSxbv5hHWMyopFM00R0wh7wfoghe7vfePBteFp9pKKkDJKdAPl0b1fKTkWu2s9nYhiYrxHnq28n3mZC4HUSYwxJeaurinARaOqxOzaVfwlBJZBEMApAZDZD",
        // instagram_id: "rainbowit5"
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Test`,
        short_name: `Test Shortname`,
        start_url: `/`,
        background_color: `#333333`,
        theme_color: `#ffd2d1`,
        display: `standalone`,
        "icons": [
          {
            "src": "/icons/icon-72x72.png",
            "sizes": "72x72",
            "type": "image/png"
          },
          {
            "src": "/icons/icon-96x96.png",
            "sizes": "96x96",
            "type": "image/png"
          },
          {
            "src": "/icons/icon-128x128.png",
            "sizes": "128x128",
            "type": "image/png"
          },
          {
            "src": "/icons/icon-144x144.png",
            "sizes": "144x144",
            "type": "image/png"
          },
          {
            "src": "/icons/icon-152x152.png",
            "sizes": "152x152",
            "type": "image/png"
          },
          {
            "src": "/icons/icon-192x192.png",
            "sizes": "192x192",
            "type": "image/png"
          },
          {
            "src": "/icons/icon-384x384.png",
            "sizes": "384x384",
            "type": "image/png"
          },
          {
            "src": "/icons/icon-512x512.png",
            "sizes": "512x512",
            "type": "image/png"
          }
        ]
      },
    },
    {
      resolve: 'gatsby-plugin-robots-txt',
      options: {
        host: "http://localhost:8000/",
        sitemap: "http://localhost:8000/sitemap.xml",
        policy: [{ userAgent: '*', allow: '/' }]
      }
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    `gatsby-plugin-offline`,
  ],
}
