import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Head from "../components/head"

const AboutPage = () => {
  return (
    <Layout>
      <Head title="About Full Stack Design" />

      <h1>About Me</h1>
      <p>I am a full stack developer</p>
      <p>
        Need a developer? <Link to="/contact">Contact me here!</Link>
      </p>
    </Layout>
  )
}

export default AboutPage
