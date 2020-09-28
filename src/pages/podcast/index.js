import React from "react";
import SEO from "../../components/seo";
import Layout from "../../containers/layout/layout";
import Header from "../../containers/layout/header";
import Footer from "../../containers/layout/footer";
import Podcast from "../../containers/podcast";

const PodcastPage = () => (
  <Layout>
    <SEO title="Podcast" />
    <Header />
    <div className="main-content">
      <Podcast />
    </div>
    <Footer />
  </Layout>
);

export default PodcastPage;
