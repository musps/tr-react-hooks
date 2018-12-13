import React, { useState, useEffect } from 'react'

export function useInput(defaultValue = '') {
  const [value, setValue] = useState(defaultValue)

  function onChange(e) {
    setValue(e.target.value)
  }

  return {
    value,
    onChange
  }
}

export function preventDefault(e) {
  e.preventDefault()
}
