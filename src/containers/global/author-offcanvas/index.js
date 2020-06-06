import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'
import OffCanvas, { OffCanvasHeader, OffCanvasBody } from '../../../components/shared/off-canvas'
import Logo from '../../../components/logo'
import Heading from '../../../components/shared/heading'
import Text from '../../../components/shared/text'
import Social from '../../../components/socials/layout-two'
import { AuthorImg, SocialWrap } from './author-offcanvas.stc'

const AuthorOffcanvas = ({ isOpen, onClick, ...restProps }) => {
    const authorData = useStaticQuery(graphql`
        query AuthorOffcanvasQuery {
            allAuthorsJson {
                edges {
                    node {
                        name
                        bio
                        tagline
                        social {
                            facebook
                            instagram
                            linkedin
                            twitter
                            youtube
                        }
                        image {
                            childImageSharp {
                                fixed(width: 200, height: 200, quality: 100) {
                                    ...GatsbyImageSharpFixed_withWebp
                                }
                            }
                        }
                    }
                }
            }
        }
    `)

    const { name, bio, tagline, social, image } = authorData.allAuthorsJson.edges[0].node
    const { offCanvasCSS, bioCSS, offCanvasBodyCSS } = restProps
    return (
        <OffCanvas isOpen={isOpen} onClick={onClick} {...offCanvasCSS}>
            <OffCanvasHeader onClick={onClick}>
                <Logo />
            </OffCanvasHeader>
            <OffCanvasBody {...offCanvasBodyCSS}>
                {image && (
                    <AuthorImg>
                        <Img fixed={image.childImageSharp.fixed} alt={name} />
                    </AuthorImg>
                )}
                {name && <Heading as="h3">{name}</Heading>}
                {tagline && <Heading as="h5">{tagline}</Heading>}
                {bio && <Text {...bioCSS}>{bio}</Text>}
                {social && (
                    <SocialWrap>
                        <Social layout={2} social={social} />
                    </SocialWrap>
                )}
            </OffCanvasBody>
        </OffCanvas>
    )
}

AuthorOffcanvas.defaultProps = {
    offCanvasCSS: {
        align: 'left'
    },
    offCanvasBodyCSS: {
        height: '100%',
        display: 'flex',
        flexDirection: 'column'
    },
    bioCSS: {
        mb: '15px',
        mt: '15px'
    }
}

export default AuthorOffcanvas
