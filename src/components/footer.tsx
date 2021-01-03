import React from "react"
import Grid from "@material-ui/core/Grid"
import Typography from "@material-ui/core/Typography"
import Box from "@material-ui/core/Box"
import Hidden from "@material-ui/core/Hidden"
import FooterLink from "./footer-link"

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
    <footer>
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
              © 2021
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

          <Hidden smUp>
            <Grid
              item
              sm={12}
              container
              direction="column"
              justify="space-evenly"
              style={{ padding: "10px 10px 15vh 10px" }}
            >
              <Typography variant="body2" color="inherit">
                <div>Icons made by <FooterLink url={"https://www.flaticon.com/authors/freepik"} displayText={"Freepik"} /> from <FooterLink url={"https://www.flaticon.com/"} displayText={"www.flaticon.com"} /></div>
              </Typography>
            </Grid>
          </Hidden>

        </Grid>
      </Box>
    </footer>
  )
}
export default Footer
