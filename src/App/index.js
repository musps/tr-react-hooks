import React, { useState, useEffect } from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { AnimatedSwitch } from 'react-router-transition'

import './index.scss'

import Template from './index.template.js'

import Step1 from '../Pages/Step/step_1'
import Step2 from '../Pages/Step/step_2'
import Step3 from '../Pages/Step/step_3'

const CustomSwitch = ({ children }) => (
  <Switch>
    <AnimatedSwitch
      atEnter={{ opacity: 0 }}
      atLeave={{ opacity: 0 }}
      atActive={{ opacity: 1 }}
      className="switch-wrapper"
    >
      {children}
    </AnimatedSwitch>
  </Switch>
)

const Router = () => (
  <CustomSwitch>
    <Route exact path="/" component={Step1} />
    <Route path="/step2" component={Step2} />
    <Route path="/step3" component={Step3} />
  </CustomSwitch>
)

function App() {
  return (
    <BrowserRouter>
      <Template pageName="app name">
        <Router />
      </Template>
    </BrowserRouter>
  )
}

export default App
