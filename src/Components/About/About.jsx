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
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum suscipit, ullam eveniet earum atque repudiandae eum doloribus beatae delectus corrupti odio rem reprehenderit! Assumenda, reprehenderit!
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
