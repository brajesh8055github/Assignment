import React, { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
const Socialskills = () => {
    useEffect(() => {
        AOS.init({ duration: 2000 });
    }, [])
    return (
        <div className='hero' data-aos="fade-up">
            <div className='social-skills'>
                <p>Let your friends, family, and co-workers (anonymously) rate your social skills.</p>
                <h1 data-aos="fade-right">Ever wondered what others think of you?</h1>
                <div className='menu-track'>
                    <div className='menu-track-flex'>
                        <div className='menu-track-card'>
                            <small>1</small>
                            <p style={{ fontSize: "15px" }}>Answer questions on social skills</p>
                        </div>
                        <div className='menu-track-card'>
                            <small>2</small>
                            <p style={{ fontSize: "15px" }}>Let others anonymously answer the same questions about you</p>
                        </div>
                        <div className='menu-track-card'>
                            <small>3</small>
                            <p style={{ fontSize: "15px" }}>Find out where you and others see things the same way - and where not!</p>
                        </div>
                    </div>
                    <section class="step-wizard">
                        <ul class="step-wizard-list">
                            <li class="step-wizard-item ">
                                <span class="progress-count">3</span>
                                <span style={{ border: "1px solid #ff9811;", background: "blue", color: "#fff", padding: "5px", borderRadius: "10px" }} class="progress-label" data-aos="fade-right">You</span>
                            </li>
                            <li class="step-wizard-item ">
                                <span class="progress-count">3</span>
                                <span style={{ border: "1px solid #ff9811;", background: "dodgerblue", color: "#fff", padding: "5px", borderRadius: "10px" }} class="progress-label" data-aos="fade-left">Anonymonos2</span>
                            </li>
                            <li class="step-wizard-item ">
                                <span class="progress-count">3</span>
                                <span style={{ border: "1px solid #ff9811;", background: "#ff9811", color: "#fff", padding: "5px", borderRadius: "10px" }} class="progress-label" data-aos="fade-right">Anonymonos2</span>
                            </li>
                            <li class="step-wizard-item">
                                <span class="progress-count">4</span>
                                <span style={{ border: "1px solid #00ab7a;", background: "#00ab7a", color: "#fff", padding: "5px 0px", borderRadius: "10px" }} class="progress-label" data-aos="fade-left">Anonymonos3</span>
                            </li>
                        </ul>
                    </section>
                </div>
            </div>
        </div>
    )
}

export default Socialskills