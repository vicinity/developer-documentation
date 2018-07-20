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
import { HashLink as Link } from 'react-router-hash-link'
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
            <AccordionItemTitle>Agency Onboarding</AccordionItemTitle>
            <AccordionItemBody>
            <Link smooth to="/agency-onboarding#intro">
                Introduction
              </Link>
              <Link smooth to="/agency-onboarding#comms">
                Shared Communications
              </Link>
              <Link smooth to="/agency-onboarding#project">
                Project Management
              </Link>
              <Link smooth to="/agency-onboarding#github">
                GitHub
              </Link>
              <Link smooth to="/agency-onboarding#npmjs">
                npmjs
              </Link>
              <Link smooth to="/agency-onboarding#aws">
                AWS
              </Link>
              <Link smooth to="/agency-onboarding#build">
                Build Systems
              </Link>
              <Link smooth to="/agency-onboarding#third-party">
                Third Party Systems
              </Link>
              <Link smooth to="/agency-onboarding#office">
                Office Work
              </Link>
            </AccordionItemBody>
          </AccordionItem>
          <AccordionItem>
            <AccordionItemTitle>Branching strategy</AccordionItemTitle>
            <AccordionItemBody>
              <Link smooth to="/branching-strategy#intro">
                Introduction
              </Link>
              <Link smooth to="/branching-strategy#simplicity">
                Simplicity
              </Link>
              <Link smooth to="/branching-strategy#master">
                Maintaining master
              </Link>
              <Link smooth to="/branching-strategy#feature-branches">
                Feature branches
              </Link>
              <Link smooth to="/branching-strategy#pull-requests">
                Pull requests
              </Link>
              <Link smooth to="/branching-strategy#clean-histories">
                Clean commit histories
              </Link>
              <Link smooth to="/branching-strategy#environments">
                Environments
              </Link>
              <Link smooth to="/branching-strategy#further-reading">
                Further reading
              </Link>
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
