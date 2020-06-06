import { useStaticQuery, graphql } from 'gatsby'

export default () => {
    const blogData = useStaticQuery(graphql `
        query RecentPostQuery {
            allMarkdownRemark(sort: {order: DESC, fields: frontmatter___date}) {
                edges {
                    node {
                        fields {
                            slug
                            authorId
                        }
                        frontmatter {
                            author {
                                name
                            }
                            format
                            title
                            category
                            video_link
                            quote_text
                            quote_author
                            link
                            image {
                                childImageSharp {
                                    fluid(maxWidth: 510, maxHeight: 400, quality: 100, srcSetBreakpoints: 6) {
                                        ...GatsbyImageSharpFluid_withWebp
                                        presentationWidth
                                        presentationHeight
                                    }
                                }
                            }
                            images {
                                childImageSharp {
                                    fluid(maxWidth: 510, maxHeight: 400, quality: 100, srcSetBreakpoints: 6) {
                                        ...GatsbyImageSharpFluid_withWebp
                                        presentationWidth
                                        presentationHeight
                                    }
                                }
                            }
                        }
                        excerpt(format: PLAIN, pruneLength: 85)
                    }
                }
            }
        }      
    `);
    const blogs = blogData.allMarkdownRemark.edges;
    return blogs;
}