import React, { useState, useEffect } from 'react'
import './index.scss'
import { useInput, preventDefault } from './index.hooks'

const Form = ({ children }) => (
  <form className="customForm" onSubmit={preventDefault}>
    {children}
  </form>
)

const Input = ({ data }) => (
  <input
    className="reset input"
    type="text"
    {...data}
  />
)

const ButtonSubmit = () => (
  <button className="reset button" type="submit">save</button>
)

const AppTemplate = ({ appName, firstname, lastname }) => (
  <div className="app">
    <header className="header">
      <h1 className="title">
        {appName}
      </h1>
    </header>

    <div className="content">
      <Form>
        <Input data={firstname} />
        <Input data={lastname} />
        <ButtonSubmit />
      </Form>
    </div>
  </div>
)

function AppContainer() {
  const state = {
    appName: 'app name',
    firstname: useInput('firstname'),
    lastname: useInput('lastname')
  }

  return (<AppTemplate {...state} />)
}

export default AppContainer
