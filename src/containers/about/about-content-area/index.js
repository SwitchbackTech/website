import React from 'react'
import {Container, Row, Col} from 'reactstrap'
import {useStaticQuery, graphql} from 'gatsby'
import Heading from '../../../components/shared/heading'
import Text from '../../../components/shared/text'
import {AboutContentWrap, AboutContentTop, AboutList, AboutContentBottom} from './about-content-area.stc'

const AboutContentArea = (props) => {
    const aboutData = useStaticQuery(graphql `
        query AboutContentQuery {
            aboutJson(id: {eq: "about-page-content"}) {
                top_content {
                    heading
                    content {
                        text1
                        text2
                    }
                }
                list_left {
                    heading
                    items
                }
                list_right {
                    heading
                    items
                }
                bottom_content {
                    heading
                    content {
                        text1
                    }
                }
            }
        }
    `)
    const {top_content, list_left, list_right, bottom_content} = aboutData.aboutJson
    const {topHeadingCSS, textCSS, listHeadingCSS, bottomHeadingCSS} = props;
    return (
        <AboutContentWrap>
            <Container>
                <Row className="justify-content-center">
                    <Col lg={10} xl={8}>
                        {top_content && (
                            <AboutContentTop>
                                {top_content.heading && <Heading {...topHeadingCSS}>{top_content.heading}</Heading>}
                                {top_content.content.text1 && <Text {...textCSS}>{top_content.content.text1}</Text>}
                                {top_content.content.text2 && <Text {...textCSS}>{top_content.content.text2}</Text>}
                            </AboutContentTop>
                        )}
                        <Row>
                            {list_left && (
                                <Col lg={6}>
                                    {list_left.heading && <Heading {...listHeadingCSS}>{list_left.heading}</Heading>}
                                    {list_left.items && (
                                        <AboutList>
                                            {list_left.items.map((item, i) => <li key={`left-list-${i}`}>{item}</li>)}
                                        </AboutList>
                                    )}
                                </Col>
                            )}
                            {list_right && (
                                <Col lg={6}>
                                    {list_right.heading && <Heading {...listHeadingCSS}>{list_right.heading}</Heading>}
                                    {list_right.items && (
                                        <AboutList>
                                            {list_right.items.map((item, i) => <li key={`left-right-${i}`}>{item}</li>)}
                                        </AboutList>
                                    )}
                                </Col>
                            )}
                        </Row>
                        {bottom_content && (
                            <AboutContentBottom>
                                {bottom_content.heading && <Heading {...bottomHeadingCSS}>{bottom_content.heading}</Heading>}
                                {bottom_content.content.text1 && <Text>{bottom_content.content.text1}</Text>}
                            </AboutContentBottom>
                        )}
                    </Col>
                </Row>
            </Container>
        </AboutContentWrap>
    )
}

AboutContentArea.defaultProps = {
    topHeadingCSS: {
        as: 'h4',
        color: 'secondaryColor',
        lineHeight: 1.375,
        mb: '17px'
    },
    textCSS: {
        mb: '26px'
    },
    listHeadingCSS: {
        as: 'h5',
        mb: '14px'
    },
    bottomHeadingCSS: {
        as: 'h5',
        mb: '24px'
    }
}

export default AboutContentArea


  