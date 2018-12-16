import React from 'react'
import {
  useInput,
  Form,
  Input,
  ButtonSubmit
} from '../../App/index.hooks'

const onChange = (e) => {
  // Nop.
}

const disabled = true

const Template = ({ firstname, lastname, email, password }) => (
  <Form>
    {[firstname, lastname, email, password].map((v) => (
      <Input data={{
        value: v,
        onChange,
        disabled
      }} />
    ))}
  </Form>
)

export default function Container(props) {
  const propsState = props.location.state
  const state = {
    firstname: propsState.firstname,
    lastname: propsState.lastname,
    email: propsState.email,
    password: propsState.password
  }

  return (
    <Template {...state} />
  )
}
