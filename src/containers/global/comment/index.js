import React from 'react'
import { DiscussionEmbed } from 'disqus-react';
import {useStaticQuery, graphql} from 'gatsby'
import {CommentWrap} from './commenct.stc'

const Comment = ({slug, title, id}) => {
    const siteData = useStaticQuery(graphql `
        query CommentSiteQuery {
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
        <CommentWrap>
            <DiscussionEmbed shortname={disqusShortname} config={disqusConfig} />
        </CommentWrap>
    )
}

export default Comment
