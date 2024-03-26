import React from 'react'
import bodyImage from '../../Logo/bodyImage.webp'
import { Button } from 'reactstrap'
import './BodyImage.css'

export default function BodyImage() {
  return (
    <>
    <div className='p-relative'>
    <img src={bodyImage} alt="" />
    </div>
    <div className='p-absolute'>
    <Button>Shop Now</Button>
    </div>
    </>
  )
}
