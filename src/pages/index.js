import React from "react";
import { Link } from "gatsby"

import Layout from "../containers/layout/layout";
const IndexPage = () => (
  <Layout>
    <script>window.location.href="/blog"</script>
    <h1>Nothin to see here yet.</h1>
    <h1>Checkout the <Link to="/blog">Blog</Link>or <Link to="/podcast">Podcast</Link></h1>
  </Layout>
);

export default IndexPage;
