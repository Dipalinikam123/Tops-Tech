import React from 'react'
import CardName from './CardName'

export default function Mapkeyy() {
    const arr = ["world","earth","monkey"]
  return (
    <>
    {/* {
        arr.map((e,i)=>{
            return <h1 key={i}>name is {e}</h1>
        })
    } */}

{
        arr.map((e,i)=>{
            return <CardName key={i}/>
        })
    }
    </>
  )
}
