import React from 'react';
import './Main.css';
import profileImage from '../images/me.jpg';

const Main = () => {
    return (
        <main className="main-content">
            <div className="intro">
                <div className="text-container">
                    <p className="intro-text">Hello, I am</p>
                    <h1 className="intro-name">Luca Brembilla</h1>
                    <p className="intro-title">I'm Luca, a software engineer.</p>
                    <p className="intro-title">And much more, I hope.</p>
                    <button className="resume-btn">My Resume</button>
                </div>
            </div>
            <div className="image-container">
                <img src={profileImage} alt="Luca Brembilla" className="profile-image"/>
            </div>
        </main>
    );
};

export default Main;
