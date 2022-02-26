import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/img1.png'

const Portfolio = () => {
    return (
        <section id='portfolio'>
            <h5>Projects I Developed</h5>
            <h2>My Projects (soon)</h2>
            <div className='container portfolio__container'>
                <article className='portfolio__item'>
                    <div className='portfolio__item-image'>

                        <img src="https://drive.google.com/uc?export=view&id=1nFBytqmPD1u9XHe3oWf1SV5_TtDktK2v" alt=""></img>
                    </div>
                    <h3>This is a portfolio item title</h3>
                    <div className="portfolio__item-cta">
                        <a href="https://github.com" className='btn'>Github</a>
                        <a href="#" className='btn btn-primary' target='_blank'>Live Demo</a>
                    </div>
                </article>

                <article className='portfolio__item'>
                    <div className='portfolio__item-image'>
                        <img src="https://drive.google.com/uc?export=view&id=1nFBytqmPD1u9XHe3oWf1SV5_TtDktK2v" alt=""></img>
                    </div>
                    <h3>This is a portfolio item title</h3>
                    <div className="portfolio__item-cta">
                        <a href="https://github.com" className='btn'>Github</a>
                        <a href="#" className='btn btn-primary' target='_blank'>Live Demo</a>
                    </div>
                </article>
                <article className='portfolio__item'>
                    <div className='portfolio__item-image'>
                        <img src="https://drive.google.com/uc?export=view&id=1nFBytqmPD1u9XHe3oWf1SV5_TtDktK2v" alt=""></img>
                    </div>
                    <h3>This is a portfolio item title</h3>
                    <div className="portfolio__item-cta">
                        <a href="https://github.com" className='btn'>Github</a>
                        <a href="#" className='btn btn-primary' target='_blank'>Live Demo</a>
                    </div>
                </article>
                <article className='portfolio__item'>
                    <div className='portfolio__item-image'>
                        <img src="https://drive.google.com/uc?export=view&id=1nFBytqmPD1u9XHe3oWf1SV5_TtDktK2v" alt=""></img>
                    </div>
                    <h3>This is a portfolio item title</h3>
                    <div className="portfolio__item-cta">
                        <a href="https://github.com" className='btn'>Github</a>
                        <a href="#" className='btn btn-primary' target='_blank'>Live Demo</a>
                    </div>
                </article>
                <article className='portfolio__item'>
                    <div className='portfolio__item-image'>
                        <img src="https://drive.google.com/uc?export=view&id=1nFBytqmPD1u9XHe3oWf1SV5_TtDktK2v" alt=""></img>
                    </div>
                    <h3>This is a portfolio item title</h3>
                    <div className="portfolio__item-cta">
                        <a href="https://github.com" className='btn'>Github</a>
                        <a href="#" className='btn btn-primary' target='_blank'>Live Demo</a>
                    </div>
                </article>


            </div>
        </section>
    )
}

export default Portfolio