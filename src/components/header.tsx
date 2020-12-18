import PropTypes from "prop-types"
import React from "react"

import AppBar from "@material-ui/core/AppBar"
import Toolbar from "@material-ui/core/Toolbar"
import Typography from "@material-ui/core/Typography"
import Button from "@material-ui/core/Button"
import { makeStyles } from "@material-ui/core/styles"
import Hidden from "@material-ui/core/Hidden"
import { Link } from 'gatsby'

import HomeIcon from "../icons/home-icon.js"
import CodeIcon from "../icons/code-icon.js"
import ArticleIcon from "../icons/article-icon.js"
import MailIcon from "../icons/mail-icon.js"

interface Props {
  companyName: string
}

const useStyles = makeStyles(theme => ({
  appBar: {
    color: "#233348",
    backgroundColor: "#FFF",
  },
  appBarBottom: {
    color: "#233348",
    backgroundColor: "#FFF",
    bottom: 0,
    top: "90vh",
    left: 0,
    right: 0,
    borderTop: "3px solid #5a98f2"
  },
  toolbar: {
    flexWrap: "wrap",
  },
  toolbarBottom: {
    flexWrap: "wrap",
    display: "flex",
    justifyContent: "space-evenly",
  },
  toolbarTitle: {
    flexGrow: 1,
  },
}))

const homeIcon = <HomeIcon />
const codeIcon = <CodeIcon />
const articleIcon = <ArticleIcon />
const mailIcon = <MailIcon />

const Header = ({ companyName }: Props) => {
  const classes = useStyles()

  const navLinks = [
    { displayText: "Home", link: "/", icon: homeIcon},
    { displayText: "Projects", link: "/my-projects", icon: codeIcon },
    { displayText: "Articles", link: "/my-articles", icon: articleIcon },
    { displayText: "Contact Me", link: "/contactme", icon: mailIcon },
  ]

  return (
    <React.Fragment>
      <Hidden smUp>
        <AppBar position="fixed" elevation={0} className={classes.appBarBottom}>
          <Toolbar className={classes.toolbarBottom}>
            {navLinks.map(item => (
              <Link to={item.link} key={item.displayText} color="inherit">
                <Button color="primary">
                  {item.icon}
                </Button>
              </Link>
            ))}
          </Toolbar>
        </AppBar>
      </Hidden>

      <Hidden xsDown>
        <AppBar position="static" elevation={0} className={classes.appBar}>
          <Toolbar className={classes.toolbar}>
            <Typography
              variant="h6"
              color="inherit"
              className={classes.toolbarTitle}
            >
              marcovidonis.com
            </Typography>

            {navLinks.map(item => (
              <Link to={item.link} key={item.displayText} color="inherit">
                <Button color="primary">
                  {item.displayText}
                </Button>
              </Link>
            ))}
          </Toolbar>
        </AppBar>
      </Hidden>
    </React.Fragment>
  )
}

Header.propTypes = {
  companyName: PropTypes.string,
}

Header.defaultProps = {
  companyName: `marcovidonis.com`,
}

export default Header
