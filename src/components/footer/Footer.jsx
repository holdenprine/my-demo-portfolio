import React from 'react'
import './footer.css'

import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'

const Footer = () => {
    return (
        <div>
            <footer>
                <a href="#" className="footer_logo">Holden Prine</a>

                <ul className="permalinks">
                    <li><a href="#">Home</a></li>
                    <li><a href="#about">About</a></li>
                    <li><a href="#technologies">Tech</a></li>
                    <li><a href="#projects">Projects</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>
                <div className="footer_social">
                    <a href="https://www.linkedin.com/in/holdenprine/"><BsLinkedin/></a>
                    <a href="https://github.com/holdenprine"><FaGithub/></a>
                </div>

                <div className="footer_copyright">
                    <small>&copy; Holden Prine. All rights reserved.</small>
                </div>
            </footer>
        </div>
    )
}

export default Footer
