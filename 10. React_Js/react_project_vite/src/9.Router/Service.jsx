import React from 'react'
import image from "../8.assignment/image/service-1019821_640.webp"
import { NavLink } from 'react-router-dom'


export default function Service() {
  return (
    <div>
        <h1>Service</h1>
        <ul>
          <li>
            <NavLink to={"/service/bike"}>BIKE</NavLink></li>
          <li>
            <NavLink to={"/service/car"}>CAR</NavLink></li>
        </ul>

        <img src={image} alt="" />
    </div>
  )
}
