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
                            <img src={ME} alt="About Image" />
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
                                <h5>Clients</h5>
                                <small>LCS, etc.</small>
                            </article>

                            <article className='about_card'>
                                <AiOutlineFolderOpen className='about_icon'/>
                                <h5>Projects</h5>
                                <small>15+ Completed</small>
                            </article>
                        </div>
                        
                           <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus neque eum iure natus sapiente esse accusamus, consequatur dignissimos dolorum? Dolore laborum modi obcaecati reiciendis officia facere assumenda a id ipsa?
                           </p>

                        <a href="#contact" className='btn btn-primary'>Let's connect!</a>

                    </div>
                </div>
            </section>
        </div>
    )
}

export default About
