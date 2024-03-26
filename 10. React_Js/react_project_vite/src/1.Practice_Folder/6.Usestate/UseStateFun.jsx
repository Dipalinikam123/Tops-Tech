import { useState } from "react"
// import React {useState} from 'react'

export default function UseStateFun () {

    let [index, setindex] = useState(100)

    function increment(params) {
        setindex(index+1)  
    }
    

  return (
    <>
    <h1>count is {index}</h1>
    <button onClick={()=>increment()}>inc</button>
    
    </>
  )
}
