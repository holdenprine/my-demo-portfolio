import React from 'react'
import './about.css'
import ME from '../../assets/about.jpg'
import {RiAwardLine} from 'react-icons/ri'
import {TbUsers} from 'react-icons/tb'
import {AiOutlineFolderOpen} from 'react-icons/ai'

const About = () => {
    return (
        <div>
            <section id='about'>
                <h5>A bit</h5>
                <h2>About me</h2>

                <div className='container about_container'>
                    <div className="about_me">
                        <div className="about_me-image">
                            <img src={ME} alt="About" />
                        </div>
                    </div>
                    <div className="about_content">
                        <div className="about_cards">
                            <article className='about_card'>
                                <RiAwardLine className='about_icon'/>
                                <h5>Experience</h5>
                                <small>~1 Years Working</small>
                            </article>

                            <article className='about_card'>
                                <TbUsers className='about_icon'/>
                                <h5>Work Experience</h5>
                                <small>Victorise, etc.</small>
                            </article>

                            <article className='about_card'>
                                <AiOutlineFolderOpen className='about_icon'/>
                                <h5>Projects</h5>
                                <small>15+ Completed</small>
                            </article>
                        </div>
                        
                           <p>My name is Holden Prine and I am a full stack developer. My work has been defined by my patience, detail-oriented and outside-the-box thinking. My background in technical problem solving and project management with several years experience in technical editing, web and mobile development. I am always looking to work with driven, hard working individuals to deliver high-quality, and intelligently architected products.
                           </p>

                        <a href="#contact" className='btn btn-primary'>Let's connect!</a>

                    </div>
                </div>
            </section>
        </div>
    )
}

export default About
