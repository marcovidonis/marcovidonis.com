/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import "./layout.css"
import Footer from "./footer"
import Box from "@material-ui/core/Box"

interface Props {
  children?: any
}

const Layout = ({ children }: Props) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <div style={{ minHeight: "100vh", position: "relative" }}>
      <Header />
      <Box
        style={{
          margin: `0 auto`,
          maxWidth: 960,
          paddingTop: 0,
          paddingLeft: `1.0875rem`,
          paddingRight: `1.0875rem`,
        }}
        className="main-content"
      >
        {children}
      </Box>
      <Footer />
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
