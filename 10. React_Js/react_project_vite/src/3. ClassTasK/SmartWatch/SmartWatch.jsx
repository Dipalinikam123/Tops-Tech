import React, { useState } from 'react'

export default function SmartWatch() {
  let cDate = new Date().toDateString();
  let [date, setDate] = useState("");



  function updateTime() {
    let time = new Date().toLocaleTimeString();
    setDate(time);
  }
  setInterval(updateTime, 1000);
  return (
    <div className='w-100 mt-5 d-flex flex-column justify-content-center align-items-center'>
      <h3>SmartWatch</h3>
      <div className="date-time">
          <h1>Time:- {date}</h1>
          <h1>Date:- {cDate}</h1>
        </div>
    </div>
  )
}

