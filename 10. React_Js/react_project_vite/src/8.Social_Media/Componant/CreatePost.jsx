import React from 'react'
import { Form, Label, FormGroup, Input  } from 'reactstrap'

export default function CreatePost() {
  return (
    <div className='w-50 border border-1 p-2 border-dark m-3 ms-5'>

    <Form>
  <FormGroup>
    <Label for="exampleEmail">
      Email
    </Label>
    <Input
      id="exampleEmail"
      name="email"
      placeholder="with a placeholder"
      type="email"
      />
  </FormGroup>
  <FormGroup>
    <Label for="examplePassword">
      Password
    </Label>
    <Input
      id="examplePassword"
      name="password"
      placeholder="password placeholder"
      type="password"
      />
  </FormGroup>
  </Form>
      </div>
  )
}
