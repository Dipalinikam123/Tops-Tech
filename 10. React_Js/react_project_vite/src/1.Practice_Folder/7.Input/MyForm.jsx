
import React from 'react'
import { useState } from 'react'
import { Button, Form, FormGroup, Input, Label, Table } from 'reactstrap'

export default function MyForm() {
  let [user, setuser] = useState({
    email:"",password:""
  })

  let [arr, setArr]= useState([])

  function submited(){
  setArr([...arr,user])

    setuser ({
      email:"",
      password:"",
    })
  }

  return (
    <>
    <h1>{user.email}</h1>
    <h1>{user.password}</h1>

      <Form className='w-50 m-auto p-3 border border-success border-4 '>
        <FormGroup>
          <Label for="exampleEmail">Email</Label>
          <Input type="email"
          value={user?.email}
          name="email" id="exampleEmail" placeholder="with a placeholder"  
          onChange={(e)=> setuser({...user,email:e.target?.value})}
          />
        </FormGroup>
        <FormGroup>
          <Label for="examplePassword">Password</Label>
          <Input type="password" 
          value={user?.password}
          name="password" id="examplePassword" placeholder="password placeholder" 
          onChange={(e)=> setuser({...user,password:e.target?.value})}
          />
        </FormGroup>
          <Button className='p-2 w-100 my-3' onClick={()=>submited()}>submit</Button>
        </Form>


        <Table>
  <thead>
    <tr>
      <th>
        #
      </th>
      <th>
         E-Mail
      </th>
      <th>
        Password
      </th>
    </tr>
  </thead>
  <tbody>

  {
    arr.map((e,i)=>{
      return(
        <tr key={i}>
        <th >
          {i+1}
        </th>
        <td>
          {e.email}
        </td>
        <td>
          {e.password}
        </td>                                     
      </tr>

      )
    })
  }

    
    </tbody>
    </Table>


    
    </>
  )
}
