import { Link } from 'gatsby'
import React from 'react'
import '../styles/footer.css'

const Footer = () => (
  <footer className="footer">
    <p>Copyright © Eric Hartline {(new Date()).getFullYear()}</p>
  </footer>
)

export default Footer
