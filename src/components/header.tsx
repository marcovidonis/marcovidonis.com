//@ts-nocheck
import PropTypes from "prop-types"
import React from "react"

import {
  AppBar,
  Button,
  Hidden,
  IconButton,
  Toolbar,
  Typography,
} from "@material-ui/core"

import { makeStyles } from "@material-ui/core/styles"
import { Link } from 'gatsby'

import HomeOutlinedIcon from '@material-ui/icons/HomeOutlined';
import CodeIcon from '@material-ui/icons/Code';
import DescriptionOutlinedIcon from '@material-ui/icons/DescriptionOutlined';
import MailOutlinedIcon from '@material-ui/icons/MailOutlined';

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
    height: 60,
    top: "auto",
    bottom: 0,
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
  iconButton: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
}))

const homeIcon = <HomeOutlinedIcon fontSize="default" />
const codeIcon = <CodeIcon fontSize="default" />
const articleIcon = <DescriptionOutlinedIcon />
const mailIcon = <MailOutlinedIcon />

const Header = ({ companyName }: Props) => {
  const classes = useStyles()

  const navLinks = [
    { displayText: "Home", link: "/", icon: homeIcon },
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
                <IconButton color="primary" style={{ padding: 1 }}>
                  <div className={classes.iconButton}>
                    {item.icon}
                    <Typography variant="caption" display="block" align="center">
                      {item.displayText}
                    </Typography>
                  </div>
                </IconButton>
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
