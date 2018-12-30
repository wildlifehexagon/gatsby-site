import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faFreeCodeCamp,
  faGithub,
  faLinkedin,
  faTwitter,
} from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'

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
        <p>
          <ul className="list-inline">
            <li>
              <a href="#" className="social">
                <FontAwesomeIcon icon={faGithub} />
              </a>
            </li>
            <li>
              <a href="#" className="social">
                <FontAwesomeIcon icon={faLinkedin} />
              </a>
            </li>
            <li>
              <a href="#" className="social">
                <FontAwesomeIcon icon={faTwitter} />
              </a>
            </li>
            <li>
              <a href="#" className="social">
                <FontAwesomeIcon icon={faFreeCodeCamp} />
              </a>
            </li>
            <li>
              <a href="#" className="social">
                <FontAwesomeIcon icon={faEnvelope} />
              </a>
            </li>
          </ul>
        </p>
      </div>
    </div>
  </Layout>
)

export default IndexPage
