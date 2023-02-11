import React from 'react'
import { BsPatchCheckFill } from "react-icons/bs"
import "./experience.css"

const experience = () => {
  return (
    <section id='experience'>
      <div className='experience__text'>
        <h5>What Skills I Have</h5>
        <h2>My Experience</h2>
      </div>

      <div className="container container__experience">
        <div className='front__end'>
          <div className='exp_card_text'>
            <h3>Frontend Development</h3>
          </div>
          <div className='card__text'>

          <article className='experience__details'>
              <BsPatchCheckFill className='exp_icons'/>
              <div>
                <h4>HTML</h4>
                <small className='text-light'>experineced</small>
              </div>

            </article>
            <article className='experience__details'>
              <BsPatchCheckFill className='exp_icons'/>
              <div>
                <h4>CSS</h4>
                <small className='text-light'>experineced</small>
              </div>

            </article><article className='experience__details'>
              <BsPatchCheckFill className='exp_icons'/>
              <div>
                <h4>JavaScript</h4>
                <small className='text-light'>experineced</small>
              </div>

            </article><article className='experience__details'>
              <BsPatchCheckFill className='exp_icons'/>
              <div>
                <h4>Bootstrap</h4>
                <small className='text-light'>experineced</small>
              </div>

            </article><article className='experience__details'>
              <BsPatchCheckFill className='exp_icons'/>
              <div>
                <h4>React</h4>
                <small className='text-light'>experineced</small>
              </div>
            </article>

          </div>
        </div>

        <div className='back__end'>
          <div className='exp_card_text'>
            <h3>Backend Development</h3>
          </div>
          <div className='card__text'>

            <article className='experience__details'>
              <BsPatchCheckFill className='exp_icons'/>
              <div>
                <h4>Node JS</h4>
                <small className='text-light'>experineced</small>
              </div>
            </article>

            <article className='experience__details'>
              <BsPatchCheckFill className='exp_icons'/>
              <div>
                <h4>Python</h4>
                <small className='text-light'>experineced</small>
              </div>
            </article>

            <article className='experience__details'>
              <BsPatchCheckFill className='exp_icons'/>
              <div>
                <h4>PHP</h4>
                <small className='text-light'>experineced</small>
              </div>
            </article>

            <article className='experience__details'>
              <BsPatchCheckFill className='exp_icons'/>
              <div>
                <h4>MySQL</h4>
                <small className='text-light'>experineced</small>
              </div>
            </article>

            <article className='experience__details'>
              <BsPatchCheckFill className='exp_icons'/>
              <div>
                <h4>MongoDB</h4>
                <small className='text-light'>experineced</small>
              </div>
            </article>
            
          </div>
        </div>
      </div>
    </section>
  )
}


export default experience