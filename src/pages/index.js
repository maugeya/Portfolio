import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import Jumbo from "../components/jumbo"
import AboutMe from "../components/aboutMe"
import Contact from "../components/contact"
import Projects from "../components/projects"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Jumbo />
    <AboutMe />
    <Contact />
    <Projects />
    {/* <Link to="/page-2/">Go to page 2</Link> */}
  </Layout>
)

export default IndexPage
