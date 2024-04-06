import React, { useEffect } from 'react'
import app from '../images/app-store.png'
import hero from '../images/hero.svg'
import AOS from 'aos'
import 'aos/dist/aos.css'
const Hero = () => {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, [])
  return (
    <div className='hero' data-aos="slide-up">
      <div className='hero-hero'>
        <div className='left'>
          <p>Ahead app</p>
          <h1>Master your life by mastering emotions</h1>
          <div className='rating'>
            <div className='hero-flex'>
              <a href='https://apps.apple.com/us/app/ahead-emotions-coach/id1570430177?mt=8'><img style={{ maxWidth: "120px", margin: "0 5px" }} src={app} alt='img'></img></a>
              <div>
                <div style={{ color: "rgb(255, 153, 0)" }}>
                  <i class="bi bi-star-fill"></i>
                  <i class="bi bi-star-fill"></i>
                  <i class="bi bi-star-fill"></i>
                  <i class="bi bi-star-fill"></i>
                  <i class="bi bi-star-fill"></i>
                </div>
                <p style={{ margin: "0" }}>100+ AppStore reviews</p>
              </div>
            </div>
          </div>
        </div>
        <div className='right'>
          <img src={hero} alt='img'></img>
        </div>
      </div>
    </div>
  )
}

export default Hero