import React from 'react'
import './contact.css'

import {AiOutlineMail} from 'react-icons/ai'
import {BsLinkedin} from 'react-icons/bs'

const Contact = () => {
    return (
        <div>
            <section id='contact'>
                <h5>Let's Talk!</h5>
                <h2>Contact Me</h2>

                <div className="container contact_container">
                    <div className="contact_options">
                        <article className="contact_option">
                            <AiOutlineMail className="contact_option-icon"/>
                            <h4>Email</h4>
                            <h5>tempemail@gmail.com</h5>
                            <a href="mailto:tempemail@gmail.com">Send a message</a>
                        </article>

                        <article className="contact_option">
                            <BsLinkedin className="contact_option-icon"/>
                            <h4>Linkedin</h4>
                            <h5>Holden Prine</h5>
                            <a href="https://www.linkedin.com/in/holdenprine/" target="_blank">Send a message</a>
                        </article>
                    </div>
                    {/* END OF CONTACT OPTIONS */}
                    <form action="">
                        <input type="text" name="name" placeholder="Your Full Name" required/>
                        <input type="email" name="email" placeholder="Your Email" required/>
                        <textarea name="message" rows="7" placeholder="Your Message" required></textarea>
                        <button type="submit" className="btn btn-primary">Send Message</button>
                    </form>
                </div>

            </section>
        </div>
    )
}

export default Contact
