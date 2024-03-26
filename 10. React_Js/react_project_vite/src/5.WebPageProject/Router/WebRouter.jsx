
import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
// import WebHeader from '../Componant/WebHeader'
import AllProduct from '../Pages/AllProduct'
import CasualBackPacks from '../Pages/CasualBackPacks'
import Professional from '../Pages/Professional'
import Travel from '../Pages/Travel'
import Sports from '../Pages/Sports'
import SchoolBags from '../Pages/SchoolBags'
import CorporateGifting from '../Pages/CorporateGifting'
import BestOffer from '../Pages/BestOffer'
import LunchBags from '../Pages/LunchBags'
import Blogs from '../Pages/Blogs'
import ContactUs from '../Pages/ContactUs'
import WebHeader from '../Componant/MainHeader/WebHeader'
import WebNav from '../Componant/SubHeader/WebNav'
import BodyImage from '../Componant/ImageBody/BodyImage'
import Slider from '../Componant/Slider/Slider'
import Collection from '../Componant/Collection/Collection'
// import WebNav from '../Componant/WebNav'

export default function WebRouter() {
  return (
    <>
    {/* <div>WebRouter</div> */}

    <BrowserRouter>
    <WebHeader/>
    <WebNav/>
    <BodyImage/>
    <Slider/>
    <Collection/>
    <Routes>
        <Route path='/allproduct' element={<AllProduct/>} />
        <Route path='/casualbackpacks' element={<CasualBackPacks/>}/>
        <Route path='/professional' element={<Professional/>} />
        <Route path='/travel' element={<Travel/>} />
        <Route path='/sports' element={<Sports/>} />
        <Route path='/schoolbags' element={<SchoolBags/>} />
        <Route path='/corporategift' element={<CorporateGifting/>} />
        <Route path='/bestoffer' element={<BestOffer/>} />
        <Route path='/lunchbags' element={<LunchBags/>} />
        <Route path='/blogs' element={<Blogs/>} />
        <Route path='/contactUs' element={<ContactUs/>} />
    </Routes>
    </BrowserRouter>
    </>
  )
}
