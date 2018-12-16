import React from 'react'
import {
  useInput,
  Form,
  Input,
  ButtonSubmit
} from '../../App/index.hooks'

const Template = ({ firstname, lastname, nextStep }) => (
  <Form onSubmit={nextStep}>
    <Input data={firstname} />
    <Input data={lastname} />
    <ButtonSubmit name="Go to step 2" />
  </Form>
)

export default function Container(props) {
  const { history } = props
  const state = {
    firstname: useInput('firstname'),
    lastname: useInput('lastname'),
    nextStep: () => {
      const { firstname, lastname } = state
      history.push({
        pathname: '/step2',
        state: {
          firstname: firstname.value,
          lastname: lastname.value
        }
      })
    }
  }

  return (
    <Template {...state} />
  )
}
