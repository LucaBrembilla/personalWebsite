import React from 'react';
import '../App.css';

const Header = () => {
    return (
        <header className="header">
            <div className="logo">Bre</div>
            <nav>
                <ul>
                    <li><a href="#home">Home</a></li>
                    <li><a href="#about">Who am I</a></li>
                    <li><a href="#computerScience">Computer Science</a></li>
                    <li><a href="#blog">Blog</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;
