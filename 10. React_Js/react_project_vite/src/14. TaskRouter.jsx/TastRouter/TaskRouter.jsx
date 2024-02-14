import React from 'react'
import Header1 from '../ui/componant/Header1'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from '../ui/pages/Home'
import Contact from '../ui/pages/Contact'
import Admin from '../ui/pages/Admin'

export default function TaskRouter() {
  return (
    <div>
        <BrowserRouter>
        <Header1/>
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/contact' element={<Contact/>}/>
            <Route path='/admin' element={<Admin/>}/>
        </Routes>
        </BrowserRouter>
    </div>
  )
}
