import React from 'react';
import '../styles/Hero.css'
import hero from '/hero-image.png'
import {HiLocationMarker} from "react-icons/all.js";
import CountUp from "react-countup";
import {motion} from "framer-motion";

const Hero = () => {
    return (
        <section className='hero-wrapper'>
            <div className='paddings innerWidth flexCenter hero-container'>
                {/* Left Side */}
                <div className='flexColStart hero-left'>

                    <div className='hero-title'>
                        <div className='orange-circle'/>
                        <motion.h1
                        initial={{y: '2rem', opacity: 0}}
                        animate={{y: 0, opacity: 1}}
                        transition={{
                            duration: 2,
                            type: 'spring'
                        }}
                        >Discover <br/>
                            Most Suitable <br/>
                            Properties
                        </motion.h1>
                    </div>

                    <div className='flexColStart hero-description'>
                        <span className='secondaryText'>Find a variety of properties that suits you very easily</span>
                        <span className='secondaryText'>Forget all difficulties in finding a residence.</span>
                    </div>

                    <div className='flexCenter search-bar'>
                        <HiLocationMarker color='var(--blue)' size={25}/>
                        <input type='text'/>
                        <button className='button'>Search</button>
                    </div>

                    <div className='flexCenter stats'>
                        <div className='flexColStart stat'>
                            <span>
                                <CountUp start={8800} end={9000} duration={4}/>
                            <span>+</span>
                            </span>
                            <span className='secondaryText'>Premium Products</span>

                        </div>
                        <div className='flexColStart stat'>
                            <span>
                                <CountUp start={1950} end={2000} duration={4}/>
                            <span>+</span>
                            </span>
                            <span className='secondaryText'>Happy Customers</span>
                        </div>
                        <div className='flexColStart stat'>
                            <span>
                                <CountUp end={28}/>
                            <span>+</span>
                            </span>
                            <span className='secondaryText'>Award Winning</span>
                        </div>
                    </div>
                </div>

                 {/* Right Side */}
                <div className='flexCenter  hero-right'>
                    <motion.div
                        initial={{x: '7rem', opacity: 0}}
                        animate={{x: 0, opacity: 1}}
                        transition={{
                            duration: 2,
                            type: 'spring'
                        }}
                        className='image-container'>
                        <img src={hero} alt=''/>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Hero;