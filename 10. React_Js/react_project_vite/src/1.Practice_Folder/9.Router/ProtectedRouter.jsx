import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

export default function ProtectedRouter({componant}) {

    const navigate= useNavigate()
    useEffect(()=>{
        let data= localStorage.getItem("user")
        let normalData = JSON.parse(data)
        console.log(normalData)
        // Object.keys(normalData)

        if (!normalData || Object.keys(normalData).length ===0) {
            alert("You need to Register")
            navigate("/unauthorized")
        }
    })
  return (
    <div>
        {componant}
    </div>
  )
}
