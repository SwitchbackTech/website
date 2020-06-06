import React from 'react'
import {CommentNumber} from './comment-number'
import {Category} from './category'
import {Tags} from './tags'
import {MetaWrap} from './blog-meta.stc'

const BlogMeta = ({children, ...restProps}) => {
    return <MetaWrap {...restProps}>{children}</MetaWrap>
}

export {CommentNumber, Category, Tags}

export default BlogMeta
