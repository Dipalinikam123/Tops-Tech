import React from 'react'
import { NavLink } from 'react-router-dom'
import image from "../0.Images/service.jpeg"
import { Button } from 'react-bootstrap'


export default function Service() {
  return (
    <div>
        <h1>Service</h1>
        <ul>
          <li>
            <NavLink to={"/service/bike"}><Button style={{
              width:"90px", backgroundColor:"blue"
            }}>BIKE</Button></NavLink></li>
          <li><br />
            <NavLink to={"/service/car"}><Button style={{
              width:"90px", backgroundColor:"blue"
            }}>CAR</Button></NavLink></li>
        </ul>

        <img src={image} alt="" />
    </div>
  )
}
