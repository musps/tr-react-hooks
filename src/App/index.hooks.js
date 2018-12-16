import React, { useState, useEffect } from 'react'
import './index.hooks.scss'

export function useInput(
  placeHolder = '',
  defaultValue = '',
  type = 'text'
) {
  const [value, setValue] = useState(defaultValue)

  function onChange(e) {
    setValue(e.target.value)
  }

  return {
    value,
    onChange,
    placeholder: placeHolder,
    type
  }
}

export function preventDefault(e) {
  e.preventDefault()

  return function (onSubmit) {
    onSubmit.call()
  }
}

export const Form = ({ children, onSubmit }) => (
  <form className="customForm"
        onSubmit={(e) => preventDefault(e)(onSubmit)}
  >
    {children}
  </form>
)

export const Input = ({ data }) => (
  <input
    className="reset input"
    {...data}
  />
)

export const ButtonSubmit = ({ name }) => (
  <button className="reset button" type="submit">
    {name}
  </button>
)
