import React from 'react'
import { Container, Row, Col } from 'reactstrap';
import { useStaticQuery, graphql } from 'gatsby'
import FeaturePosts from '../../widgets/feature-posts'
import {HeroWrapper, HeroBG} from './hero-area.stc'

const HeroArea = () => {
    const heroData = useStaticQuery(graphql `
        query HomeHeroQuery {
            homeJson(id: {eq: "home-hero-content"}){
                title
                desc
                image {
                    childImageSharp {
                        fluid(maxWidth: 1920, maxHeight: 750, quality: 100) {
                            ...GatsbyImageSharpFluid_withWebp
                        }
                    }
                }
            }
        }      
    `) 
    const {image} = heroData.homeJson;
    return (
        <HeroWrapper>
            <HeroBG fluid={image.childImageSharp.fluid}/>
            <Container>
                <Row>
                    <Col md={8} lg={6} xl={4} className="ml-auto">
                        <FeaturePosts/>
                    </Col>
                </Row>
            </Container>
        </HeroWrapper>
    )
}

export default HeroArea
