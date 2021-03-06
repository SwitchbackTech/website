# Adding New Content (not features, bug fixes)

- Checkout to `master`
- Add/Edit posts in `/data/blogs`
- Test: `gatt`
- Deploy: `firebase deploy`
- Test from browser: switchback.tech
- Push changes up to `master`

---

# Development Guide

## Running the app locally

Navigate into your new site’s directory and start it up.

    ```shell
    cd website
    gatsby develop
    ```

1.  **Open the source code and start editing!**

    Your site is now running at `http://localhost:8000`!

    _Note: You'll also see a second link: _`http://localhost:8000/___graphql`_. This is a tool you can use to experiment with querying your data. Learn more about using this tool in the [Gatsby tutorial](https://www.gatsbyjs.org/tutorial/part-five/#introducing-graphiql)._

Update file and watch the browser update in real time!

2. See `index.html` in `/docs` for further info

### Running example app

See http://localhost:7999

If it's not running, start by running this command from project root: `bash /scripts/fatima.sh`

## Deployment

See [Gatsby's Guide to Deploying to Firebase](https://www.gatsbyjs.org/docs/deploying-to-firebase)

https://website-888.web.app/about

### Unit Testing

Run tests: `npm test`

## Config info

5.  **`gatsby-browser.js`**: This file is where Gatsby expects to find any usage of the [Gatsby browser APIs](https://www.gatsbyjs.org/docs/browser-apis/) (if any). These allow customization/extension of default Gatsby settings affecting the browser.

6.  **`gatsby-config.js`**: This is the main configuration file for a Gatsby site. This is where you can specify information about your site (metadata) like the site title and description, which Gatsby plugins you’d like to include, etc. (Check out the [config docs](https://www.gatsbyjs.org/docs/gatsby-config/) for more detail).

7.  **`gatsby-node.js`**: This file is where Gatsby expects to find any usage of the [Gatsby Node APIs](https://www.gatsbyjs.org/docs/node-apis/) (if any). These allow customization/extension of default Gatsby settings affecting pieces of the site build process.

8.  **`gatsby-ssr.js`**: This file is where Gatsby expects to find any usage of the [Gatsby server-side rendering APIs](https://www.gatsbyjs.org/docs/ssr-apis/) (if any). These allow customization of default Gatsby settings affecting server-side rendering.

# Resources

Original template: [Fatima, Themeforest](https://themeforest.net/item/fatima-creative-react-gatsby-blog-template/26418684)
See `/template` for compressed version of original source
