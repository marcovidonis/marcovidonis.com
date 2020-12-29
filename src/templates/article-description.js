import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import ThemeProvider from "@material-ui/styles/ThemeProvider"
import theme from "../theme"
import Typography from "@material-ui/core/Typography"
import styles from "./article-description.module.css"

export default function ProjectDescription({ data }) {
  const post = data.markdownRemark

  return(
    <React.Fragment>
      <ThemeProvider theme={theme}>
        <Layout>
          <SEO title={post.frontmatter.title} />
            <Typography variant="h4" color="inherit" style={{ margin: "50px 0 20px 0" }}>
              {post.frontmatter.title}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              {post.frontmatter.date}
            </Typography>
            <Typography variant="body1" color="textPrimary" component="p">
              <div
                className={styles.post}
                dangerouslySetInnerHTML={{ __html: post.html }}
              />
            </Typography>
        </Layout>
      </ThemeProvider>
    </React.Fragment>
  )
}

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        date
      }
    }
  }
`
