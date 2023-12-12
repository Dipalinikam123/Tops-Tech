import React from 'react'
import image from "../../../0.Images/car.jpeg"
import { useNavigate } from 'react-router-dom'
import { Button } from 'react-bootstrap'


export default function Car() {
  const navigate = useNavigate() 
  return (
    <div>
      <Button className='m-3 bg-danger border border-danger' onClick={()=>navigate("/service")}>Back to Service</Button>
        <h1>Car</h1>
        <img src={image} alt="" />
    </div>
  )
}
