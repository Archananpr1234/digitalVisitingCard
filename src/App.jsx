import { useState } from 'react'
import './App.css'
import Navbar from './components/navbar/Navbar'
import AboutUs from './components/about/AboutUs'
import Services from './components/service/Services'
import Features from './components/features/Features'
import Pricing from './components/pricing/Pricing'
import DemoVideos from './components/demovideos/DemoVideos'
import ContactUs from './components/contactus/ContactUs'
import Footer from './components/footer/footer'
import Home from './components/home/Home'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar/>
      <Home/>
      <AboutUs/>
      <Services/>
      <Features/>
      <Pricing/>
      <DemoVideos/>
      <ContactUs/>
      <Footer/>


    </>
  )
}

export default App
