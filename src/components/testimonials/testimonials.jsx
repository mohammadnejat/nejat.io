import React from "react";
import "./testimonials.css";
import img1 from '../../assets/swiper1.jpg';
import img2 from '../../assets/swiper2.jpg';
import img3 from '../../assets/swiper3.jpg';
import img4 from '../../assets/swiper4.jpg';
import img5 from '../../assets/swiper5.jpg';
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";


// import required modules
import { Pagination, Navigation } from "swiper";




const testimonials = () => {

  const swiperT = [
    { id: 1, images: img1, title: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Temporibus,  adipisicing elit quod.', name: 'Shanx lava' },
    { id: 2, images: img2, title: 'Lorem amet consecteturipsum dolor sit,  amet consectetur adipisicing elit. Temporibus, quod amet consectetur adipisicing elit. Temporibus, quod.', name: 'Laria Xns' },
    { id: 3, images: img3, title: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Temporibus, quod.', name: 'Rihana Lopez' },
    { id: 4, images: img4, title: 'Lorem amet consectetur adipising elzit. ipsum dolor sit, amet consectetur adipisicing elit. Temporibus, quod.', name: 'Nina Snow' },
    { id: 5, images: img5, title: 'Lorem  amet consectetur adipisicing elit. Temporibus, quod ipsum dolor sit, amet consectetur adipisicing elit. Temporibus, quod.', name: 'John Lee' },
  ]

  return (
    <section id="testmonials">
      <div className='testmonials__text-header'>
        <h5 className='text-light'>Review from clients</h5>
        <h2>Testimonials</h2>
      </div>
      <Swiper pagination={true} modules={[Pagination]} spaceBetween={40} className="mySwiper">
        {
          swiperT.map(({ images, title, name }, index) => {
            return (
              <>

                <SwiperSlide className='images__swiper'>
                  <article key={index} className='image__swiper'>
                    <div className='client__avatar'>
                      <img className='avatar' src={images} />
                    </div>

                    <div className='swiper__text'>
                      <h4>{name}</h4>
                      <p>{title}</p>
                    </div>
                  </article>
                </SwiperSlide>

              </>
            )
          }
          )}
      </Swiper>

    </section>
  )
}

export default testimonials