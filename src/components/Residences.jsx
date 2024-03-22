import React from 'react';
import '../styles/Residences.css'
import {Swiper, SwiperSlide, useSwiper} from "swiper/react";
import 'swiper/css'
import data from '../utils/slider.json'
import {sliderSettings} from "../utils/common.js";

const Residences = () => {
    return (
        <section className='residences-wrapper' id='residences'>
            <div className='paddings innerWidth residences-container'>
                <div className='flexColStart residences-head'>
                    <span className='orangeText'>Best Choices</span>
                    <span className='primaryText'>Popular Residences</span>
                </div>

                <Swiper {...sliderSettings} className='swiper'>`

                    {data.map((card, i) => (
                        <SwiperSlide key={i}>
                            <div className='flexColStart residences-card'>
                                <img src={card.image}/>

                                <span className='secondaryText residences-price'>
                                    <span style={{color: 'orange'}}>$</span>
                                    <span>{card.price}</span>
                                </span>

                                <span className='primaryText'>{card.name}</span>
                                <span className='secondaryText'>{card.detail}</span>
                            </div>
                        </SwiperSlide>
                        )
                    )
                    }
                    <SliderButtons/>
                </Swiper>
            </div>
        </section>
    );
};

export default Residences;

const SliderButtons = () => {
    const swiper = useSwiper();
    return (
        <div className='flexCenter residences-buttons'>
            <button onClick={() => swiper.slidePrev()}>&lt;</button>
            <button onClick={() => swiper.slideNext()}>&gt;</button>
        </div>
    )
}