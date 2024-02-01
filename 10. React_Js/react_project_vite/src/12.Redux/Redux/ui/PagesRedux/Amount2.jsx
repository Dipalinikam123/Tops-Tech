import React from 'react'
import { useSelector } from 'react-redux'

export default function Amount2() {

    const amountData= useSelector((state)=>{
        return state?.amountReducer?.amount
    })
    console.log("🚀 ~ amountData ~ amountData:", amountData)

  return (
    <div className='w-100 mt-5 d-flex justify-content-center'> amount is {amountData}</div>
  )
}
