import React from "react"

import Layout from "../components/layout"
import ProjectsDeck from "../components/projects-deck"
import SEO from "../components/seo"
import ThemeProvider from "@material-ui/styles/ThemeProvider"
import Typography from "@material-ui/core/Typography"
import theme from "../theme"
import Grid from "@material-ui/core/Grid"

const MyProjects = () => (
  <React.Fragment>
    <ThemeProvider theme={theme}>
      <Layout>
        <SEO title="Projects" />
        <Typography variant="h4" color="inherit" style={{ margin: "50px 0 20px 0" }}>
          Here's a list of all my projects
        </Typography>
        <Grid container spacing={3} style={{ textAlign: "center", marginTop: 25 }}>
          <ProjectsDeck />
        </Grid>
      </Layout>
    </ThemeProvider>
  </React.Fragment>
)

export default MyProjects
