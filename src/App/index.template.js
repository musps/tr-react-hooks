import React from 'react'
import { Link } from 'react-router-dom'
import { withRouter } from 'react-router'

import './index.template.scss'

const Template = ({ pageName, children }) => (
  <div className="app">
    <header className="header">
      <div className="header__content">
        <h1 className="header__content__title">
          <Link to='/'>
            {pageName}
          </Link>
        </h1>
      </div>
    </header>

    <div className="content">
      <div className="content__full">
        {children}
      </div>
    </div>
  </div>
)

export default Template
