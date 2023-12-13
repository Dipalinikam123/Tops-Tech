import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

export default function ProtectedRouter({componant}) {

    const navigate= useNavigate()
    useEffect(()=>{
        let data= localStorage.getItem("user")
        let normalData = JSON.parse(data)
        Object.keys(normalData)

        if ( Object.keys(normalData).length ===0) {
            alert("You need to Login")
            navigate("/pagenotfound")
        }
    })
  return (
    <div>
        {componant}
    </div>
  )
}
