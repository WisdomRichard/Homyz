import React from 'react';
import '../styles/Contact.css'
import {BsFillChatDotsFill, HiChatBubbleBottomCenter, MdCall} from "react-icons/all.js";

const Contact = () => {
    return (
        <section className='contact-wrapper' id='contact'>
            <div className='paddings innerWidth flexCenter contact-container'>
                {/* left Side */}
                <div className='c flexColStart contact-left'>
                    <span className='orangeText'>Our Contacts</span>
                    <span className='primaryText'>Easy to Contact us</span>
                    <span className='secondaryText'>We are always ready to help by providing the best services for you. We believe a good place to live an make your life better.</span>

                    <div className='flexColStart contactModes'>
                        {/* First Row */}
                        <div className='flexStart rows'>
                            <div className='flexColCenter mode'>
                                <div className='flexStart'>
                                    <div className='flexCenter icon'>
                                        <MdCall size={25}/>
                                    </div>
                                    <div className='flexColStart detail'>
                                        <span className='primaryText'>Call</span>
                                        <span className='secondaryText'>021 123 145 14</span>
                                    </div>
                                </div>
                                <div className='flexCenter button'>Call Now</div>
                            </div>

                            {/* Second Mode */}
                            <div className='flexColCenter mode'>
                                <div className='flexStart'>
                                    <div className='flexCenter icon'>
                                        <BsFillChatDotsFill size={25}/>
                                    </div>
                                    <div className='flexColStart detail'>
                                        <span className='primaryText'>Text</span>
                                        <span className='secondaryText'>021 123 145 14</span>
                                    </div>
                                </div>
                                <div className='flexCenter button'>Text Now</div>
                            </div>

                        </div>
                        {/* Second Row */}
                        <div className='flexStart rows'>
                            <div className='flexColCenter mode'>
                                <div className='flexStart'>
                                    <div className='flexCenter icon'>
                                        <BsFillChatDotsFill size={25}/>
                                    </div>
                                    <div className='flexColStart detail'>
                                        <span className='primaryText'>Video Call</span>
                                        <span className='secondaryText'>021 123 145 14</span>
                                    </div>
                                </div>
                                <div className='flexCenter button'>Video Call Now</div>
                            </div>

                            {/* Fourth Mode */}
                            <div className='flexColCenter mode'>
                                <div className='flexStart'>
                                    <div className='flexCenter icon'>
                                        <HiChatBubbleBottomCenter size={25}/>
                                    </div>
                                    <div className='flexColStart detail'>
                                        <span className='primaryText'>Message</span>
                                        <span className='secondaryText'>021 123 145 14</span>
                                    </div>
                                </div>
                                <div className='flexCenter button'>Message Now</div>
                            </div>

                        </div>
                    </div>
                </div>

                {/* Right Side */}
                <div className='innerWidth contact-right'>
                    <div className='image-container'>
                        <img src='/contact.jpg' alt=''/>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;