import React from "react"
import { Link } from "gatsby"

import Head from "../components/head"
import Layout from "../components/layout"

const IndexPage = () => {
  return (
    <Layout>
      <Head title="Complete Website Designs" />
      <h1>Hello</h1>
      <h2>I am Cedric</h2>

      <p>
        Need a developer? <Link to="/contact">Contact me here!</Link>
      </p>
    </Layout>
  )
}

export default IndexPage
