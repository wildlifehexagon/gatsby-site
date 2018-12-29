import React from 'react'

import Layout from '../components/layout'
import Image from '../components/image'
import '../styles/flexbox.css'

const IndexPage = () => (
  <Layout>
    <div className="container">
      <div className="item">
        <Image />
      </div>
      <div className="item">
        <h1>ERIC HARTLINE</h1>
        <hr />
        <p className="about">Web Developer</p>
        <p className="about">Chicago, IL</p>
      </div>
    </div>
  </Layout>
)

export default IndexPage
