import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Button } from 'reactstrap';
import {decrementByTen, incrementByFive, incrementByOne} from '../../Feature/Count/counter'

export default function Counter() {
  let data = useSelector((store) => {
      return store?.countReducer?.count;
    
})

let dispatch = useDispatch();

  console.log("🚀 ~ data ~ data:============", data)


  return (
    <div style={{width:"100%",display:"flex", flexDirection:"column",alignItems:"center"}}>
    
    <div className='mb-4 mt-4'>Counter is {data}</div>
    <Button color='danger' className='mb-2' onClick={()=>dispatch(incrementByOne())}>Increment_1</Button>
    <Button color='danger' className='mb-2' onClick={()=>dispatch(incrementByFive())}>Increment_5</Button>
    <Button color='danger' onClick={()=>dispatch(decrementByTen())}>Decrement_10</Button>
    </div>
  )
}
