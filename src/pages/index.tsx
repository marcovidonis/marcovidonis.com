import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Hero from "../components/hero"
import Articles from "../components/articles"
import Projects from "../components/projects"
import ThemeProvider from "@material-ui/styles/ThemeProvider"
import theme from "../theme"

const IndexPage = () => (
  <React.Fragment>
    <ThemeProvider theme={theme}>
      <Layout>
        <SEO title="Home" />
        <Hero />
        <Projects />
        <Articles />
      </Layout>
    </ThemeProvider>
  </React.Fragment>
)

export default IndexPage
