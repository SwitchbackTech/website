import React, { useState } from "react";
import { graphql, Link } from "gatsby";
import { Container, Row, Col } from "reactstrap";
import SEO from "../../components/seo";
import Layout from "../../containers/layout/layout";
import Header from "../../containers/layout/header";
import Footer from "../../containers/layout/footer";
import BlogMeta, {
  CommentNumber,
  Category,
  Tags,
} from "../../components/blog/blog-meta";
import {
  Thumbnail,
  Video,
  Quote,
  Linked,
  Gallery,
} from "../../components/blog/blog-media";
import ModalVideo from "../../components/shared/modal-video";
import { inferSlug } from "../../utils/utilFunctions";
import SearchWidget from "../../containers/widgets/search";
import RecentPostWidget from "../../containers/widgets/recent-post";
import InstagramWidget from "../../containers/widgets/instagram";
import CategoryWidget from "../../containers/widgets/categories";
import AuthorWidget from "../../containers/widgets/author";
import SubscribeWidget from "../../containers/widgets/subscribe";
import RelatedPosts from "../../containers/global/related-posts";
import SocialShare from "../../components/socials/social-share";
import {
  SinglePostArea,
  SinglePostWrap,
  PostMedia,
  PostHeader,
  PostTitle,
  PostMeta,
  PostFooter,
  PostShare,
  PostTags,
  SidebarWrap,
} from "./single-blog.stc";

const SingleBlog = ({ data, pageContext, location, ...restProps }) => {
  const { dateSlug, postID, authorId } = data.markdownRemark.fields;
  const {
    category,
    date,
    format,
    title,
    image,
    video_link,
    quote_text,
    quote_author,
    link,
    images,
    author,
    tags,
    custom_slug,
  } = data.markdownRemark.frontmatter;

  const authorPath = inferSlug("author/" + authorId);
  const categoryPath = inferSlug("category/" + category);
  const datePath = inferSlug("date/" + dateSlug);
  const articlePath = inferSlug(custom_slug);

  const { html } = data.markdownRemark;
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

  return (
    <Layout>
      <SEO title={title} />
      <Header />
      <div className="main-content">
        <SinglePostArea {...restProps}>
          <Container>
            <Row>
              <Col lg={8}>
                <SinglePostWrap>
                  <PostMedia>
                    {(format === "image" || format === "standard") && (
                      <Thumbnail
                        path={articlePath}
                        image={image}
                        title={title}
                      />
                    )}
                    {format === "video" && (
                      <Video
                        onClick={modalVideoOpen}
                        poster={image.childImageSharp.fluid}
                        title={title}
                      />
                    )}
                    {format === "quote" && (
                      <Quote text={quote_text} author={quote_author} />
                    )}
                    {format === "link" && <Linked link={link} />}
                    {format === "gallery" && <Gallery images={images} />}
                  </PostMedia>
                  <PostHeader>
                    {category && (
                      <Category slug={categoryPath} text={category} />
                    )}
                    {title && <PostTitle>{title}</PostTitle>}
                    <PostMeta>
                      {date && (
                        <BlogMeta>
                          <Link to={datePath}>{date}</Link>
                        </BlogMeta>
                      )}
                      {author && (
                        <BlogMeta>
                          <Link to={authorPath}>{author.name}</Link>
                        </BlogMeta>
                      )}
                    </PostMeta>
                  </PostHeader>
                  <div
                    className="post-content"
                    dangerouslySetInnerHTML={{ __html: html }}
                  />
                  <PostFooter>
                    <PostShare>
                      <h4>Share This:</h4>
                      <SocialShare title={title} slug={articlePath} />
                    </PostShare>
                    <PostTags>
                      <Tags tags={tags} />
                    </PostTags>
                  </PostFooter>
                </SinglePostWrap>
                <RelatedPosts
                  category={category}
                  tags={tags}
                  currentArticleSlug={articlePath}
                />
              </Col>
              <Col lg={4}>
                <SidebarWrap>
                  <AuthorWidget content={author} />
                  <SearchWidget />
                  <RecentPostWidget />
                  <InstagramWidget />
                  <CategoryWidget />
                  <SubscribeWidget />
                </SidebarWrap>
              </Col>
            </Row>
          </Container>
        </SinglePostArea>
      </div>
      <Footer />
      <ModalVideo
        channel={video_channel}
        videoId={video_id}
        isOpen={videoOpen}
        onClose={modalVideoClose}
      />
    </Layout>
  );
};

export const postQuery = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      fields {
        dateSlug
        authorId
        slug
        postID
      }
      frontmatter {
        title
        category
        tags
        date(formatString: "LL")
        format
        video_link
        quote_text
        quote_author
        link
        custom_slug
        image {
          childImageSharp {
            fluid(
              maxWidth: 839
              maxHeight: 455
              quality: 100
              srcSetBreakpoints: 6
            ) {
              ...GatsbyImageSharpFluid_withWebp
              presentationWidth
              presentationHeight
            }
          }
        }
        images {
          childImageSharp {
            fluid(
              maxWidth: 839
              maxHeight: 455
              quality: 100
              srcSetBreakpoints: 6
            ) {
              ...GatsbyImageSharpFluid_withWebp
              presentationWidth
              presentationHeight
            }
          }
        }
        author {
          name
          tagline
          image {
            childImageSharp {
              fixed(width: 180, height: 180, quality: 100) {
                ...GatsbyImageSharpFixed_withWebp
              }
            }
          }
          social {
            linkedin
            github
          }
        }
      }
      html
    }
  }
`;

export default SingleBlog;
