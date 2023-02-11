import React from 'react'
import "./nav.css"
import { AiFillHome } from "react-icons/ai"
import { BiUserCircle } from "react-icons/bi"
import { FaBook } from "react-icons/fa"
import { RiCustomerService2Fill } from "react-icons/ri"
import { BiMessageRoundedDots } from "react-icons/bi"
import { useState } from 'react'


function Nav() {
  const [activeNav, setActiveNav] = useState('')

  
  return (
    
    <nav>
      <a href="#home" onClick={() => setActiveNav('#home')} className={activeNav === '#home' ? 'active' : ''}><AiFillHome/></a>
      <a href="#about" onClick={() => setActiveNav('#about')} className={activeNav === '#about' ? 'active' : ''}><BiUserCircle/></a>
      <a href="#experience" onClick={() => setActiveNav('#experience')} className={activeNav === '#experience' ? 'active' : ''}><FaBook/></a>
      <a href="#services" onClick={() => setActiveNav('#services')} className={activeNav === '#services' ? 'active' : ''}><RiCustomerService2Fill/></a>
      <a href="#contact" onClick={() => setActiveNav('#contact')} className={activeNav === '#contact' ? 'active' : ''}><BiMessageRoundedDots/></a>
    </nav>
    
  )
}

export default Nav