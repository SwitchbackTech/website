import React from 'react'
import {graphql} from 'gatsby'
import {Container, Row, Col} from 'reactstrap'
import SEO from "../../components/seo"
import Layout from "../../containers/layout/layout"
import Header from '../../containers/layout/header'
import Footer from '../../containers/layout/footer'
import Heading from '../../components/shared/heading'
import Text from '../../components/shared/text'
import Blog from '../../components/blog/layout-two'
import SearchWidget from '../../containers/widgets/search'
import RecentPostWidget from '../../containers/widgets/recent-post'
import InstagramWidget from '../../containers/widgets/instagram'
import CategoryWidget from '../../containers/widgets/categories'
// import CTAWidget from '../../containers/widgets/cta'
import SubscribeWidget from '../../containers/widgets/subscribe'
import InstagramArea from '../../containers/global/instagram'
import {SectionWrap, PageHeader, BlogListWrap, SidebarWrap} from './date-template.stc'

const DateTemplate = ({ data, pageContext, location, ...restProps }) => {
    const blogs = data.allMarkdownRemark.edges;
    const {totalCount} = data.allMarkdownRemark;
    const {date} = pageContext;
    const {categoryText, categoryHeading, blogStyle} = restProps
    return (
        <Layout>
            <SEO title={`Date: ${date}`}/>
            <Header/> 
            <div className="main-content">
                <SectionWrap>
                    <Container>
                        <Row>
                            <Col xl={8}>
                                <PageHeader>
                                    <Text {...categoryText}>{date}</Text>
                                    <Heading {...categoryHeading}>A collection of {totalCount} post</Heading>
                                </PageHeader>
                                <BlogListWrap>
                                    {blogs.map(blog => (
                                        <Blog
                                            {...blogStyle}
                                            key={blog.node.fields.slug}
                                            content={{
                                                ...blog.node.fields, 
                                                ...blog.node.frontmatter,
                                                excerpt: blog.node.excerpt
                                            }}
                                        />
                                    ))}
                                </BlogListWrap>
                            </Col>
                            <Col xl={4}>
                                <SidebarWrap>
                                    <SearchWidget/>
                                    <RecentPostWidget/>
                                    <InstagramWidget/>
                                    <CategoryWidget/>
                                    {/* <CTAWidget/> */}
                                    <SubscribeWidget/>
                                </SidebarWrap>
                            </Col>
                        </Row>
                    </Container>
                </SectionWrap>
                <InstagramArea/>
            </div>
            <Footer/>
        </Layout>
    )
}

export const query = graphql `
    query BlogByDateQuery($dateSlug: Date!){
        allMarkdownRemark(
            sort: {fields: frontmatter___date, order: DESC}, 
            filter: {fields: {dateSlug: {eq: $dateSlug}}}
        ) {
            totalCount
            edges {
                node {
                    fields {
                        slug
                        dateSlug
                        postID
                    }
                    frontmatter {
                        category
                        tags
                        date(formatString: "LL")
                        format
                        title
                        video_link
                        quote_text
                        quote_author
                        link
                        image {
                            childImageSharp {
                                fluid(maxWidth: 510, maxHeight: 350, quality: 100, srcSetBreakpoints: 6) {
                                    ...GatsbyImageSharpFluid_withWebp
                                    presentationWidth
                                    presentationHeight
                                }
                            }
                        }
                        images {
                            childImageSharp {
                                fluid(maxWidth: 510, maxHeight: 350, quality: 100, srcSetBreakpoints: 6) {
                                    ...GatsbyImageSharpFluid_withWebp
                                    presentationWidth
                                    presentationHeight
                                }
                            }
                        }
                    }
                    excerpt(pruneLength: 165, format: PLAIN, truncate: true)
                }
            }
        }
    }
`;

DateTemplate.defaultProps = {
    categoryText: {
        textTransform: 'capitalize',
        mb: '11px'
    },
    categoryHeading: {
        as: 'h4',
        color: 'secondaryColor'
    },
    blogStyle: {
        mb: '30px'
    }
}

export default DateTemplate
 