import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'



export default function CheckAdminRouter({componant}) {

  const navigate= useNavigate()
    useEffect(()=>{
        let data= localStorage.getItem("user")
        let adminNormalData = JSON.parse(data)
        console.log("adminNormalData",adminNormalData)
        // Object.keys(normalData)

        if(adminNormalData && Object.keys(adminNormalData).length > 0 && adminNormalData?.loginType === 'Admin'){
            alert('welcome admin')
        }
        else{
          navigate("/unauthorized")
           alert("user's not access this page ")
        }
    },[])
  return (
    <h1>{componant}</h1>
  )
}

