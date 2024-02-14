import React, { Component } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Header from '../ui3/Componant3/Header'
import Home from '../ui3/Pages/Home'
import About from '../ui3/Pages/About'
import Admin from '../ui3/Pages/Admin'
// import About from '../ui/Pages/About'
// import Home from '../ui/Pages/Home'
// import Header from '../ui/Components/Header/Header'
// import Footer from '../ui/Components/Footer/Footer'
// import Profile from '../ui/Pages/Profile'
// import Admin from '../ui/Pages/Admin'

export default function Router() {
    return (
        <>
            <BrowserRouter>
                <Header />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/admin" element={<Admin/>}/>
                </Routes>
                {/* <Footer /> */}
            </BrowserRouter>
        </>
    )
}
