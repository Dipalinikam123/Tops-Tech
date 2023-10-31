import React from 'react'
import  Contact from './Contact'
import  Home from './Home'
import Service from './Service'
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'
import PageNotFound from './PageNotFound'
import Navbaaar from './Navbaaar'
import Car from './Car'
import Bike from './Bike'

export default function Router() {
  return (
    <>
    <BrowserRouter>
      <Navbaaar/>
  
  <Routes>
    <Route path='' element={<Home/>}/>
    <Route path='/contact' element={<Contact/>}/>
    <Route path='/service' element={<Service/>}/>
    <Route path='/service/car' element={<Car/>}/>
    <Route path='/service/bike' element={<Bike/>}/>
    <Route path='*' Component={PageNotFound}/>
  </Routes>
  {/* <Home/>
  <Contact/>
  <Service/> */}
</BrowserRouter>
    </>
  )
}



      {/* <BrowserRouter>

      <ul className='d-flex gap-5 justify-content-center p-4 fs-5'>
        <li><Link to={"/home"}>Home</Link></li>
        <li><Link to={"/service"}>Service</Link></li>
        <li><Link to={"/contact"}>contact us</Link></li>

      </ul>

        <Routes>
          <Route path='/home' element={<Home/>}/>
          <Route path='/contact' element={<Contact/>}/>
          <Route path='/service' element={<Service/>}/>
          <Route path='*' Component={PageNotFound}/>
        </Routes>
      </BrowserRouter>
 
 */}
