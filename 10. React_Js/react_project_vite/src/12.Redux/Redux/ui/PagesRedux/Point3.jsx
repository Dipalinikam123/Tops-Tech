import React from 'react'
import { useSelector } from 'react-redux'

export default function Point3() {
    const pointData = useSelector((store)=>{
        return store.pointReducer.point
    })
  return (
    <div className='d-flex justify-content-center'> point is {pointData}</div>
  )
}
