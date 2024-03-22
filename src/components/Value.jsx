import React, {useState} from 'react';
import '../styles/Value.css'
import {Accordion, AccordionItem, AccordionItemHeading, AccordionItemButton, AccordionItemPanel, AccordionItemState} from "react-accessible-accordion";
import 'react-accessible-accordion/dist/fancy-example.css'
import {MdOutlineArrowDropDown} from "react-icons/all.js";
import data from "../utils/accordion.jsx";

const Value = () => {
    return (
        <section className='value-wrapper' id='value'>
            <div className='paddings innerWidth flexCenter value-container'>
                {/* Left Side */}
                <div className='value-left'>
                  <div className='image-container'>
                      <img src='/value.png' alt=''/>
                  </div>
                </div>

                {/* Right Side */}
                <div className='flexColStart value-right'>
                    <span className='orangeText'>Our Value</span>
                    <span className='primaryText'>Value We Give to You</span>
                    <span className='secondaryText'>
                        We are always ready to help by providing the best services for you.
                    <br/>
                        We believe a good place to live can make your life better.
                    </span>

                    <Accordion className='accordions' allowMultipleExpanded={false} preExpanded={[0]}>
                        {
                            data.map((item, i) => {
                                const [className, setClassName] = useState(null)
                                return(
                                    <AccordionItem className={`accordionItem ${className}`} key={i} uuid={i}>
                                        <AccordionItemHeading>
                                         <AccordionItemButton className='flexCenter innerWidth accordionButton'>
                                             <AccordionItemState>
                                                 {({ expanded }) =>
                                                     expanded
                                                         ? setClassName('expanded')
                                                         : setClassName('collapsed')
                                                 }
                                             </AccordionItemState>
                                             <div className='flexCenter icon'>{item.icon}</div>
                                             <span className='primaryText'>{item.heading}</span>
                                             <div className='flexCenter icon'><MdOutlineArrowDropDown size={20}/></div>
                                         </AccordionItemButton>
                                        </AccordionItemHeading>

                                        <AccordionItemPanel>
                                            <p className='secondaryText'>{item.detail}</p>
                                        </AccordionItemPanel>
                                    </AccordionItem>
                                )
                            })


                        }
                    </Accordion>
                </div>
            </div>
        </section>
    );
};

export default Value;