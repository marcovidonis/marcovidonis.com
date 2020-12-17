import React from "react"
import { Link } from 'gatsby'

interface IProps {
  displayText: string;
  url: string;
}

const FooterLink = ({ displayText, url, ...props }: IProps) => {
  if (url.slice(0, 1) === "/") {
    return (
      <Link
        to={url}
        style={{color: "inherit", textDecoration: "none"}}
      >
        {displayText}
      </Link>
    )
  } else {
    return(
      <a href={url} target="_blank" style={{color: "inherit", textDecoration: "none"}}>
        {displayText}
      </a>
    )
  }
}

export default FooterLink
