import React from 'react'
import { Button } from 'react-bootstrap'

export default function Buttons( {buttonClick}) {
    const buttonsArr= ["C","1","2","+","3","4","-","5","6","*","7","8","/","9","0","=",]
  return (
    <div className='row'>
    {
        buttonsArr.map((e,i)=>{
            return (
              <div className='col-4 w-25 m-2' key={i}> 
              <Button className='w-100' onClick={()=>buttonClick(e)}>{e}</Button>
              </div>
                )
        })
    }
    </div>
  )
}
