import React, { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
const Work = () => {
    useEffect(() => {
        AOS.init({ duration: 2000 });
    }, [])
    return (
        <div className='hero' data-aos="slide-up">
            <div className='work'>
                <div className='left'>
                    <h1 data-aos="fade-right">Work with us</h1>
                    <div className='work-card-l'>
                        <h4>About</h4>
                        <p>At ahead out goal is to make self-improvement fun and lasting. We know there's a way how to make it work. And that's what aHead is all about!</p>
                    </div>
                    <div style={{ background: "#faf4c477", borderRadius: "20px", margin: "-5px" }} className='work-card-l' >
                        <h4>Product</h4>
                        <p>Sure,you could spend ages reading books or sitting in seminars on how to become a better spouse, parent, or manager - like we did...</p>
                    </div>
                </div>
                <div>
                    <h1 style={{ textAlign: "right", color: "blue" }} data-aos="fade-left">ahead</h1>
                    <div className='right'>
                        <div className='work-card-r'>
                            <h5>Power through, even when the going gets tough</h5>
                            <p>We help you spot and work around whatever stands in the way, be it bad habits, fears, etc.</p>
                        </div>
                        <div className='work-card-r'>
                            <h5>Learn more about who you are and where you want to go</h5>
                            <p>We ask the right questions to help you better understand why you do things the way you do.</p>
                        </div>
                        <div className='work-card-r'>
                            <h5>Play and grow together with others on the same journey</h5>
                            <p>Ahead feel like a game, not like a chore.See yourself grow every day towards achieving your goals!</p>
                        </div>
                        <div className='work-card-r'>
                            <h5>Power through, even when the going gets tough</h5>
                            <p>We help you spot and work around whatever stands in the way, be it bad habits, fears, etc.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Work