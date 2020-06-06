import React, {Fragment, useState} from 'react'
import PropTypes from 'prop-types'
import Anchor from '../../shared/anchor'
import ModalVideo from '../../shared/modal-video'
import {Thumbnail, Video, Quote, Linked, Gallery} from '../blog-media'
import {
    BlogWrapper,
    BlogInner, 
    BlogMedia,
    BlogContent,
    BlogTitle,
    BlogMeta,
    BlogMetaItem
} from './blog.stc'

const Blog = ({content, ...restProps}) => {
    const {
        slug, dateSlug, date, format, title, image, 
        video_link, quote_text, quote_author,
        link, images
    } = content;
    let video_arr, video_id, video_channel;
    if(video_link){
        video_arr = video_link.split('=', -1);
        video_id = video_arr[1];
        video_channel = video_link.split(".")[1];
    }
    const [videoOpen, setVideoOpen] = useState(false);
    const modalVideoOpen = () => {
        setVideoOpen(true)
    }
    const modalVideoClose = () => {
        setVideoOpen(false)
    }

    return (
        <Fragment>
            <BlogWrapper {...restProps}>
                <BlogInner>
                    <BlogMedia>
                        {(format === 'image' || format === 'standard') && (
                            <Thumbnail path={`/${slug}`} image={image} title={title}/>
                        )}
                        {format === 'video' && (
                            <Video
                                onClick={modalVideoOpen}
                                poster={image.childImageSharp.fluid}
                                title={title}
                            />
                        )}
                        {format === 'quote' && <Quote layout={1} text={quote_text} author={quote_author}/>}
                        {format === 'link' && <Linked layout={1} link={link}/>}
                        {format === 'gallery' && <Gallery images={images}/>}
                    </BlogMedia>
                    <BlogContent>
                        {title && <BlogTitle><Anchor path={`/${slug}`}>{title}</Anchor></BlogTitle>}
                        <BlogMeta>
                            {date && <BlogMetaItem path={`/date/${dateSlug}`}>{date}</BlogMetaItem>}
                        </BlogMeta>
                    </BlogContent>
                </BlogInner>
            </BlogWrapper>
            <ModalVideo
                channel={video_channel}
                videoId={video_id}
                isOpen={videoOpen}
                onClose={modalVideoClose}
            />
        </Fragment>
    )
}

Blog.propTypes = {
    image: PropTypes.object,
    title: PropTypes.string,
    date: PropTypes.string
}

export default Blog
