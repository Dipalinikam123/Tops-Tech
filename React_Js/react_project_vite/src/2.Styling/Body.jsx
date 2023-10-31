import React from 'react'
import images from "../0.Images/fruitesImage.jpg"
import { Button, InputGroup } from 'react-bootstrap'
import {Input} from 'reactstrap'


export default function Body() {
  return (
    <div>

<header style={{ paddingLeft: 0 }}>
      <div
        className='p-5 text-center bg-image'
        style={{ backgroundImage: `url(${images})`, height: 600 , backgroundPosition: "center" ,backgroundRepeat:"no-repeat", backgroundSize:"cover"}}
      >

        <div className="container">

        <div className='mask'>
          <div className='d-flex  h-100'>
            <div>
              <h1 className='mb-5 text'>Don't miss amazing <br />
              grocery deals
              </h1>
              <h5 className='mb-3 text-dark'>Sign up for the daily newsletter</h5>
            </div>  
          </div>
        </div>

        <div>
            <InputGroup className='w-50 mt-4'>
              <Input placeholder='Your email address' id='btn-round' />
                <Button className='border border-2' id='round'>
                 Subscribe
                </Button>
          </InputGroup>
        </div>

        </div>  

       
      </div>
    </header>
    </div>
  )
}