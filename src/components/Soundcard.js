import React, { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
const Soundcard = () => {
    useEffect(() => {
        AOS.init({ duration: 2000 });
    }, [])
    return (
        <div className='hero' >
            <h1 data-aos="fade-right">Does this sound familiar...</h1>
            <div className='sound' >
                <div style={{ background: "#cdf0ff8e" }} className='sound-card' data-aos="fade-left">
                    <span>😞</span>
                    <h5>You argue with a colleague</h5>
                    <p>You get angry defensive, instead of staying open working towards common ground.</p>
                </div>
                <div style={{ background: "#efd9fe8e" }} className='sound-card' data-aos="fade-left">
                    <span>😳</span>
                    <h5>You attend a class reunion</h5>
                    <p>You compare yourself with your achievements, instead of many self-judgement more independents and others.</p>

                </div>
                <div style={{ background: "dodgerblue", color: "#fff" }} className='sound-card' data-aos="fade-left">
                    <span>🙄</span>
                    <h5>You quabble with your partner</h5>
                    <p>You question yourself and wonder when they'll realize you're an unqualified imposter, instead of trusting yourself & your abilities.</p>
                </div>
                <div style={{ background: "#faf4c477" }} className='sound-card' data-aos="fade-left">
                    <span>😑</span>
                    <h5>You argue with a colleague</h5>
                    <p>You get angry defensive, instead of staying open working towards common ground.</p>
                </div>
            </div>
        </div>
    )
}

export default Soundcard