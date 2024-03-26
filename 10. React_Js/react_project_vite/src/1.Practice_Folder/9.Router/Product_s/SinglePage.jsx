import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useNavigate, useParams } from 'react-router-dom'
import { ChevronFirst } from 'lucide-react';

export default function SinglePage() {

    const [product,setProduct]= useState({});

    const navigate= useNavigate()
    const urldata= useParams()   // id{1} {object}
    console.log("🚀 ~ file: SinglePage.jsx:10 ~ SinglePage ~ urldata:", urldata)

    useEffect(()=>{
   axios({
    method:"get",
    url:`https://fakestoreapi.com/products/${urldata.id}`, //id is path of singlepage / u can use any name there(:id)
   })
   .then((res)=>{
    
       console.log("=====",res.data)
       setProduct(res?.data)
    })
    .catch((err)=>{
        alert("some err")
    })
    },[])


  return (
    <>
     <div className='container border border-dark rounded m-3' style={{width:"50px"}}>
        <ChevronFirst role="button" onClick={()=>navigate("/product")}/>
      </div>
    <div className='container w-100 d-flex justify-content-center gap-4'>
            <img className='w-25 border border-dark rounded-3 p-3' src={product.image} alt="" />
        <div className='w-75 border border-dark rounded-3 p-3'>
        <h2 >{product.title}</h2>
        <h4>price: {product.price}</h4>
        <p>{product.description}</p>
        </div>
    </div>
    </>
  )
}
