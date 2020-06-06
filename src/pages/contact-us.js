import React from "react"
import SEO from '../components/seo'
import Layout from "../containers/layout/layout"
import Header from '../containers/layout/header'
import Footer from '../containers/layout/footer'
import TitleArea from '../containers/contact/title-area'
import BannerArea from '../containers/contact/banner-area'
import FormArea from '../containers/contact/form-area'

const ContactPage = () => (
  <Layout>
    <SEO title="Contact" />
    <Header/>
    <div className="main-content">
        <TitleArea/>
        <BannerArea/>
        <FormArea/>
    </div>
    <Footer/>
  </Layout>
)

export default ContactPage
 