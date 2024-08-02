import React from 'react';
import './ComputerScience.css';

const Projects = () => {
    return (
        <main className="projects-content">
            <div className="intro">
                <p className="intro-text">
                    As you have probably already read, I am a computer science student. I firstly studied computer engineering at University of Bergamo, my city of birth.
                    After graduating in July 2022 with 105/110, I moved to Milan, where I am still studying Computer Science and Engineering, where I got the opportunity to specialize on Artificial Intelligence. My current GPA is 28.38/30.
                    I still have a lot to learn, but I am proud of what I have achieved so far. There are only 2 exams left before I can graduate, but there is still a lot to learn.
                    Here are some of the projects I have worked on.
                </p>
            </div>
            <div className="projects-list">
                <div className="project-item">
                    <h2 className="project-title">Project 1</h2>
                    <p className="project-description">A brief description of what this project is about, the technologies used, and any other relevant details.</p>
                </div>
                <div className="project-item">
                    <h2 className="project-title">Project 2</h2>
                    <p className="project-description">A brief description of what this project is about, the technologies used, and any other relevant details.</p>
                </div>
                {/* Add more projects as needed */}
            </div>
        </main>
    );
};

export default Projects;
