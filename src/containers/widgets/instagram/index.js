import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import Image from "../../../components/image";
import WidgetBox, { WidgetTitle } from "../../../components/shared/widget-box";
import { InstagramWrap, InstagramItem } from "./instagram.stc";

const Instagram = ({ widgetStyle }) => {
  const instagramData = useStaticQuery(graphql`
    query instagramWidgetQuery {
      allInstaNode(sort: { order: DESC, fields: timestamp }, limit: 6) {
        edges {
          node {
            id
            localFile {
              childImageSharp {
                fluid(
                  maxWidth: 300
                  maxHeight: 300
                  quality: 100
                  srcSetBreakpoints: 6
                ) {
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
  `);
  const photos = instagramData.allInstaNode.edges;
  const nodeURL = "https://www.instagram.com/p";
  return (
    <WidgetBox {...widgetStyle}>
      <WidgetTitle>Instagram</WidgetTitle>
      <InstagramWrap>
        {photos &&
          photos.map((photo, i) => (
            <InstagramItem key={`instagram-${i}`}>
              {photo &&
                photo.node &&
                photo.node.localFile &&
                photo.node.localFile.childImageSharp && (
                  <Image
                    fluid={photo.node.localFile.childImageSharp.fluid}
                    alt="Instagram"
                  />
                )}
              {photo.node.id && (
                <a
                  href={`${nodeURL}/${photo.node.id}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Preview Link
                </a>
              )}
            </InstagramItem>
          ))}
      </InstagramWrap>
    </WidgetBox>
  );
};

Instagram.defaultProps = {
  widgetStyle: {
    skin: "primary",
  },
};

export default Instagram;
