import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faLinkedinIn, faInstagram, faGithub, faXTwitter } from '@fortawesome/free-brands-svg-icons';
import '../App.css';

const Main = () => {
    return (
        <main className="main-content">
            <div className="intro">
                <p className="intro-text">Hello, I am</p>
                <h1 className="intro-name">Luca Brembilla</h1>
                <p className="intro-title">I'm Luca, software engineer (and much more, I hope).</p>
                <button className="portfolio-btn">My Portfolio</button>
            </div>
            <div className="social-icons">
                <a href="https://www.linkedin.com/in/lucabrembilla/" target="_blank" className="social-icon"><FontAwesomeIcon icon={faLinkedinIn}/></a>
                <a href="https://www.instagram.com/il_breee" target="_blank" className="social-icon"><FontAwesomeIcon icon={faInstagram}/></a>
                <a href="https://github.com/LucaBrembilla" target="_blank" className="social-icon"><FontAwesomeIcon icon={faGithub}/></a>
                <a href="https://x.com/LucaBrembillaa" target="_blank" className="social-icon"><FontAwesomeIcon icon={faXTwitter}/></a>
            </div>
        </main>
    );
};

export default Main;
