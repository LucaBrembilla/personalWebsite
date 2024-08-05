import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faInstagram, faLinkedinIn, faXTwitter } from "@fortawesome/free-brands-svg-icons";
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <header className="header">
            <div className="left-header">
                <div className="logo">Bre</div>
                <div className="social-icons">
                    <a href="https://www.linkedin.com/in/lucabrembilla/" target="_blank"
                       className="social-icon"><FontAwesomeIcon icon={faLinkedinIn}/></a>
                    <a href="https://www.instagram.com/il_breee" target="_blank" className="social-icon"><FontAwesomeIcon
                        icon={faInstagram}/></a>
                    <a href="https://github.com/LucaBrembilla" target="_blank" className="social-icon"><FontAwesomeIcon
                        icon={faGithub}/></a>
                    <a href="https://x.com/LucaBrembillaa" target="_blank" className="social-icon"><FontAwesomeIcon
                        icon={faXTwitter}/></a>
                </div>
            </div>
            <div className="menu-toggle" onClick={toggleMenu}>
                <FontAwesomeIcon icon={isOpen ? faTimes : faBars} />
            </div>
            <nav className={isOpen ? 'open' : ''}>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><a href="/about">Who am I</a></li>
                    <li><a href="/computerscience">Computer Science</a></li>
                    <li><a href="/radiomusic">Radio</a></li>
                    <li><a href="/art">Hip Hop</a></li>
                    <li><a href="/contact">Contact</a></li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;
