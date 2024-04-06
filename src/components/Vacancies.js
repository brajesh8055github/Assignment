import React, { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
const Vacancies = () => {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, [])
  return (
    <div className='hero' data-aos="fade-up">
      <h1>Open vacancies</h1>
      <div className='vacancies'>
        <div className='card' data-aos="fade-right">
          <h5>Senior Full-Stack Engineer</h5>
          <ul>
            <li>Full-time position</li>
            <li>Berlin or remote</li>
            <li>€65-85k, 0.5-1.50% equity share options</li>
          </ul>
          <button className='btn-n hidden' data-aos="fade-left">See details</button>
        </div>
        <div className='card' data-aos="fade-up">
          <h5>Senior Designer</h5>
          <ul>
            <li>Full-time position</li>
            <li>Berlin or remote</li>
            <li>€40-55k, 0.25-0.50% equity share options</li>
          </ul>
          <button className='btn-n hidden' data-aos="fade-up">See details</button>
        </div>
        <div className='card' data-aos="fade-left">
          <h5>Superstar Intern</h5>
          <ul>
            <li>Full-time position</li>
            <li>Berlin or remote</li>
            <li>€20-24k, 0.5-1.50% equity share options</li>
          </ul>
          <button className='btn-n hidden' data-aos="fade-left">See details</button>
        </div>
      </div>
    </div>
  )
}

export default Vacancies