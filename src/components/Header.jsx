import React, {useState} from 'react';
import logo from '/logo.png'
import '../styles/Header.css'
import {BiMenuAltRight} from "react-icons/all.js";
import OutsideClickHandler from "react-outside-click-handler/esm/OutsideClickHandler.js";
import {NavLink} from "react-router-dom";
import { Link } from 'react-scroll';

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false)

    const getMenuStyles = (menuOpen) => {
        if (document.documentElement.clientWidth <= 800)

            return {right: !menuOpen && '-100%'}
    }
    return (
       <section className='header-wrapper'>
           <div className='flexCenter paddings innerWidth header-container'>
               <img src={logo} alt=''/>

               <OutsideClickHandler onOutsideClick = {() => setMenuOpen(false)}>
               <div className='flexCenter header-menu'
                    style={getMenuStyles(menuOpen)}
               >
                   <Link to='residences' spy={true} smooth={true} offset={10} duration={500}>Residencies</Link>
                   <Link to='value' spy={true} smooth={true} offset={10} duration={500}>Our Value</Link>
                   <Link to='contact' spy={true} smooth={true} offset={10} duration={500}>Contact Us</Link>
                   <Link to='getStarted' spy={true} smooth={true} offset={10} duration={500}>Get Started</Link>
                   <button className='button'>
                       <Link to='contact' spy={true} smooth={true} offset={10} duration={500}>Contact Us</Link>
                   </button>
               </div>
               </OutsideClickHandler>

               <div className='menu-icon' onClick={() => setMenuOpen((prevState) => !prevState)}>
                   <BiMenuAltRight size={30}/>
               </div>
           </div>
       </section>
    );
};

export default Header;