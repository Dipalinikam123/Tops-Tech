import React,{useEffect, useState} from 'react'
import './Analog.css'

export default function AnalogClock() {

    let cDate = new Date().toDateString();
    const [clock, setClock]= useState(new Date())

    useEffect(()=>{
       const internal = setInterval(() => {
           setClock(new Date()) 
        }, 1000);
        return () =>clearInterval(internal)
    },[])
  return (
    <>
    <div className='d-flex  justify-content-center '>
    <h3 className='mt-5'>{cDate}</h3>
    </div>
    <div className="clock">
        <div className="hour_hand"
        style={{
            transform: `rotateZ(${clock.getHours() *30}deg)`
        }}
        ></div>

        <div className="min_hand"
        style={{
            transform: `rotateZ(${clock.getMinutes() *6}deg)`
        }}
        > </div>

        <div className="sec_hand"
        style={{
            transform: `rotateZ(${clock.getSeconds() *6}deg)`
        }}
        > </div>

        <span className="twelve">12</span>
        <span className="one">1</span>
        <span className="eleven">11</span>
        <span className="two">2</span>
        <span className="three">3</span>
        <span className="four">4</span>
        <span className="five">5</span>
        <span className="six">6</span>
        <span className="seven">7</span>
        <span className="eight">8</span>
        <span className="nine">9</span>
        <span className="ten">10</span>
    </div>
    </>
  )
}
