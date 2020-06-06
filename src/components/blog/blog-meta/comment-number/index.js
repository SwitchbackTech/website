import React from 'react'
import {useStaticQuery, graphql} from 'gatsby'
import { CommentCount } from 'disqus-react';

export const CommentNumber = ({slug, title, id}) => {
    const siteData = useStaticQuery(graphql `
        query CommentNumberSiteQuery {
            site {
                siteMetadata {
                    siteUrl
                    disqus_shortname
                }
            }
        }
    `);
    const {disqus_shortname, siteUrl} = siteData.site.siteMetadata;
    const disqusShortname = disqus_shortname;
    const disqusConfig = {
        url: `${siteUrl}/${slug}`,
        identifier: id,
        title: title,
    };
    return (
        <CommentCount className="comment-count" shortname={disqusShortname} config={disqusConfig}>
            Comments
        </CommentCount>
    )
}
