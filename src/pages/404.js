import React from "react"
import SEO from '../components/seo'
import Layout from "../containers/layout/layout"
import Header from '../containers/layout/header'
import Footer from '../containers/layout/footer'
import ErrorArea from '../containers/404/error-area'
import InstagramWrap from '../containers/global/instagram'

const NotFoundPage = () => (
  <Layout>
    <SEO title="404" />
    <Header/>
    <div className="main-content">
      <ErrorArea/>
      <InstagramWrap/>
    </div>
    <Footer/>
  </Layout>
)

export default NotFoundPage
 