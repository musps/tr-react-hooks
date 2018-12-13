import React, { useState, useEffect } from 'react'
import './index.scss'
import { useInput, preventDefault } from './index.hooks'

const Form = ({ children, onSubmit }) => (
  <form className="customForm"
        onSubmit={(e) => preventDefault(e)(onSubmit)}
  >
    {children}
  </form>
)

const Input = ({ data }) => (
  <input
    className="reset input"
    {...data}
  />
)

const ButtonSubmit = () => (
  <button className="reset button" type="submit">save</button>
)

const onSubmit = (data) => {
  console.log('on submit', data)
}

const AppTemplate = ({ appName, firstname, lastname }) => (
  <div className="app">
    <header className="header">
      <h1 className="title">
        {appName}
      </h1>
    </header>

    <div className="content">
      <Form onSubmit={() => onSubmit({firstname, lastname})}>
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
