import React from "react"
import SEO from '../components/seo'
import Layout from "../containers/layout/layout"
import Header from '../containers/layout/header'
import Footer from '../containers/layout/footer'
import HeroArea from '../containers/home/hero-area'
import MainArea from '../containers/home/main-area'
import InstagramArea from '../containers/global/instagram'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Header/>
    <div className="main-content">
      <HeroArea/>
      <MainArea/>  
      <InstagramArea/>   
    </div>
    <Footer/>
  </Layout>
)

export default IndexPage
