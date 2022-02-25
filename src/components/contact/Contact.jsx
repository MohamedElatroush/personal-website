import React from 'react'
import './contact.css'
import { AiOutlineMail } from 'react-icons/ai'
import { AiOutlineWhatsApp } from 'react-icons/ai'
import { useRef } from 'react';
import emailjs from 'emailjs-com'

const Contact = () => {
    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_dnsy36k', 'template_jhim5eq', form.current, 'user_IkTOTfD2WIjWhldWEm5J6')
        e.target.reset()

    };
    return (
        <section id='contact'>
            <h5>Get In Touch</h5>
            <h2>Contact Me</h2>

            <div className='container contact__container'>
                <div className='contact__options'>
                    <article className='contact__option'>
                        <AiOutlineMail className='contact__option-icon' />
                        <h4>Email</h4>
                        <h5>muhamed_hatem1@aucegypt.edu</h5>
                        <a href="mailto:muhamed_hatem1@aucegypt.edu" target="_blank">Send a Message</a>
                    </article>

                    <article className='contact__option'>
                        <AiOutlineWhatsApp className='contact__option-icon' />
                        <h4>Whatsapp</h4>
                        <h5>+201007100589</h5>
                        <a href="https://api.whatsapp.com/send?phone=+201007100589" target="_blank">Send a Message</a>
                    </article>
                </div>
                { }
                <form ref={form} onSubmit={sendEmail}>
                    <input type="text" name='name' placeholder='Your Full Name' required />
                    <input type="email" name='email' placeholder='Your Email' required />
                    <textarea name="message" placeholder='Your Message' rows="7" required></textarea>
                    <button type='submit' className='btn btn-primary'>Send Message</button>
                </form>
            </div>
        </section>
    )
}

export default Contact