import React, { Fragment } from 'react'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'

import Header from './header'
import Footer from './footer'
import '../styles/layout.css'

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <Fragment>
        <Helmet
          title={data.site.siteMetadata.title}
          meta={[
            {
              name: 'description',
              content: 'Eric Hartline is a web developer based in Chicago, IL.',
            },
            {
              name: 'keywords',
              content: 'eric hartline, web developer, reactjs',
            },
          ]}
        >
          <html lang="en" />
        </Helmet>
        <Header siteTitle="Eric Hartline" />
        <div>{children}</div>
        <Footer />
      </Fragment>
    )}
  />
)

export default Layout
