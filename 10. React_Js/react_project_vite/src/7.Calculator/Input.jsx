import React from 'react'

export default function Input( {calVal}) {
  return (
    <div className='w-75'>
    <input className='w-100 m-2 fw-bold fs-3 border-dark' type='text' value={calVal} readOnly/>
    </div>
  )
}
