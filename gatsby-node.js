const path = require(`path`);
const { inferSlug, cleanText, prefix } = require("./src/utils/utilFunctions");
const _ = require("lodash");

const cleanSlug = function(slug) {
    if (slug.startsWith('/')) {
        return slug.substr(1);  // remove prefixed '/'
    }
    else {
        return slug;
    }
};


exports.onCreateNode = ({ node, actions }) => {
  const { createNodeField } = actions;
  if (node.internal.type === "MarkdownRemark") {
    const slug = inferSlug(node.frontmatter.custom_slug);
    const date = node.frontmatter.date;
    const dateSplit = date.split(" ");
    createNodeField({
      node,
      name: "slug",
      value: slug,
    });
    createNodeField({
      node,
      name: "postID",
      value: slug + "-" + dateSplit[0],
    });
    createNodeField({
      node,
      name: "dateSlug",
      value: dateSplit[0],
    });
    if (Object.prototype.hasOwnProperty.call(node.frontmatter, "author")) {
      createNodeField({
        node,
        name: "authorId",
        value: cleanText(node.frontmatter.author),
      });
    }
  }
  if (node.internal.type === "AuthorsJson") {
    createNodeField({
      node,
      name: "authorId",
      value: cleanText(node.name),
    });
  }
};

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;

  const singleBlogPage = path.resolve(
    "./src/templates/single-blog/single-blog.js"
  );
  const blogList = path.resolve("./src/templates/blog-list/blog-list.js");
  const tagPage = path.resolve("./src/templates/tag-template/tag-template.js");
  const categoryPage = path.resolve(
    "./src/templates/category-template/category-template.js"
  );
  const authorPage = path.resolve(
    "./src/templates/author-template/author-template.js"
  );
  const datePage = path.resolve(
    "./src/templates/date-template/date-template.js"
  );
  const searchPage = path.resolve(
    "./src/templates/search-template/search-template.js"
  );

  const result = await graphql(`
    {
      allMarkdownRemark {
        edges {
          node {
            fields {
              slug
              authorId
              dateSlug
            }
            frontmatter {
              tags
              category
              date(formatString: "LL")
            }
          }
        }
      }
    }
  `);

  // Create Single Blog Page

  const posts = result.data.allMarkdownRemark.edges;
  posts.forEach(({ node }) => {
    createPage({
      path: inferSlug(node.fields.slug),
      component: singleBlogPage,
      context: {
        slug: node.fields.slug,
      },
    });
  });

  const postsPerPage = 4;
  const numberOfPages = Math.ceil(posts.length / postsPerPage);

  Array.from({ length: numberOfPages }).forEach((_, index) => {
    const isFirstPage = index === 0;
    const currentPage = index + 1;
    if (isFirstPage) return;
    createPage({
      path: `${prefix}/page/${currentPage}`,
      component: blogList,
      context: {
        limit: postsPerPage,
        skip: index * postsPerPage,
        currentPage,
        numberOfPages,
      },
    });
  });

  // Tags Page
  let tags = [];
  _.each(posts, (edge) => {
    if (_.get(edge, "node.frontmatter.tags")) {
      tags = tags.concat(edge.node.frontmatter.tags);
    }
  });

  tags = _.uniq(tags);
  tags.forEach((tag) => {
    createPage({
      path: `${prefix}/tag/${cleanText(tag)}`,
      component: tagPage,
      context: {
        tag,
      },
    });
  });

  // Categories Page
  let categories = [];
  _.each(posts, (edge) => {
    if (_.get(edge, "node.frontmatter.category")) {
      categories = categories.concat(edge.node.frontmatter.category);
    }
  });

  categories = _.uniq(categories);
  categories.forEach((category) => {
    createPage({
      path: `${prefix}/category/${cleanText(category)}`,
      component: categoryPage,
      context: {
        category,
      },
    });
  });

  // Authors Page
  let authors = [];
  _.each(posts, (edge) => {
    if (_.get(edge, "node.fields.authorId")) {
      authors = authors.concat(edge.node.fields.authorId);
    }
  });

  authors = _.uniq(authors);
  authors.forEach((author) => {
    createPage({
      path: `${prefix}/author/${author.Id}`,
      component: authorPage,
      context: {
        author,
      },
    });
  });

  // Date Page
  let dates = [];
  let dateSlugs = [];
  _.each(posts, (edge) => {
    if (_.get(edge, "node.frontmatter.date")) {
      dates = dates.concat(edge.node.frontmatter.date);
      dateSlugs = dateSlugs.concat(edge.node.fields.dateSlug);
    }
  });

  dates = _.uniq(dates);
  dateSlugs = _.uniq(dateSlugs);
  dateSlugs.forEach((dateSlug, i) => {
    createPage({
      path: `${prefix}/date/${dateSlug}`,
      component: datePage,
      context: {
        date: dates[i],
        dateSlug,
      },
    });
  });

  // Search Page
  createPage({
    path: `${prefix}/search`,
    component: searchPage,
  });
};
