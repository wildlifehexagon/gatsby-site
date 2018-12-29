import { Link } from "gatsby"
import React from "react"
import "../styles/header.css"

const Header = ({ siteTitle }) => (
  <header className="header">
    <h1 className="title">
      <Link to="/" className="link">
        {siteTitle}
      </Link>
    </h1>
    <ul className="navbar">
      <li>
        <Link to="/" className="link">
          Home
        </Link>
      </li>
      <li>
        <Link to="/about" className="link">
          About
        </Link>
      </li>
      <li>
        <Link to="/blog" className="link">
          Blog
        </Link>
      </li>
    </ul>
  </header>
)

Header.defaultProps = {
  siteTitle: ""
}

export default Header
