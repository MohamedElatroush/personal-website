import React from 'react'
import './header.css'
import CTA from './CTA'
import ME from '../../assets/me.jpeg'
import HeaderSocial from './HeaderSocials'

const Header = () => {
    return (
        <header>
            <div className="container header__container">
                <h5>Hello I'm</h5>
                <h1>Mohamed Hatem</h1>
                <h5 className="text-light">A Software Engineer and a Full Stack Developer. Based in Cairo, Egypt.</h5>
                <CTA></CTA>
                <HeaderSocial></HeaderSocial>



                <a href="#contact" className="scroll__down">Scroll Down</a>
            </div>
        </header>
    )
}

export default Header