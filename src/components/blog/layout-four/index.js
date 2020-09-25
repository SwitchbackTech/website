import React, { Fragment, useState } from "react";
import PropTypes from "prop-types";
import { Link } from "gatsby";
import { FiChevronRight } from "react-icons/fi";
import Button from "../../shared/button";
import {
  cleanText,
  inferSlug,
  truncateString,
} from "../../../utils/utilFunctions";
import BlogMeta, { Category, CommentNumber } from "../../blog/blog-meta";
import ModalVideo from "../../shared/modal-video";
import { Thumbnail, Video, Quote, Linked, Gallery } from "../blog-media";
import {
  BlogWrapper,
  BlogInner,
  BlogMedia,
  BlogContent,
  BlogHeader,
  BlogCategory,
  BlogTitle,
  BlogMetaWrap,
  BlogExcerpt,
  BlogFooter,
  BlogBtn,
} from "./blog.stc";

const Blog = ({ content, ...restProps }) => {
  const {
    slug,
    dateSlug,
    category,
    date,
    format,
    title,
    image,
    excerpt,
    postID,
    video_link,
    quote_text,
    quote_author,
    link,
    images,
    authorId,
    author,
  } = content;
  const { btnStyle, categoryStyle, ...restStyles } = restProps;
  let video_arr, video_id, video_channel;
  if (video_link) {
    video_arr = video_link.split("=", -1);
    video_id = video_arr[1];
    video_channel = video_link.split(".")[1];
  }
  const [videoOpen, setVideoOpen] = useState(false);
  const modalVideoOpen = () => {
    setVideoOpen(true);
  };
  const modalVideoClose = () => {
    setVideoOpen(false);
  };

  const articlePath = inferSlug(slug);
  const datePath = inferSlug(`date/${dateSlug}`);
  const categoryPath = inferSlug(`category/${category}`);
  const thumbnailPath = inferSlug(slug);

  return (
    <Fragment>
      <BlogWrapper {...restStyles}>
        <BlogInner>
          <BlogMedia>
            {format === "image" && (
              <Thumbnail path={thumbnailPath} image={image} title={title} />
            )}
            {format === "video" && (
              <Video
                onClick={modalVideoOpen}
                poster={image.childImageSharp.fluid}
                title={title}
              />
            )}
            {format === "quote" && (
              <Quote layout={2} text={quote_text} author={quote_author} />
            )}
            {format === "link" && <Linked layout={2} link={link} />}
            {format === "gallery" && <Gallery images={images} />}
            {(format === "image" ||
              format === "video" ||
              format === "gallery") &&
              category && (
                <BlogCategory to={categoryPath}>{category}</BlogCategory>
              )}
          </BlogMedia>
          <BlogContent>
            <BlogHeader>
              {(format === "quote" || format === "link") && category && (
                <Category slug={categoryPath} text={category} />
              )}
              {title && (
                <BlogTitle>
                  <Link to={articlePath}>{truncateString(title, 30)}</Link>
                </BlogTitle>
              )}
            </BlogHeader>
            {excerpt && <BlogExcerpt>{excerpt}</BlogExcerpt>}
            <BlogFooter>
              <BlogMetaWrap>
                {date && (
                  <BlogMeta>
                    <Link to={datePath}>{date}</Link>
                  </BlogMeta>
                )}
                {author && (
                  <BlogMeta>
                    <Link to={inferSlug(`/author/${authorId}`)}>
                      {author.name}
                    </Link>
                  </BlogMeta>
                )}
              </BlogMetaWrap>
              <BlogBtn>
                <Button {...btnStyle} icon={<FiChevronRight />} to={slug}>
                  Read More
                </Button>
              </BlogBtn>
            </BlogFooter>
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
  );
};

Blog.propTypes = {
  btnStyle: PropTypes.object,
};

Blog.defaultProps = {
  btnStyle: {
    varient: "texted",
    color: "gray",
  },
  categoryStyle: {
    mb: "7px",
  },
};

export default Blog;
