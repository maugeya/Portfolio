import React from 'react'

import Layout from '../components/layout/layout'
import Navbar from '../components/navbar/navbar'
import SEO from '../components/seo'
import Jumbo from '../components/jumbo/jumbo'
import AboutMe from '../components/aboutMe/aboutMe'
import TechExperience from '../components/TechExperience/techExperience'
import Contact from '../components/contact/contact'
import Projects from '../components/projects/projects'

const IndexPage = () => (
  <>
    <Navbar />
    <Layout>
      <SEO title="Home" />
      <Jumbo />
      <div className="personalInfo">
        <AboutMe />
        <TechExperience />
      </div>
      <Projects />
      <Contact />
    </Layout>
  </>
)

export default IndexPage
