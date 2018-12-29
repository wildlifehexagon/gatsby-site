import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'

const About = () => (
  <Layout>
    <h1>About page</h1>
    <p>Will provide a mini-bio here.</p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default About
