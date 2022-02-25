import React from 'react'
import './nav.css'
import { ImHome } from 'react-icons/im'
import { FaUser } from 'react-icons/fa'
import { FaFileCode } from 'react-icons/fa'
import { MdElectricalServices } from 'react-icons/md'
import { RiMessageFill } from 'react-icons/ri'
import { useState } from 'react'


const Nav = () => {
    const [activeNav, setActiveNav] = useState('#')
    return (
        <nav>
            <a href="#" onClick={() => setActiveNav('#')} className={activeNav === '#' ? 'active' : ''}><ImHome /></a>
            <a href="#about" onClick={() => setActiveNav('#about')} className={activeNav === '#about' ? 'active' : ''}><FaUser /></a>
            <a href="#experience" onClick={() => setActiveNav('#experience')} className={activeNav === '#experience' ? 'active' : ''}><FaFileCode /></a>
            <a href="#portfolio" onClick={() => setActiveNav('#portfolio')} className={activeNav === '#portfolio' ? 'active' : ''}><MdElectricalServices /></a>
            <a href="#contact" onClick={() => setActiveNav('#contact')} className={activeNav === '#contact' ? 'active' : ''}><RiMessageFill /></a>
        </nav>
    )
}

export default Nav