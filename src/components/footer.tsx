import React from "react"
import Grid from "@material-ui/core/Grid"
import Typography from "@material-ui/core/Typography"
import Box from "@material-ui/core/Box"
import Hidden from "@material-ui/core/Hidden"
import FooterLink from "./footer-link"
// import Link from "@material-ui/core/Link"
import { Link } from 'gatsby'

const Footer = () => {
  const footerLinks = [
    {
      title: "marcovidonis.com",
      items: [
        { displayText: "Projects", url: "/my-projects" },
        { displayText: "Articles",  url: "/my-articles" },
        { displayText: "Contact Me", url: "/contactme" },
      ],
    },
    {
      title: "links",
      items: [
        { displayText: "CodePen", url: "https://codepen.io/marcovidonis" },
        { displayText: "Twitter",  url: "https://twitter.com/marcovidonis" },
        { displayText: "LinkedIn", url: "https://www.linkedin.com/in/marcovidonis/?locale=en_US" },
      ],
    },
  ]

  return (
    <React.Fragment>
      <Box className="footer">
        <Grid
          container
          style={{
            margin: `0 auto`,
            maxWidth: 960,
            minHeight: 150,
            color: "#FFF",
          }}
        >
          <Grid
            xs={12}
            sm={6}
            item
            container
            direction="column"
            justify="flex-start"
            style={{ padding: 10 }}
          >
            <Typography variant="h5" color="inherit" style={{ marginBottom: 15 }}>
              Made by Marco Vidonis
            </Typography>
            <Typography variant="body2" color="inherit">
              © 2020
            </Typography>
          </Grid>

          {footerLinks.map(footerMenu => (
            <Grid
              item
              xs={6}
              sm={3}
              container
              direction="column"
              justify="space-evenly"
              style={{ padding: 10 }}
              key={footerMenu.title}
            >
              <Typography variant="subtitle1" color="inherit">
                {footerMenu.title}
              </Typography>
              {footerMenu.items.map(link => (
                <Typography variant="body2" color="inherit" key={link.displayText}>
                  <FooterLink url={link.url} displayText={link.displayText} />
                </Typography>
              ))}
            </Grid>
          ))}
        </Grid>
      </Box>
      {/*
      <Box className="attribution">
        <Grid
          container
          style={{
            margin: `0 auto`,
            maxWidth: 960,
            color: "#FFF",
            paddingLeft: 5,
            paddingRight: 5,
          }}
          direction="row"
          justify="space-between"
          alignItems="center"
        >
          <Typography variant="body2" color="inherit">
            Created by{" "}
            <a
              href="https://shantanudeshmukh.com/"
              target="_blank"
              style={{ color: "#FFF" }}
            >
              Shantanu Deshmukh
            </a>
          </Typography>
          <Typography variant="body2" color="inherit">
            Designed by
            <a
              href="https://dribbble.com/slabdsgn"
              target="_blank"
              style={{ color: "#FFF", margin: 5 }}
            >
              SLAB Design Studio
            </a>
          </Typography>
        </Grid>
      </Box>
      */}
    </React.Fragment>
  )
}
export default Footer
