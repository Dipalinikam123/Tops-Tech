import { FileInput, XOctagon } from 'lucide-react'
import React, { useState } from 'react'
import { Button, Form, FormGroup, Input, Label, Table } from 'reactstrap'

export default function MultipleInputFun1() {

    let [user, setUser]=useState({
        email:"",
        password:"",
        age:"",
        occupation:"",
        mobile:""
    })

    let [arr, setArr]=useState([])

function submitBtn(){
     console.log(user)
     setArr([...arr, user])

     localStorage.setItem("userData",JSON.stringify(arr))

     // on click input in his initial state
     setUser({
         email:"",
         password:"",
         age:"",
          occupation:"",
         mobile:""
        })
         
 }

 function deleteItem(index){
    let filterData = arr.filter((e,i)=> i !== index)
      let x= confirm("are youu sure");
      x && setArr(filterData)
 }

 function updateHandler(data){
  setUser(data)
 }

 function deleteAll(){
    if(confirm("Do You Want To Delete All")){
        if(confirm("Are You Sure")){
            setArr([]) 
          }
        }

    // let dataNot= setArr([]) && "Data not fond"
    
 }

  return (
    <>
    <h1>Email is {user.email}</h1>
    <h1>password is {user.password}</h1>

    <Form className='w-50 border border-success border-3 p-3 m-auto'>
  <FormGroup>
    <Label for="exampleEmail">
      Email
    </Label>
    <Input
    
      id="exampleEmail"
      value={user?.email}
      name="email"
      placeholder="with a placeholder"
      type="email"
      onChange={(e)=> setUser({...user,email:e?.target?.value})}
    />
  </FormGroup>
  <FormGroup>
    <Label for="examplePassword">
      Password
    </Label>
    <Input
      id="examplePassword"
      value={user?.password}
      name="password"
      placeholder="password placeholder"
      type="password"
      onChange={(e)=>setUser({...user,password:e?.target?.value})}
    />
  </FormGroup>
  <FormGroup>
    <Label for="exampleage">
     Age
    </Label>
    <Input
      id="exampleage"
      value={user?.age}
      name="age"
      placeholder="age placeholder"
      type="number"
      onChange={(e)=>setUser({...user,age:e?.target?.value})}
    />
  </FormGroup>

  <FormGroup>
    <Label for="exampleoccupation">
      Occupation
    </Label>
    <Input
      id="exampleoccupation"
      value={user?.occupation}
      name="occupation"
      placeholder="occupation placeholder"
      type="occupation"
      onChange={(e)=>setUser({...user,occupation:e?.target?.value})}
    />
  </FormGroup>

  <FormGroup>
    <Label for="examplemobile">
      Mobile No.
    </Label>
    <Input
      id="examplemobile"
      value={user?.mobile}
      name="password"
      placeholder="mobile placeholder"
      type="password"
      onChange={(e)=>setUser({...user,mobile:e?.target?.value})}
    />
  </FormGroup>

  <Button className='w-100 bg-success-' onClick={()=>submitBtn()}>Submit</Button>
  </Form>
<div className='w-50 m-auto ms-5 p-3'>
  <Button className='bg-dark w-25 ' onClick={()=>deleteAll()}>Delete All</Button>
</div>

  <Table>
  <thead>
    <tr>
      <th>
        sr
      </th>
      <th>
       E-mail
      </th>
      <th>
      Age
      </th>
      <th>
      Password
      </th>
      <th>
     Occupation
      </th>
      <th>
       Mobile No.
      </th>
      <th>
       Delete
      </th>
      <th>
        Modify
      </th>
    </tr>
  </thead>
  <tbody>
    {
        arr.map((e,i)=>{
            return(
                <tr key={i}>
                    <th  scope="row">
                       {i+1} 
                    </th>
                    <td>
                        {e.email}
                    </td>
                    <td>
                        {e.password}
                    </td>
                    <td>
                        {e.age}
                    </td>
                    <td>
                        {e.occupation}
                    </td>
                    <td>
                        {e.mobile}
                    </td>
                    <td>
                    <XOctagon color="#732121" role='button' onClick={()=>deleteItem(i)} />
                    </td>
                    <td>
                    <FileInput color="#732121" role='button'onClick={()=>updateHandler(e)}/>
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
