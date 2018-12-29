import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'

const Blog = () => (
  <Layout>
    <h1>Blog</h1>
    <p>Why not start a blog?</p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default Blog
