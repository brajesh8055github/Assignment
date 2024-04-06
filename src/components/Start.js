import React, { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
const Start = () => {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, [])
  return (
    <div className='hero' data-aos="fade-up">
      <div className='start'>
        <p>We take privacy seriously</p>
        <h2>Before you get started</h2>
        <p>"We won't share your answers with anyone (and won't ever tell you which friends said what about you)"</p>
        <p>with  love.</p>
        <button className='btn-n' data-aos="fade-right" >Start a test</button>
        <p>Take only 5 minutes</p>
      </div>
    </div>
  )
}

export default Start