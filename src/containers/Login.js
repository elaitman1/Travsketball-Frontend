import React from 'react'
import { Button, Checkbox, Form } from 'semantic-ui-react'

export default class Login extends React.Component{

  render() {
    return (
      
      <Form>
        <Form.Field>
          <label>UserName</label>
          <input placeholder='userName' />
        </Form.Field>
        <Form.Field>
          <label>Password</label>
          <input placeholder='password' />
        </Form.Field>
          <Button type='submit'>Login</Button>
          <Button onClick={() => this.props.history.push('/homepage')} type='submit'>Sign Up </Button>
      </Form>
    )
  }
}
