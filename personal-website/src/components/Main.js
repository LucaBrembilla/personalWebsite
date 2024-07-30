import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter, faLinkedinIn, faInstagram, faBehance } from '@fortawesome/free-brands-svg-icons';
import '../App.css';

const Main = () => {
    return (
        <main className="main-content">
            <div className="intro">
                <h1>I am Luca Brembilla</h1>
                <p>I'm Luca, software engineer and much more (I hope).</p>
                <button className="portfolio-btn">My Portfolio</button>
            </div>
            <div className="social-icons">
                <a href="#" className="social-icon"><FontAwesomeIcon icon={faFacebookF}/></a>
                <a href="#" className="social-icon"><FontAwesomeIcon icon={faTwitter}/></a>
                <a href="#" className="social-icon"><FontAwesomeIcon icon={faLinkedinIn}/></a>
                <a href="#" className="social-icon"><FontAwesomeIcon icon={faInstagram}/></a>
                <a href="#" className="social-icon"><FontAwesomeIcon icon={faBehance}/></a>
            </div>
        </main>
    );
};

export default Main;
