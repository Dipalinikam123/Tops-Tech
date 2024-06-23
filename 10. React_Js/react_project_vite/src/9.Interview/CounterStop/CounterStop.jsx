import React, { useState } from 'react'
import { Button } from 'react-bootstrap'

export default function CounterStop() {
    let [count,setCount]=useState(5)
    let [stop,setStop]=useState()

    const startHandeler =()=>{
        if(count == 0){
            setCount(0)
        }
        else{
           let id = setInterval(() => {
               setStop(id)
               setCount( count--)
                console.log("=====",count)
            }, 1000);
        }
    }

    const stopHandeler = () =>{
        clearInterval(stop)
    }

  return (
    <div className='d-flex justify-content-center align-items-center flex-column w-100'>
    CounterStop
    <h2>{count}</h2>
    <div className='d-flex gap-2'>

    <button onClick={startHandeler}  className='p-2'>Start</button>
    <button onClick={stopHandeler} className='p-2'>Stop</button>
    </div>
    </div>

  )
}
