import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'

import React from 'react'

import Home from './Ui/Pages/Home';
import Contact from './Ui/Pages/Contact';
import Service from './Ui/Pages/Service';
import Car from './Ui/Pages/Car';
import Bike from './Ui/Pages/Bike';
import PageNotFound from './Ui/Pages/PageNotFound';
import Navbaaar from './Ui/Componants/NavBar/Navbaaar';
import SinglePage from './Product_s/SinglePage';
import Product from './Product_s/Product';
import Footer from './Ui/Componants/Footer/Footer';

export default function RouterPage() {
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
    <Route path='/product' element={<Product/>}/>
    <Route path='/singlepage/:id' element={<SinglePage/>}/>
    <Route path='*' Component={PageNotFound}/>
  </Routes>
    <Footer/>
</BrowserRouter>
    </>
  );
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
