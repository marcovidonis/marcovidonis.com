import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import ArticlesDeck from "../components/articles-deck"
import SEO from "../components/seo"
import ThemeProvider from "@material-ui/styles/ThemeProvider"
import Typography from "@material-ui/core/Typography"
import theme from "../theme"

const MyArticles = () => (
  <React.Fragment>
    <ThemeProvider theme={theme}>
      <Layout>
        <SEO title="Articles" />
        <Typography variant="h4" color="inherit" style={{ marginBottom: 20 }}>
          My latest articles
        </Typography>
        <ArticlesDeck />        

      </Layout>
    </ThemeProvider>
  </React.Fragment>
)

export default MyArticles
