import React from 'react'
import { BiCheck } from 'react-icons/bi'
import "./services.css"

const services = () => {
  return (
    <section id='services'>
      <div className='services__text'>
        <h4 className='text-light'>What I Offer</h4>
        <h2>Services</h2>
      </div>
      <div className='container services__container'>
        <div className='services__card-header'>
          <div className='services__card'>
          <h3 className='exp_card-title'>UI/UX Design</h3>
          </div>
            <ul className='services__ul'>
              <li><BiCheck className='services__icons' />Lorem, ipsum dolor sit amet consectetur adipisicing elit.</li>
              <li><BiCheck className='services__icons' />Lorem, ipsum dolor sit amet consectetur adipisicing elit.</li>
              <li><BiCheck className='services__icons' />Lorem, ipsum dolor sit amet consectetur adipisicing elit.</li>
              <li><BiCheck className='services__icons' />Lorem, ipsum dolor sit amet consectetur adipisicing elit.</li>
              <li><BiCheck className='services__icons' />Lorem, ipsum dolor sit amet consectetur adipisicing elit.</li>
            </ul>
        </div>
        
        <div className='services__card-header'>
          <div className='services__card'>
          <h3 className='exp_card-title'>Web Developemnt</h3>
          </div>
            <ul className='services__ul'>
              <li><BiCheck className='services__icons' />Lorem, ipsum dolor sit amet consectetur adipisicing elit.</li>
              <li><BiCheck className='services__icons' />Lorem, ipsum dolor sit amet consectetur adipisicing elit.</li>
              <li><BiCheck className='services__icons' />Lorem, ipsum dolor sit amet consectetur adipisicing elit.</li>
              <li><BiCheck className='services__icons' />Lorem, ipsum dolor sit amet consectetur adipisicing elit.</li>
              <li><BiCheck className='services__icons' />Lorem, ipsum dolor sit amet consectetur adipisicing elit.</li>
              <li><BiCheck className='services__icons' />Lorem, ipsum dolor sit amet consectetur adipisicing elit.</li>
            </ul>
        </div>

        <div className='services__card-header'>
          <div className='services__card'>
          <h3 className='exp_card-title'>Content Creation</h3>
          </div>
            <ul className='services__ul'>
              <li><BiCheck className='services__icons' />Lorem, ipsum dolor sit amet consectetur adipisicing elit.</li>
              <li><BiCheck className='services__icons' />Lorem, ipsum dolor sit amet consectetur adipisicing elit.</li>
              <li><BiCheck className='services__icons' />Lorem, ipsum dolor sit amet consectetur adipisicing elit.</li>
              <li><BiCheck className='services__icons' />Lorem, ipsum dolor sit amet consectetur adipisicing elit.</li>
              <li><BiCheck className='services__icons' />Lorem, ipsum dolor sit amet consectetur adipisicing elit.</li>
            </ul>
          </div>
      </div>
    </section>
  )
}

export default services