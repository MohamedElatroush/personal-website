import React from 'react'
import CV from '../../assets/MohamedElAtroush_CV.pdf'

const CTA = () => {
    return (
        <div className="cta">
            <a href="https://drive.google.com/uc?export=view&id=1t1rKlJ4onNYmS9T0S0pU5aUgBUgY--wG" download target='_blank' className="btn">Download CV</a>
            <a href="#contact" className="btn btn-primary">Contact</a>
        </div>
    )
}

export default CTA