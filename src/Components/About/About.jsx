import React from 'react'
import './About.css'
import abt_img from '../../assets/about.svg'

const About = () => {
  return (
    <div id='about' className='about'>
      <div className="about-title">
        <h1>About me</h1>
      </div>
      <div className="about-sections">
        <div className="about-left">
            <img src={abt_img} alt="" />
        </div>
        <div className="about-right">
            <div className="about-para">
                <p>
                I'm Abhishek Kumar, a third-year student at IIT BHU with a passion for coding and building things. I love diving into the world of data structures and algorithms, finding creative solutions to complex problems. My interests extend to both web development and Android app development, where I enjoy bringing ideas to life through intuitive interfaces. I'm constantly learning and seeking new challenges, always eager to contribute my problem-solving skills and technical expertise to innovative projects.
                </p>
            </div>
            <div className="about-skills">
                <div className="about-skill">
                    <p>C++</p><hr style={{width:"70%"}} />
                </div>
                <div className="about-skill">
                    <p>C Language</p><hr style={{width:"70%"}} />
                </div>
                <div className="about-skill">
                    <p>HTML & CSS </p><hr style={{width:"60%"}} />
                </div>
                <div className="about-skill">
                    <p>Python</p><hr style={{width:"50%"}} />
                </div>
                <div className="about-skill">
                    <p>Kotlin</p><hr style={{width:"20%"}} />
                </div>
                <div className="about-skill">
                    <p>Jetpack Compose</p><hr style={{width:"20%"}} />
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default About
