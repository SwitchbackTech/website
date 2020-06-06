import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import WidgetBox, { WidgetTitle } from '../../../components/shared/widget-box'
import Blog from '../../../components/blog/layout-three'
import { truncateString } from '../../../utils/utilFunctions'
import { FeaturePostWrap, FeaturePostItem } from './feature-posts.stc'

const FeaturePosts = ({ blogStyles, widgetStyle }) => {
    const featurePostData = useStaticQuery(graphql`
        query FeaturePostQuery {
            allMarkdownRemark(
                filter: {frontmatter: {is_featured: {eq: true}}}, 
                sort: {order: DESC, fields: frontmatter___date}) {
                edges {
                    node {
                        fields {
                            slug
                            dateSlug
                        }
                        frontmatter {
                            title
                            format
                            date(formatString: "LL")
                            image {
                                childImageSharp {
                                    fixed(width: 78, height: 78, quality: 100) {
                                        ...GatsbyImageSharpFixed_withWebp
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    `)
    const blogs = featurePostData.allMarkdownRemark.edges;
    return (
        <WidgetBox {...widgetStyle} id="feature-post">
            <WidgetTitle>Featured Posts</WidgetTitle>
            <FeaturePostWrap>
                {blogs.map(blog => (
                    <FeaturePostItem key={blog.node.fields.slug}>
                        <Blog
                            {...blogStyles}
                            content={{
                                ...blog.node.fields,
                                ...blog.node.frontmatter,
                                title: truncateString(blog.node.frontmatter.title, 30)
                            }}
                        />
                    </FeaturePostItem>
                ))}
            </FeaturePostWrap>
        </WidgetBox>
    )
}

FeaturePosts.defaultProps = {
    widgetStyle: {
        bg: 'appricot',
        color: '#fff',
        border: 'none'
    },
    blogStyles: {
        boxCSS: {
            layout: 2
        },
        titleCSS: {
            color: '#fff'
        },
        dateCSS: {
            color: '#fff'
        }
    }
}

export default FeaturePosts
