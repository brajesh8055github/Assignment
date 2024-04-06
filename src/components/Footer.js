import React from 'react'
import app from '../images/app-store.png'
const Footer = () => {
  return (
    <div style={{ textAlign: "center" }} className='hero'>
      <div className='footer-w'>
        <h2 style={{ color: "blue" }}>ahead</h2>
        <div className='footer'>
          <div className='footer-flex'>
            <i class="bi bi-geo-alt-fill"></i>
            <p>AuguststraBe 26, 10117 Berlin</p>
          </div>
          <div className='footer-flex'>
            <i class="bi bi-envelope-fill"></i>
            <p>hi@ahead-app.com</p></div>
        </div>
        <a href='https://apps.apple.com/us/app/ahead-emotions-coach/id1570430177?mt=8'><img style={{ maxWidth: "120px" }} src={app} alt='img'></img></a>
        <p>©2022 Ahead app. All right reserved</p>
      </div>
    </div>
  )
}

export default Footer