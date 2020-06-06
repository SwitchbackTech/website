import React from 'react'
import { Container, Row, Col } from 'reactstrap'
import { useStaticQuery, graphql } from "gatsby"
import LogoImg from '../../../assets/img/logo.png'
import List, { ListItem } from '../../../components/shared/list'
import Text from '../../../components/shared/text'
import Anchor from '../../../components/shared/anchor'
import Social from '../../../components/socials/layout-one'
import {
    FooterWrap,
    FooterTop,
    FooterBottom,
    FooterWidget,
    AddressWidget
} from './footer.stc'

const Footer = (props) => {
    const FooterData = useStaticQuery(graphql`
        query FooterDataQuery {
            site {
                siteMetadata {
                    contact {
                        social {
                            facebook
                            instagram
                            linkedin
                            twitter
                            youtube
                        }
                    }
                }
            }
        }      
    `)
    const { social } = FooterData.site.siteMetadata.contact;
    const {
        footerMenuOne,
        address: { addressAnchor, addressText },
        socialStyle,
        footerMenuTwo,
        copyright,
        widgetStyle: { logoWidget, menuOneWidget, socialWidget, menuTwoWidget } } = props
    return (
        <FooterWrap>
            <Container>
                <FooterTop>
                    <Row>
                        <Col md={2} lg={2}>
                            <FooterWidget {...logoWidget}>
                                <img src={LogoImg} alt="Footer Logo" />
                            </FooterWidget>
                        </Col>
                        <Col md={{ size: 3, offset: 2 }} lg={{ size: 2, offset: 3 }}>
                            <FooterWidget {...menuOneWidget}>
                                <List {...footerMenuOne}>
                                    <ListItem><Anchor path="/">ARCHIVE NOVEMBER</Anchor></ListItem>
                                    <ListItem><Anchor path="/">TRENDING STORIES</Anchor></ListItem>
                                    <ListItem><Anchor path="/">FEATURES POST</Anchor></ListItem>
                                    <ListItem><Anchor path="/">POPULARS NEWS</Anchor></ListItem>
                                </List>
                            </FooterWidget>
                        </Col>
                        <Col md={{ size: 4, offset: 1 }} lg={{ size: 3, offset: 1 }}>
                            <FooterWidget>
                                <AddressWidget>
                                    <Anchor {...addressAnchor} path="tel:+8801923088574">+88 000 345589</Anchor>
                                    <Anchor {...addressAnchor} path="mailto:info@example.com">INFO@EXAMPLE.COM</Anchor>
                                    <Text {...addressText}>221B , Baker Street, Marylebone <br /> London NW1 6XE, United Kingdom. </Text>
                                </AddressWidget>
                            </FooterWidget>
                        </Col>
                    </Row>
                </FooterTop>
                <FooterBottom>
                    <Row className="align-items-end">
                        <Col md={3} xl={3}>
                            <FooterWidget {...socialWidget}>
                                <Social social={social} {...socialStyle} />
                            </FooterWidget>
                        </Col>
                        <Col md={{ size: 3, offset: 1 }} lg={{ size: 2, offset: 2 }} xl={{ size: 2, offset: 2 }}>
                            <FooterWidget {...menuTwoWidget}>
                                <List {...footerMenuTwo}>
                                    <ListItem><Anchor path="/">About Me</Anchor></ListItem>
                                    <ListItem><Anchor path="/">Contact With Me</Anchor></ListItem>
                                    <ListItem><Anchor path="/">Faq</Anchor></ListItem>
                                </List>
                            </FooterWidget>
                        </Col>
                        <Col md={{ size: 4, offset: 1 }} lg={{ size: 4, offset: 1 }}>
                            <FooterWidget>
                                <Text {...copyright}>Copyright © 2020, FATIMA</Text>
                            </FooterWidget>
                        </Col>
                    </Row>
                </FooterBottom>
            </Container>
        </FooterWrap>
    )
}

Footer.defaultProps = {
    footerMenuOne: {
        color: '#000000',
        pb: '14px',
        textTransform: 'uppercase',
        fontWeight: 500
    },
    widgetStyle: {
        logoWidget: {
            mb: ['33px', null, null, 0]
        },
        menuOneWidget: {
            mb: ['29px', null, null, 0]
        },
        socialWidget: {
            mb: ['34px', null, null, 0]
        },
        menuTwoWidget: {
            mb: ['35px', null, null, 0]
        }
    },
    address: {
        addressAnchor: {
            textTransform: 'uppercase',
            display: 'block',
            color: '#000000',
            fontWeight: 500,
            mb: '13px'
        },
        addressText: {
            fontWeight: 400,
            lineHeight: 2,
            mt: ['20px', null, null, null, '40px'],
            color: '#000000',
        }
    },
    socialStyle: {
        pr: ['15px', null, null, '12px', '15px', '20px'],
        icon: {
            width: '18px',
            height: '18px'
        }
    },
    footerMenuTwo: {
        color: '#000000',
        pb: '14px',
        fontWeight: 400
    },
    copyright: {
        borderTopWidth: '1px',
        borderTopStyle: 'solid',
        borderTopColor: 'borderColor',
        pt: '25px'
    }
}

export default Footer
