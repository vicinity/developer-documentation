import React from 'react'
import Link from 'gatsby-link'
import Styles from './index.module.css'

const Header = ({ siteTitle }) => (
  <div className={Styles.container}>
    <div className={Styles.content}>
      <img className={Styles.logo} src="/static/logo.png" />
      <h1 className={Styles.h1}>{siteTitle}</h1>
      <p style={{ color: 'rgba(0,0,0,0.5)' }}>
        Documentation to assist in projects at Vicinity Centres
      </p>
    </div>
  </div>
)

export default Header
