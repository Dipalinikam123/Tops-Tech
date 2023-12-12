import React from 'react'
import image from "../0.Images/bike.jpeg"
import { useNavigate } from 'react-router-dom';
import { Button } from 'react-bootstrap';


export default function Bike() {
   
  const navigate = useNavigate()
  return (
    <div>
      <Button className='m-3 bg-danger border border-danger' onClick={()=>navigate("/service")}>Back to Sevice</Button>
        <h1>Bike</h1>
        <img src={image} alt="" className='w-50'/>
        </div>
  );
}
