import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import SVGMail from "../components/SVGMail"
import ThemeProvider from "@material-ui/styles/ThemeProvider"
import Typography from "@material-ui/core/Typography"
import theme from "../theme"

const ContactMe = () => (
  <React.Fragment>
    <ThemeProvider theme={theme}>
      <Layout>
        <SEO title="Contact Me" />
        <SVGMail />
        <Typography variant="h4">
          Fancy a chat?
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p" style={{ margin: "20px 0 100px 0 "}}>
          I'd love to hear from you! Just drop me a line at <a href="mailto:marco.vidonis@gmail.com" style={{ color: "#458FF6"}}>marco.vidonis@gmail.com</a>.
        </Typography>

      </Layout>
    </ThemeProvider>
  </React.Fragment>
)

export default ContactMe
