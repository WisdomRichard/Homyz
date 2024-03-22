import React from 'react';
import '../styles/Footer.css'
const Footer = () => {
    return (
        <section className='footer-wrapper' id='footer'>
            <div className='paddings innerWidth flexCenter footer-container'>

                {/* Left Side */}
                <div className='flexColStart footer-left'>
                    <img src='/logo2.png' alt='' width={120}/>

                    <span className='secondaryText'>Our vision is to make all people <br/> the best place to live for them.</span>
                </div>

                {/* Right SIde */}
                <div className='flexColStart footer-right'>
                    <span className='primaryText'>Information</span>
                    <span className='secondaryText'>145 New York, FL 4571, USA</span>

                    <div className='flexCenter footer-menu'>
                        <span>Property</span>
                        <span>Services</span>
                        <span>Product</span>
                        <span>About Us</span>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Footer;