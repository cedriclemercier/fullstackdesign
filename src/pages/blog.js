import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"

import Layout from "../components/layout"
import Head from "../components/head"

import styles from "./blog.module.scss"

const Blog = () => {
  const data = useStaticQuery(
    graphql`
      query {
        allContentfulBlogPost(sort: { fields: publishedDate, order: DESC }) {
          edges {
            node {
              title
              slug
              publishedDate(formatString: "MMMM Do, YYYY")
            }
          }
        }
      }
    `
  )

  return (
    <div>
      <Layout>
        <Head title="Web Design Blogs" />

        <h1>Blogs</h1>
        <ol className={styles.posts}>
          {data.allContentfulBlogPost.edges.map(el => {
            return (
              <li className={styles.post}>
                <Link to={`/blog/${el.node.slug}`}>
                  <h2>{el.node.title}</h2>
                  <p>{el.node.publishedDate}</p>
                </Link>
              </li>
            )
          })}
        </ol>
      </Layout>
    </div>
  )
}

export default Blog
