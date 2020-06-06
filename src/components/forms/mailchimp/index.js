import React, {Fragment} from 'react'
import SubscribeFrom from "react-mailchimp-subscribe";
import {useStaticQuery, graphql} from 'gatsby'
import MailchimpForm from './form'

const Mailchimp = () => {
    const mailchimpData = useStaticQuery(graphql `
        query MailchimpQuery {
            site {
                siteMetadata {
                    mailchimp_endpoint
                }
            }
        }      
    `)
    const url = mailchimpData.site.siteMetadata.mailchimp_endpoint;
    return (
        <Fragment>
            <SubscribeFrom
                url={url}
                render={({ subscribe, status, message }) => (
                    <MailchimpForm
                        status={status}
                        message={message}
                        onValidated={formData => subscribe(formData)}
                    />
            )}/>
        </Fragment>
    )
}

export default Mailchimp
