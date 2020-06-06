import React from 'react'
import {Container, Row, Col} from 'reactstrap'
import {useStaticQuery, graphql} from 'gatsby'
import Heading from '../../../components/shared/heading'
import {ContactTitleWrap} from './title-area.stc'

const TitleArea = ({titleCSS, taglineCSS}) => {
    const ContactTitleData = useStaticQuery(graphql `
        query ContactTitleQuery {
            contactJson(id: {eq: "contact-page-header"}) {
                title
                tagline
            }
        }
    `);
    const {title, tagline} = ContactTitleData.contactJson
    return (
        <ContactTitleWrap>
            <Container>
                <Row>
                    <Col lg={{size: 10, offset: 1}} xl={{size: 7, offset: 2}}>
                        {title && <Heading {...titleCSS}>{title}</Heading>}
                        {tagline && <Heading {...taglineCSS}>{tagline}</Heading>}
                    </Col>
                </Row>
            </Container>
        </ContactTitleWrap>
    )
}

TitleArea.defaultProps = {
    titleCSS: {
        as: "h5",
        fontSize: [1],
        textTransform: "capitalize",
        mb: "17px"
    },
    taglineCSS: {
        color: "secondaryColor",
        fontSize: [4, 5],
        fontWeight: "bold",
        lineHeight: [1.4, 1.375]
    }
}

export default TitleArea
