import React, { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
const Eqiq = () => {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, [])
  return (
    <div className='hero' data-aos="fade-zoom-in">
      <div className='eqiq'>
        <div className='eqiq-card'>
          <h2 data-aos="fade-right">Be the best you with EQ</h2>
        </div>
        <div className='eqiq-card' data-aos="fade-left">
          <p>Not having your own emotions under control might be holding your back.</p>
        </div>
        <div className='eqiq-card' data-aos="fade-left">
          <p>Additionally, not understanding those of others stops you from being parent, friend you can be.</p>
        </div>
      </div>
    </div>
  )
}

export default Eqiq