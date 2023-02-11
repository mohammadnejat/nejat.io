import React from 'react'


const portfolioCards = (props) => {

  const {image, p} = props

  return ( 
    <>
    <div className='portfolio__card'>
      <div className='protfolio__image'>
        <img src= {image} alt="#" />
      </div>
      <div className='protfolio__card-text'>
        <p>{p}</p>
        <a href="#" className='btn '>Github</a>
        <a href="#" className='btn btn-primary'>Live Demo</a>
      </div>
    </div>
    </>
  )
}

export default portfolioCards