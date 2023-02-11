import React from 'react'
import PortfolioCards from './portfolioCards'
import image1 from '../../assets/portfolio.jpg'
import image2 from '../../assets/portfolio2.jpg'
import image3 from '../../assets/portfolio3.jpg'
import image4 from '../../assets/portfolio4.jpg'
import image5 from '../../assets/portfolio5.jpg'
import image6 from '../../assets/portfolio6.jpg'
import "./portfolio.css"

const portfolio = () => {
  const cards = [
    { id: 1, image: image1, p: "Lorem ipsum dolor sit amet consectetur adipisicing elit." },
    { id: 2, image: image2, p: "Lorem ipsum dolor sit amet consectetur adipisicing elit." },
    { id: 3, image: image3, p: "Lorem ipsum dolor sit amet consectetur adipisicing elit." },
    { id: 4, image: image4, p: "Lorem ipsum dolor sit amet consectetur adipisicing elit." },
    { id: 5, image: image5, p: "Lorem ipsum dolor sit amet consectetur adipisicing elit." },
    { id: 6, image: image6, p: "Lorem ipsum dolor sit amet consectetur adipisicing elit." },
  ]
  return (
    <section className='portfolio'>
      <div className='container container__portfolio'>
        <div className='portfolio__header-text'>
          <h5 className='text-light'>My Recent Work</h5>
          <h2>Portfolio</h2>
        </div>

        <div className='portfolio__cards'>
          <PortfolioCards  {...cards[0]} />
          <PortfolioCards  {...cards[1]} />
          <PortfolioCards  {...cards[2]} />
          <PortfolioCards  {...cards[3]} />
          <PortfolioCards  {...cards[4]} />
          <PortfolioCards  {...cards[5]} />
        </div>
      </div>
    </section>

  )
}

export default portfolio