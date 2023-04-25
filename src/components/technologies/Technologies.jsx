import React from 'react'
import {AiOutlineHtml5} from 'react-icons/ai'
import {DiCss3Full} from 'react-icons/di'
import {SiJavascript} from 'react-icons/si'
import {GrReactjs} from 'react-icons/gr'
import {FaJava} from 'react-icons/fa'
import {SiRubyonrails} from 'react-icons/si'
import {AiOutlineConsoleSql} from 'react-icons/ai'
import {DiPostgresql} from 'react-icons/di'
import {MdHttp} from 'react-icons/md'
import {SiMongodb} from 'react-icons/si'
import {SiPostman} from 'react-icons/si'
import {FaPhp} from 'react-icons/fa'
import './technologies.css'

const Technologies = () => {
    return (
        <div>
            <section id='technologies'>
                <h5>Languages/Tech Stacks</h5>
                <h2>Tech/Frameworks</h2>

                <div className="container technologies_container">
                    <div className="technologies_frontend">
                        <h3>Frontend Development</h3>
                        {/* for frontend -> HTML, CSS, JavaScript, Java, React, Ruby */}
                        <div className="technologies_content">
                            <article className="technologies_details">
                                <AiOutlineHtml5 className='experience_details-icon'/>
                                <div>
                                    <h4>HTML</h4>
                                    <small className='text-light'>Intermediate</small>
                                </div>
                            </article>

                            <article className="technologies_details">
                                <DiCss3Full className='experience_details-icon'/>
                                <div>
                                    <h4>CSS</h4>
                                    <small className='text-light'>Intermediate</small>
                                </div>
                            </article>

                            <article className="technologies_details">
                                <SiJavascript className='experience_details-icon'/>
                                <div>
                                    <h4>JavaScript</h4>
                                    <small className='text-light'>Intermediate</small>
                                </div>
                            </article>

                            <article className="technologies_details">
                                <GrReactjs className='experience_details-icon'/>
                                <div>
                                    <h4>React.js</h4>
                                    <small className='text-light'>Intermediate</small>
                                </div>
                            </article>

                            <article className="technologies_details">
                                <FaJava className='experience_details-icon'/>
                                <div>
                                    <h4>Java</h4>
                                    <small className='text-light'>Intermediate</small>
                                </div>
                            </article>

                            <article className="technologies_details">
                                <FaPhp className='experience_details-icon'/>
                                <div>
                                    <h4>php</h4>
                                    <small className='text-light'>Intermediate</small>
                                </div>
                            </article>
                        </div>
                    </div>
                    <div className="technologies_backend">
                       <h3>Backend Development</h3>
                       <div className="technologies_content">
                            <article className="technologies_details">
                                <SiRubyonrails className='experience_details-icon'/>
                                <div>
                                    <h4>Rails</h4>
                                    <small className='text-light'>Experienced</small>
                                </div>
                            </article>

                            <article className="technologies_details">
                                <AiOutlineConsoleSql className='experience_details-icon'/>
                                <div>
                                    <h4>SQL</h4>
                                    <small className='text-light'>Experienced</small>
                                </div>    
                            </article>

                            <article className="technologies_details">
                                <DiPostgresql className='experience_details-icon'/>
                                <div>
                                    <h4>PostgreSQL</h4>
                                    <small className='text-light'>Experienced</small>
                                </div>    
                            </article>

                            <article className="technologies_details">
                                <MdHttp className='experience_details-icon'/>
                                <div>
                                    <h4>REST</h4>
                                    <small className='text-light'>Experienced</small>
                                </div>
                            </article>

                            <article className="technologies_details">
                                <SiMongodb className='experience_details-icon'/>
                                <div>
                                    <h4>MongoDB</h4>
                                    <small className='text-light'>Experienced</small>
                                </div>
                            </article>

                            <article className="technologies_details">
                                <SiPostman className='experience_details-icon'/>
                                <div>
                                    <h4>Postman</h4>
                                    <small className='text-light'>Experienced</small>
                                </div>
                            </article>
                       </div>
                    </div>
                </div>
            
            </section>
        </div>
    )
}

export default Technologies
