import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout/layout"
import Navbar from "../components/navbar/navbar"
import SEO from "../components/seo"
import Jumbo from "../components/jumbo/jumbo"
import AboutMe from "../components/aboutMe/aboutMe"
import Contact from "../components/contact/contact"
import Projects from "../components/projects/projects"

const IndexPage = () => (
  <>
    <Navbar />
    <Layout>
      <SEO title="Home" />
      <Jumbo />
      <AboutMe />
      <Contact />
      <Projects />
      {/* <Link to="/page-2/">Go to page 2</Link> */}
    </Layout>
  </>
)

export default IndexPage
