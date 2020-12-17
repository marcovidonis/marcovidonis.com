import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import ProjectsDeck from "../components/projects-deck"
import SEO from "../components/seo"
import ThemeProvider from "@material-ui/styles/ThemeProvider"
import Typography from "@material-ui/core/Typography"
import theme from "../theme"

const MyProjects = () => (
  <React.Fragment>
    <ThemeProvider theme={theme}>
      <Layout>
        <SEO title="Projects" />
        <Typography variant="h4" color="inherit" style={{ marginBottom: 20 }}>
          Here's a list of all my projects
        </Typography>
        <ProjectsDeck />

      </Layout>
    </ThemeProvider>
  </React.Fragment>
)

export default MyProjects
