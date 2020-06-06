import React from 'react'
import { FiInstagram } from "react-icons/fi";
import { Container, Row, Col } from 'reactstrap'
import { useStaticQuery, graphql } from 'gatsby'
import Heading from '../../../components/shared/heading'
import Text from '../../../components/shared/text'
import Image from '../../../components/image'
import { SectionWrap, InstagramWrap, InstagramItem } from './instagram.stc'

const Instagram = ({ headingCSS, textCSS }) => {
  const instagramData = useStaticQuery(graphql`
      query instagramQuery {
        allInstaNode(limit: 5) {
          edges {
            node {
              preview
              localFile {
                childImageSharp {
                  fluid(maxWidth: 245, maxHeight: 245, quality: 100) {
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
  const photos = instagramData.allInstaNode.edges
  return (
    <SectionWrap>
      <Container>
        <Row>
          <Col lg={12}>
            <Heading {...headingCSS}><FiInstagram /> <Text {...textCSS}>Me On Instagram</Text></Heading>
          </Col>
        </Row>
        <Row>
          <Col lg={12}>
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
          </Col>
        </Row>
      </Container>
    </SectionWrap>
  )
}


Instagram.defaultProps = {
  headingCSS: {
    as: 'h5',
    textTransform: 'uppercase',
    textAlign: 'center',
    lineHeight: 1,
    mb: '40px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  textCSS: {
    as: 'span',
    pl: '4px'
  }
}

export default Instagram
