import React from 'react'
import './experience.css'
import { BsFillPatchCheckFill } from 'react-icons/bs'
import { AiOutlineCalendar } from 'react-icons/ai'

const Experience = () => {
    return (
        <section id='experience'>
            <h5>Skills I Have</h5>
            <h2>My Experience</h2>
            <div className="container experience__container">
                <div className="experience__education">
                    <h3>Education</h3>
                    <h4>The American University In Cairo</h4>
                    <small className='text-light'>BSc. Computer Engineering - Spring 2021</small>
                </div>
                <div className="experience__backend">
                    <h3>Work</h3>
                    <div className="experience__work">
                        <h3>IBM</h3>
                        <small className='text-light'>Data Integration - Data Engineering Internship</small>
                        <div className='experience__calendar'>
                            <AiOutlineCalendar className="cal__icon" size={30} />
                            <h5>Dec 2021 - Feb 2022</h5>
                        </div>
                    </div>

                    <div className="experience__work">
                        <h3>Agile Technologies</h3>
                        <small className="text-light">Web Dev and Mobile Dev Internship</small>
                        <div className='experience__calendar'>
                            <AiOutlineCalendar className="cal__icon" size={30} />
                            <h5>July 2020 - August 2020</h5>
                        </div>

                    </div>
                </div>
                <div className="experience__backend">
                    <h3>Programming Languages and technologies (check downloadable CV for more info</h3>

                    <div className='experience__content'>
                        <article className="experience__details">
                            <BsFillPatchCheckFill className="experience__details-icon" />
                            <div>
                                <h4>C++</h4>
                                <small className='text-light'>Experienced</small>
                            </div>

                        </article>

                        <article className="experience__details">
                            <BsFillPatchCheckFill className="experience__details-icon" />
                            <div>
                                <h4>PYTHON</h4>
                                <small className='text-light'>Experienced</small>
                            </div>
                        </article>

                        <article className="experience__details">
                            <BsFillPatchCheckFill className="experience__details-icon" />
                            <div>
                                <h4>JAVA</h4>
                                <small className='text-light'>Experienced</small>
                            </div>
                        </article>

                        <article className="experience__details">
                            <BsFillPatchCheckFill className="experience__details-icon" />
                            <div>
                                <h4>SQL</h4>
                                <small className='text-light'>Intermediate</small>
                            </div>
                        </article>

                        <article className="experience__details">
                            <BsFillPatchCheckFill className="experience__details-icon" />
                            <div>
                                <h4>REACTJS</h4>
                                <small className='text-light'>Intermediate</small>
                            </div>
                        </article>

                        <article className="experience__details">
                            <BsFillPatchCheckFill className="experience__details-icon" />
                            <div>
                                <h4>HTML</h4>
                                <small className='text-light'>Intermediate</small>
                            </div>
                        </article>
                    </div>

                </div>

            </div>
        </section>
    )
}

export default Experience