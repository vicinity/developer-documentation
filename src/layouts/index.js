import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import {
  Accordion,
  AccordionItem,
  AccordionItemTitle,
  AccordionItemBody,
} from 'react-accessible-accordion'
import Header from '../components/header'
import './accordion.css'
import './index.css'
import Styles from './index.module.css'

const Layout = ({ children, data }) => (
  <div>
    <Helmet
      title={data.site.siteMetadata.title}
      meta={[
        { name: 'description', content: 'Developer documentation' },
        { name: 'keywords', content: 'vicinity, developer documentation' },
      ]}
    />
    <Header siteTitle={data.site.siteMetadata.title} />
    <div className={Styles.container}>
      <div className="nav">
        <Accordion>
          <AccordionItem>
            <AccordionItemTitle>Branching strategy</AccordionItemTitle>
            <AccordionItemBody>
              <a href="/branching-strategy#intro">Introduction</a>
              <a href="/branching-strategy#simplicity">Simplicity</a>
              <a href="/branching-strategy#master">Maintaining master</a>
              <a href="/branching-strategy#feature-branches">
                Feature branches
              </a>
              <a href="/branching-strategy#pull-requests">Pull requests</a>
              <a href="/branching-strategy#clean-histories">
                Clean commit histories
              </a>
              <a href="/branching-strategy#environments">Environments</a>
            </AccordionItemBody>
          </AccordionItem>
        </Accordion>
      </div>

      {children()}
    </div>
  </div>
)

Layout.propTypes = {
  children: PropTypes.func,
}

export default Layout

export const query = graphql`
  query SiteTitleQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`
