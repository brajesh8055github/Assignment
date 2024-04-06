import React, { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
const Improvement = () => {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, [])
  return (
    <div className='hero' data-aos="fade-up">
      <div className='improvement'>
        <p>Wrong with self-improvement & how we're fixing it.</p>
        <h1 data-aos="fade-right">Self-improvement. Ugh.</h1>
        <div className='track'>
          <div className='track-status' data-aos="fade-left">
            <h6>It's not as easy as 1-2-3.</h6>
            <p>The journey of change may be long, but our sessions are quick. We get ot the point and tell what you want to know (and nothing else).</p>
          </div>
          <div className='track-status' data-aos="fade-left">
            <h6>Old habits are hard to break.</h6>
            <p>And bad behavoiurs die hard.Fortunately,we give you great,science-bacend techniques to use.</p>
          </div>
          <div className='track-status' data-aos="fade-left">
            <h6>You and your motivation don't have a long=term relationship.</h6>
            <p>Luckily,we can proactively prepare you for the marathon,not just the race. Effective, memorial exercises will help you stick to your goals.</p>
          </div>
          <div className='track-status' data-aos="fade-left">
            <h6>Books just don't offer practical solutions.</h6>
            <p>Remember when you learned to ride a bike just by reading? Yeah we don't either point and tell what you want to know (and nothing else).</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Improvement