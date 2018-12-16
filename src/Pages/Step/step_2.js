import React from 'react'
import {
  useInput,
  Form,
  Input,
  ButtonSubmit
} from '../../App/index.hooks'

const Template = ({ email, password, nextStep }) => (
  <Form onSubmit={nextStep}>
    <Input data={email} />
    <Input data={password} />
    <ButtonSubmit name="Create an account" />
  </Form>
)

export default function Container(props) {
  const { history } = props
  const propsState = props.location.state
  const state = {
    firstname: propsState.firstname,
    lastname: propsState.lastname,
    email: useInput('email'),
    password: useInput('password'),
    nextStep: () => {
      const { firstname, lastname, email, password } = state
      history.push({
        pathname: '/step3',
        state: {
          firstname: firstname,
          lastname: lastname,
          email: email.value,
          password: password.value
        }
      })
    }
  }

  return (
    <Template {...state} />
  )
}
