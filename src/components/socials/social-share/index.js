import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import { FiLinkedin, FiTwitter, FiFacebook } from "react-icons/fi";
import Social, { SocialLink } from "../../shared/social";

const SocialShare = ({ title, slug, ...restProps }) => {
  const socialData = useStaticQuery(graphql`
    query SiteUrlQuery {
      site {
        siteMetadata {
          siteUrl
        }
      }
    }
  `);
  const { siteUrl } = socialData.site.siteMetadata;

  return (
    <Social {...restProps}>
      <SocialLink
        path={`http://www.linkedin.com/shareArticle?mini=true&url=${siteUrl}${slug}&title=${title}&source=${siteUrl}`}
      >
        <FiLinkedin />
      </SocialLink>
      <SocialLink
        path={`https://twitter.com/share?url=${siteUrl}${slug}&amp;text=${title}&amp;hashtags=fatima`}
      >
        <FiTwitter />
      </SocialLink>
      <SocialLink
        path={`http://www.facebook.com/sharer.php?u=${siteUrl}${slug}`}
      >
        <FiFacebook />
      </SocialLink>
    </Social>
  );
};

SocialShare.defaultProps = {
  mr: "15px",
  width: "34px",
  height: "34px",
  lineHeight: "26px",
  borderWidth: "2px",
  layout: 2,
  color: "shark",
  borderColor: "shark",
};

export default SocialShare;
