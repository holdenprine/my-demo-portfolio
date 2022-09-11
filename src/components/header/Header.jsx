import React from 'react'
import CTA from './CTA'
import ME from '../../assets/me.jpg'
import HeaderSocials from './HeaderSocials'
import './header.css'

const Header = () => {
    return (
       <header>
           <section id=''>
           <div className="container header_container">
               <h5>Hello I am</h5>
               <h1>Holden Prine</h1>
               <h5 className="text-light">
                   Full Stack Developer with a focus in backend development
               </h5>
               {/* CV and Connect Buttons */}
               <CTA/>
               <HeaderSocials/>
                {/* Head Shot */}
               <div class="me">
                   {/* will be a temp image */}
                <img src={ME} alt="me" />
               </div>

               <a href="#contact" className='scroll_down'>Scroll Down</a>
           </div>
           </section>
       </header>
    )
}

export default Header
