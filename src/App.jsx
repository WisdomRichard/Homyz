import Header from "./components/Header.jsx";
import Hero from "./components/Hero.jsx";
import './App.css'
import Companies from "./components/Companies.jsx";
import Residences from "./components/Residences.jsx";
import Value from "./components/Value.jsx";
import Contact from "./components/Contact.jsx";
import GetStarted from "./components/GetStarted.jsx";
import Footer from "./components/Footer.jsx";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import { animateScroll as scroll } from 'react-scroll';
import {BiUpArrow} from "react-icons/all.js";


function App() {
    const scrollToTop = () => {
    scroll.scrollToTop();
  };
  return (
      <BrowserRouter>
    <div className='App'>
        <div>
            <div className='white-gradient'/>
            <Header/>
            <Hero/>
        </div>
        <Companies/>
        <Residences/>
        <Value/>
        <Contact/>
        <GetStarted/>
        <Footer/>
        <div>
            <div className='toTheTop'>
                <BiUpArrow className='arrow-up' onClick={scrollToTop}/>
            </div>
        </div>


    </div>
      </BrowserRouter>
  );
}

export default App;
