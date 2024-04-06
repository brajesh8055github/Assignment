import React, { useEffect } from 'react'
import hero1 from '../images/hero1.svg'
import AOS from 'aos'
import 'aos/dist/aos.css'
const Meet = () => {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, [])
  return (
    <div className='hero' data-aos="fade-up">
      <div className='meet'>
        <div className='left'>
          <p>Built out of frustation</p>
          <h1 data-aos="fade-right">Meet the ahead app</h1>
          <img src={hero1} alt='img' className='meet-img'></img>
        </div>
        <div className='right'>
          <p>A personalized pocket coach that provides bite-sized, science-driven tools to boost emotional intelligence.</p>
          <p>Think of it as a pocket cheerleader towards a better, more fullfilling.</p>
        </div>
      </div>
    </div>
  )
}

export default Meet