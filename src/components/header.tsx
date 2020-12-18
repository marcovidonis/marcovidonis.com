import PropTypes from "prop-types"
import React from "react"

import AppBar from "@material-ui/core/AppBar"
import Toolbar from "@material-ui/core/Toolbar"
import Typography from "@material-ui/core/Typography"
import Button from "@material-ui/core/Button"
import { makeStyles } from "@material-ui/core/styles"
import IconButton from "@material-ui/core/IconButton"
import MenuIcon from "@material-ui/icons/Menu"
import Hidden from "@material-ui/core/Hidden"
import Drawer from "@material-ui/core/Drawer"
import ListItem from "@material-ui/core/ListItem"
import ListItemText from "@material-ui/core/ListItemText"
import List from "@material-ui/core/List"
import { Link } from 'gatsby'

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
    display: "flex",
    justifyContent: "center",
    borderTop: "3px solid #5a98f2"
  },
  toolbar: {
    flexWrap: "wrap",
  },
  toolbarTitle: {
    flexGrow: 1,
  },
  drawerList: {
    width: 250,
  },
  drawerToggle: {
    padding: 20,
  },
}))

const Header = ({ companyName }: Props) => {
  const classes = useStyles()
  const [open, setOpen] = React.useState(false)

  const handleDrawerOpen = () => {
    setOpen(true)
  }
  const handleDrawerClose = () => {
    setOpen(false)
  }

  const navLinks = [
    { displayText: "Home", link: "/" },
    { displayText: "Projects", link: "/my-projects" },
    { displayText: "Articles", link: "/my-articles" },
    { displayText: "Contact Me", link: "/contactme" },
  ]

  return (
    <React.Fragment>
      <Hidden smUp>
        <AppBar position="fixed" elevation={0} className={classes.appBarBottom}>
          <Toolbar className={classes.toolbar}>
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
