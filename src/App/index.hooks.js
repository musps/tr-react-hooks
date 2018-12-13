import React, { useState, useEffect } from 'react'

export function useInput(
  placeHolder= '',
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
