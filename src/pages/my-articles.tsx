import React from "react"

import Layout from "../components/layout"
import ArticlesDeck from "../components/articles-deck"
import SEO from "../components/seo"
import ThemeProvider from "@material-ui/styles/ThemeProvider"
import Typography from "@material-ui/core/Typography"
import theme from "../theme"
import Grid from "@material-ui/core/Grid"

const MyArticles = () => (
  <React.Fragment>
    <ThemeProvider theme={theme}>
      <Layout>
        <SEO title="Articles" />
        <Typography variant="h4" color="inherit" style={{ margin: "50px 0 20px 0" }}>
          My latest articles
        </Typography>
        <Grid container spacing={3} style={{ textAlign: "center", marginTop: 25 }}>
          <ArticlesDeck />
        </Grid>

      </Layout>
    </ThemeProvider>
  </React.Fragment>
)

export default MyArticles
