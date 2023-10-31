import React, { useState } from 'react'
import { Button, Form, FormGroup, Input, Label, Table } from 'reactstrap'
import {Trash2} from 'lucide-react'

export default function () {

  let [email,setemail]=useState("")
  let [user, setusrArr]=useState([])

  // to get value
  function print(element){
    console.log("------>",element.target.value)
    setemail(element.target.value)
  }

  //display value 
  function display(){
    setusrArr([...user,email])
    console.log("🚀 ~ file: InputDataTask.jsx:18 ~ display ~ user:", user)
    setemail("")
    
    if(email == "" || email== null){
      alert("Please Enter Email")
    } 
  }

  //deletea at a time one
  function romove(index){
    let filterData = user.filter((e,i)=> i !== index)
      let x= confirm("are youu sure");
      x && setusrArr(filterData)
  }

  //delete all 
  function deleteAll(){
    let allDlt= confirm("DeleteAll...?") 
    confirm("sure")
    allDlt && setusrArr([])
  }
 
//onBlur 
function blurEvent(){
  if(email == "" || email== null){
    alert("Please Enter Email")
  }
}

  
  return (
    <>
    <h1>email is {email}</h1>
      <Form className='w-50 m-auto p-3 border border-success'>
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
      onBlur={()=>blurEvent()}
      onChange={(e)=>print(e)}
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
  <Button color='success w-100' onClick={()=>display()}>submit</Button>
  </Form>
<Button className='my-5 mx-5' color='danger' onClick={()=>deleteAll()}>DeleteALL</Button>
  <Table dark>
  <thead>
    <tr>
      <th>
        SR.
      </th>
      <th>
       E-mail
      </th>
      <th>Action</th>
    </tr>
  </thead>
  <tbody>
  {
   user.map((e,i)=>{
      return ( 
      <tr key={i}>
      <th>
       {i+1}
      </th>
      <td>
        {e}
      </td>
      <td><Trash2 role='button' onClick={()=>romove(i)} /></td>
    </tr>
      )
    })
  }
</tbody>
    </Table>

  </>
  )
}
