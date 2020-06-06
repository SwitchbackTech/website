import React, {Fragment, useState} from 'react'
import PropTypes from 'prop-types'
import {Row, Col} from 'reactstrap'
import { FiLoader } from "react-icons/fi";
import useQuery from './query'
import Blog from '../../../components/blog/layout-four'
import Button from '../../../components/shared/button'
import {RecenPostWrap, LoadMoreBtnWrap} from './react-post-area.stc'
 
const RecentPostArea = (props) => {
    const allBlogs = useQuery();
    const initialBlogs = [...allBlogs].splice(0, 8);
    const [hasMore, setHasMore] = useState(true);
    const [currentShow, setCurrentShow] = useState(8)
    const [nextToShow, setNextToShow] = useState([])
    const [loading, setLoading] = useState(false);
    
    const blogWillShow = () => {
        setLoading(true)
        setTimeout(() => {
            const nextBlogs = [...allBlogs].splice(currentShow, 2);
            setCurrentShow(prev => prev + 2)
            setNextToShow([...nextToShow, ...nextBlogs])
            setLoading(false)
        }, 3000)
    }
    const loadMoreHandler = () => {
        blogWillShow()
        hasMoreToLoad()
    }

    const hasMoreToLoad = () => {
        const blogsToLoad = allBlogs.length - currentShow;
        setHasMore(blogsToLoad === 0 ? false : true)
    }
    const {blogStyle, loadMoreBtn} = props;
    return (
        <RecenPostWrap>
            <Row>
                <Fragment>
                    {initialBlogs.map(blog => (
                        <Col key={blog.node.fields.slug} md={6}>
                            <Blog
                                {...blogStyle}
                                content={{
                                    ...blog.node.fields, 
                                    ...blog.node.frontmatter,
                                    excerpt: blog.node.excerpt
                                }}
                            />
                        </Col>
                    ))}
                    {nextToShow.map(blog => (
                        <Col key={blog.node.fields.slug} md={6}>
                            <Blog
                                {...blogStyle}
                                content={{
                                    ...blog.node.fields, 
                                    ...blog.node.frontmatter
                                }}
                            />
                        </Col>
                    ))}
                </Fragment>
            </Row>
            <Row>
                <Col lg={12} className="text-center">
                    {hasMore && (
                        <LoadMoreBtnWrap isLoading={loading}>
                            <Button 
                                disabled={!hasMore} 
                                onClick={loadMoreHandler} 
                                {...loadMoreBtn} 
                                icon={<FiLoader/>}>Load More Article</Button>
                        </LoadMoreBtnWrap>
                    )}
                    {!hasMore && <p>There is no more posts to show.</p>}
                </Col>
            </Row>
        </RecenPostWrap>
    )
}

RecentPostArea.propTypes = {
    sectionTitleStyle: PropTypes.object,
    blogStyle: PropTypes.object
}

RecentPostArea.defaultProps = {
    sectionTitleStyle: {
        mb: '46px'
    },
    blogStyle: {
        mb: '50px'
    },
    loadMoreBtn: {
        btnsize: 'large',
        varient: 'contained',
        shape: 'rounded',
        fontSize: ['12px', null, null, '13px'],
        letterSpacing: [0, null, null, '1px'],
        iconcss: {
            pl: '8px',
            width: '14px',
            height: '12px'
        }
    }
}

export default RecentPostArea
