import React from 'react'
import './about.css'
import ME from '../../assets/me.jpeg'
import { RiAwardFill } from 'react-icons/ri'
import { AiOutlineFundProjectionScreen } from 'react-icons/ai'
import { FaUniversity } from 'react-icons/fa'
const About = () => {
    return (
        <section id='about'>
            <h5>Get To Know</h5>
            <h2>About Me</h2>
            <div className="container about__container">
                <div className="about__me">
                    <div className="about__me-image">
                        <img src='images/me.jpeg' alt=""></img>
                    </div>

                </div>
                <div className="about__content">
                    <div className="about__cards">
                        <article className="about__card">
                            <RiAwardFill className="about__icon" />
                            <h5>Experience</h5>
                            <small>1+ year experience</small>
                        </article>
                        <article className="about__card">
                            <AiOutlineFundProjectionScreen className="about__icon" />
                            <h5>Projects</h5>
                            <small>40+ Completed Projects</small>
                        </article>
                        <article className="about__card">
                            <FaUniversity className="about__icon" />
                            <h5>University</h5>
                            <small>The American University in Cairo</small>
                        </article>
                    </div>
                    <p>
                        My name is Mohamed El Atroush, I'm a Computer Engineering graduate from The American University in Cairo. I'm a Software Engineer, Full Stack Developer for the time being. I love travelling, football and i'm a fitness guru.
                    </p>
                    <a href="#contact" className="btn btn-primary">Let's Talk</a>
                </div>
            </div>
        </section >
    )
}

export default About