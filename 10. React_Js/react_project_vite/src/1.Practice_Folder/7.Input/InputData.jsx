import React, { useState } from 'react'
import { Button, Form, FormGroup, Input, Label } from 'reactstrap'

export default function InputData() {
  let [email,setemail]=useState("")
  let [useArr,setuseArr]=useState([])

    const getData=(element)=>{
        // console.log("------->",element.target.value)
        setemail(element.target.value)
    }
    //to add data in array
    const addDatainArr=()=>{
      setuseArr([...useArr,email])
      setemail("")
      // console.log("🚀 ~ file: InputData.jsx:15 ~ addDatainArr ~ useArr:", useArr)
    }
  return (
    <>
    <h1>Email is {email}</h1>
<Form className='border border-3 rounded-2 border-danger w-50 m-auto p-4' >
  <FormGroup>
    <Label for="exampleEmail">
      Email
    </Label>
    <Input
      value={email}
      id="exampleEmail"
      name="email"
      placeholder="with a placeholder"
      type="text"
      onChange={(e)=>getData(e)}
    />
  </FormGroup>
  {/* <FormGroup>
    <Label for="examplePassword">
      Password
    </Label>
    <Input
      id="examplePassword"
      name="password"
      placeholder="password placeholder"
      type="password"
    />
  </FormGroup> */}
  <Button onClick={()=>addDatainArr()} color='danger w-100' >submit</Button>
  </Form>
        {
          useArr.map((e,i)=>{
            return <h1 key={i}>name is {e}</h1>
          })
        }
    </>
  )
}
