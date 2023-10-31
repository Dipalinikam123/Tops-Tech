import React from 'react'
import { Button } from 'reactstrap'

export default function PropsChange(props) {
    let changename= ()=>{
        console.log("------>")
        props.name="mouse  "
    }
  return (
    <div>
        <h1>name {props.name}</h1>
        <Button color='danger' onClick={()=>changename()}>click</Button>
    </div>
  )
}
