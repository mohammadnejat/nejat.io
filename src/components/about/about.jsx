import React from 'react'
import ME from '../../assets/img4.jpg'
import { BsFillBookmarkCheckFill } from "react-icons/bs"
import { BiUserPlus } from "react-icons/bi"
import { AiOutlineFundProjectionScreen } from "react-icons/ai"
import "./about.css"

const about = () => {
  return (
    <section id='about'>
      <div className='text__about'>
        <h5>Get To Know</h5>
        <h2>About Me</h2>
      </div>

      <div className='container about__container'>
        <div className='about__me'>
          <div className='about__me-image'>
            <img src={ME} alt="#" />
          </div>
        </div>


        <div className='about__content'>
          <div className='about__cards'>
            <article className='about_card'>
              <BsFillBookmarkCheckFill className='about__icons' />
              <h5>Experience</h5>
              <small>1 Year Experience</small>
            </article>

            <article className='about_card'>
              <BiUserPlus className='about__icons' />
              <h5>Clients</h5>
              <small>20+ Clients</small>
            </article>


            <article className='about_card'>
              <AiOutlineFundProjectionScreen className='about__icons' />
              <h5>Projects</h5>
              <small>+10 Projects Completed</small>
            </article>
          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse perferendis nam assumenda dolore, accusantium eligendi non odio sunt pariatur labore ab optio odit neque obcaecati ipsam sit a. Veritatis, earum.</p>
          <div className='btn__about'>
            <a href="#" className='btn btn-primary'>Let's Talk</a>
          </div>

        </div>
      </div>


    </section>
  )
}

export default about