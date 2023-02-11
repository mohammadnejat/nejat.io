import React from 'react'
import "./footer.css"
import { BsFacebook } from 'react-icons/bs'
import { BsInstagram } from 'react-icons/bs'
import { AiOutlineTwitter } from 'react-icons/ai'




const Footer = () => {
  return (
    <section className='footer'>
      <div className='footer__text'>
        <h2 >2Fast4U</h2>
      </div>

      <div>
        <ul className='footer__text'>
          <li><a href="">Home</a></li>
          <li><a href="">About</a></li>
          <li><a href="">Experience</a></li>
          <li><a href="">Services</a></li>
          <li><a href="">Portfolio</a></li>
          <li><a href="">Testmonials</a></li>
          <li><a href="">Contact</a></li>
        </ul>
        <div className='icons'>
          <a href="#"><BsFacebook className='icon' /></a>
          <a href="#"><BsInstagram className='icon' /></a>
          <a href="#"><AiOutlineTwitter className='icon' /></a>
        </div>
        <div className='footer__p'>
        <p className='footer__small'>@2Fast4U. All rights reserved.</p>
        </div>
      </div>
    </section>
  )
}

export default Footer