import React from 'react';
import './Main.css';
import resume from '../docs/resume.pdf';

const Main = () => {
    const handleResumeDownload = () => {
        const link = document.createElement('a');
        link.href = resume; // The path to the PDF file
        link.download = 'Luca_Brembilla_Resume.pdf'; // The filename for the downloaded file
        link.click();
    };

    return (
        <main className="main-content">
            <div className="intro">
                <div className="text-container">
                    <p className="intro-text">Hello, I am</p>
                    <h1 className="intro-name">Luca Brembilla</h1>
                    <p className="intro-title">I'm Luca, a software engineer.</p>
                    <p className="intro-title">And much more, I hope.</p>
                    <button className="resume-btn" onClick={handleResumeDownload}>Download Resume</button>
                </div>
            </div>
            <div className="image-container">
            <img src={"/me.jpg"} alt="Luca Brembilla" className="profile-image"/>
            </div>
        </main>
    );
};

export default Main;
