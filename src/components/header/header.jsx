import React from 'react'
import CTA from './CTA'
import ME from '../../assets/img1.png'
import HeaderSocials from './HeaderSocials'
import "./header.css"

const header = () => {
  return (
    <header id='home'>

      <div className="container header__container">
        <div className='header__text'>
        <h5>Hello I'm</h5>
        <h1>Mohammad</h1>
        </div>
        <h5 className="text-light">Front End Developer</h5>
        <CTA />

        <a href="#contact" className='scroll__down'>Scroll Down</a>

        
          <HeaderSocials />
          <div className='me'>
            <img src={ME} alt="me" />
          </div>
        

      </div>
    </header>
  )
}

export default header