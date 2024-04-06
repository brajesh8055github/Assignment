import React from 'react'
import logo from '../images/logowebp.webp'
const Navbar = () => {
  return (
    <div className='hero'>
      <nav class="navbar navbar-expand-lg py-0">
        <div class="container-fluid">
          <div className='logo navbar-brand me-auto '>
            <img src={logo} alt='Logo'></img>
          </div>
          <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
            <div class="offcanvas-header">
              <div className='logo navbar-brand me-auto '>
                <img src={logo} alt='Logo'></img>
              </div>
              <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
            </div>
            <div class="offcanvas-body">
              <ul class="navbar-nav justify-content-center flex-grow-1 pe-3">
                <li class="nav-item">
                  <a class="nav-link active" aria-current="page" href="/">Emotions</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link active" href="/">Manifesto</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link active" aria-current="page" href="/">Self-awarness test</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link active" aria-current="page" href="/">Work With Us</a>
                </li>
              </ul>
            </div>
          </div>
          <a href='https://apps.apple.com/us/app/ahead-emotions-coach/id1570430177?mt=8' ><button className='btn-n'>Download now</button></a>
          <button class="navbar-toggler shadow-none" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
        </div>
      </nav>
    </div>
  )
}
export default Navbar




