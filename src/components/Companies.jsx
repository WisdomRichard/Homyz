import React from 'react';
import '../styles/Companies.css'
import prologis from '/prologis.png'
import tower from '/tower.png'
import equinix from '/equinix.png'
import realty from '/realty.png'

const Companies = () => {
    return (
        <section className='company-wrapper'>
            <div className='paddings innerWidth flexCenter company-container'>
                <img src={prologis} alt=''/>
                <img src={tower} alt=''/>
                <img src={equinix} alt=''/>
                <img src={realty} alt=''/>
            </div>
        </section>
    );
};

export default Companies;