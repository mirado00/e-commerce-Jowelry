import React, { useEffect } from 'react'
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import Test from './components/Test/Test'
import Evenement from './components/Evenement/Evenement'
import Products from './components/Products/Products'
import ListProducts from './components/ListProducts/ListProducts'
import Services from './components/Services/Services'
import Footer from './components/Footer/Footer'
import Mode from './components/Mode/Mode'
import OurJowelry from './components/OurJowelry/OurJowelry'
import AOS from 'aos'
import 'aos/dist/aos.css'

const App = () => {
    useEffect(() => {
        AOS.init({
            duration: 800,
            offset: 50,
            once: false,
        })
    }, [])
    return (
        <>
            <Navbar />
            <Hero />
            <Mode></Mode>
            <Evenement></Evenement>
            <Products></Products>
            <ListProducts />
            {/* <OurJowelry></OurJowelry> */}
            {/* <Test /> */}
            {/* <Services /> */}
            <Footer></Footer>
        </>
    )
}

export default App
