import React from 'react'

export default function ListView(props) {
    const data=[
        {
            name:"React",
            age: 25
        },
        {
            name:"HTML",
            age: 22
        },
        {
            name:"CSS",
            age: 23
        },
        {
            name:"Javascript",
            age: 22
        },
    ]

  return (
    <div>
        {
            data.map((e,i)=>{
                return  <h4 key={i} className='w-25 m-auto bg-warning p-3'>
                    {e.name} is {e.age} years old
                </h4>
            })
        }
        
    </div>
  )
}
