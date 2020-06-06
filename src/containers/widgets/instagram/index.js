import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Image from '../../../components/image'
import WidgetBox, { WidgetTitle } from '../../../components/shared/widget-box'
import { InstagramWrap, InstagramItem } from './instagram.stc'


const Instagram = ({ widgetStyle }) => {
  const instagramData = useStaticQuery(graphql`
      query instagramWidgetQuery {
        allInstaNode(limit: 6) {
          edges {
            node {
              preview
              localFile {
                childImageSharp {
                  fluid(maxWidth: 300, maxHeight: 300, quality: 100, srcSetBreakpoints: 6) {
                    ...GatsbyImageSharpFluid_withWebp
                    presentationWidth
                    presentationHeight
                  }
                }
              }
            }
          }
        }
      }
    `)
  const photos = instagramData.allInstaNode.edges;
  return (
    <WidgetBox {...widgetStyle}>
      <WidgetTitle>Instagram</WidgetTitle>
      <InstagramWrap>
        {photos && photos.map((photo, i) => (
          <InstagramItem key={`instagram-${i}`}>
            {photo && photo.node && photo.node.localFile && photo.node.localFile.childImageSharp && (
              <Image fluid={photo.node.localFile.childImageSharp.fluid} alt="Instagram" />
            )}
            {photo.node.preview && <a href={photo.node.preview} target="_blank" rel="noopener noreferrer">Preview Link</a>}
          </InstagramItem>
        ))}
      </InstagramWrap>
    </WidgetBox>
  )
}

Instagram.defaultProps = {
  widgetStyle: {
    skin: 'primary'
  }
}

export default Instagram
