import React from 'react';
import '../styles/GetStarted.css'
const GetStarted = () => {
    return (
        <section className='getStarted-wrapper' id='getStarted'>
            <div className='paddings innerWidth getStarted-container'>
                <div className='flexColCenter inner-container'>
                    <span className='primaryText'>Get Started with Homyz</span>
                    <span className='secondaryText'>Subscribe and find Super Attractive Price Quotes from Us <br/> Find your Residence soon </span>
                    <button className='button'>
                        <a href='mailto:whizzy.ww@gmail.com'>Get Started</a>
                    </button>
                </div>
            </div>
        </section>
    );
};

export default GetStarted;