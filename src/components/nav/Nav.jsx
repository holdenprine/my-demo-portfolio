import React from 'react'
import './nav.css'
import {GrHomeRounded} from 'react-icons/gr'
import {AiOutlineUser} from 'react-icons/ai'
import {BiBook} from 'react-icons/bi'
import {AiOutlineFundProjectionScreen} from 'react-icons/ai'
import {MdConnectWithoutContact} from 'react-icons/md'
// might have to switch these icons around to find format matching icons
import { useState } from 'react'

const Nav = () => {
    
    const [activeNav, setActiveNav] = useState('#header')
    
    return (
        <div>
            <nav>
                <a href="#header" className='active' onClick={()=>setActiveNav('#header')} className={activeNav === '#header' ? 'active' : ''}><GrHomeRounded/></a>
                <a href="#about" onClick={()=>setActiveNav('#about')} className={activeNav === '#about' ? 'active' : ''}><AiOutlineUser/></a>
                <a href="#technologies" onClick={()=>setActiveNav('#technologies')} className={activeNav === '#technologies' ? 'active' : ''}><BiBook/></a>
                <a href="#projects" onClick={()=>setActiveNav('#projects')} className={activeNav === '#projects' ? 'active' : ''}><AiOutlineFundProjectionScreen/></a>
                <a href="#contact" onClick={()=>setActiveNav('#contact')} className={activeNav === '#contact' ? 'active' : ''}><MdConnectWithoutContact/></a>
            </nav>
        </div>
    )
}

export default Nav
