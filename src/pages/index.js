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

const icons = [
  {
    icon: faGithub,
    url: 'https://github.com/wildlifehexagon',
  },
  {
    icon: faLinkedin,
    url: 'https://www.linkedin.com/in/erichartline',
  },
  {
    icon: faTwitter,
    url: 'https://twitter.com/wildlifehexagon',
  },
  {
    icon: faFreeCodeCamp,
    url: 'https://www.freecodecamp.com/wildlifehexagon',
  },
  {
    icon: faEnvelope,
    url: 'mailto:hartline.eric@gmail.com',
  },
]

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
        <span>
          <ul className="list-inline">
            {icons.map((icon, i) => {
              return (
                <li>
                  <a href={icon.url} target="_blank" rel="noopener" className="social">
                    <FontAwesomeIcon icon={icon.icon} />
                  </a>
                </li>
              )
            })}
          </ul>
        </span>
      </div>
    </div>
  </Layout>
)

export default IndexPage
