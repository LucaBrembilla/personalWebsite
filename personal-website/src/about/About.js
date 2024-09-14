import React from 'react';
import './About.css'; // Make sure to create this CSS file for styling

const About = () => {
    return (
        <div className="about-container">
            <header className="about-header">
                <h1>Luca Brembilla</h1>
                <p><a href="tel:+393314657738">+39-3314657738</a> | <a href="mailto:lucabremby00@gmail.com">lucabremby00@gmail.com</a></p>
                <p><a href="https://github.com/LucaBrembilla" target="_blank" rel="noopener noreferrer">GitHub: LucaBrembilla</a></p>
            </header>

            <section className="experience">
                <h2>Experience</h2>
                <div className="experience-item">
                    <h3>Vice President & Speaker at Poli.Radio</h3>
                    <p><strong>Dates:</strong> 04/2023 – present</p>
                    <p>Keen focus on budgeting, financial management and resource allocation. Involved in various fields including IT.</p>
                </div>
                <div className="experience-item">
                    <h3>Software Engineer Consultant at REPLY</h3>
                    <p><strong>Dates:</strong> 10/2022 – 11/2022</p>
                    <p>Front-end developer (React).</p>
                </div>
            </section>

            <section className="education">
                <h2>Education</h2>
                <div className="education-item">
                    <h3>MSc in Computer Science and Engineering - Artificial Intelligence</h3>
                    <p><strong>Institution:</strong> Polytechnic University of Milan</p>
                    <p><strong>Dates:</strong> 09/2022 - present</p>
                    <p><strong>GPA:</strong> 28.38/30</p>
                </div>
                <div className="education-item">
                    <h3>Bachelor's Degree in Computer Engineering</h3>
                    <p><strong>Institution:</strong> University of Bergamo</p>
                    <p><strong>Dates:</strong> 08/2019 – 18/06/2022</p>
                    <p><strong>GPA:</strong> 27.67/30</p>
                </div>
            </section>

            <section className="other-jobs">
                <h2>Other Jobs</h2>
                <ul>
                    <li><strong>Metalworker</strong> at Fonderie Mario Mazzucconi S.P.A. [03/2021 – 11/2021]</li>
                    <li><strong>Soccer Referee</strong> at Federazione Italiana Giuoco Calcio [10/2018 – 03/2022]</li>
                    <li><strong>Internship</strong> at Mario Negri Institute for Pharmacological Research [03/2018 – 04/2018]</li>
                </ul>
            </section>

            <section className="skills">
                <h2>Skills</h2>
                <p><strong>Languages:</strong> C, C++, Java, Dart, HTML, CSS, JavaScript, Python</p>
                <p><strong>Technologies:</strong> Node.js (Express), Deno, AWS (Lambda, DynamoDB, S3 Bucket, API Gateway), Git/GitHub, MySQL, NoSQL (MongoDB, Neo4j), Flutter, React, React Native, Docker, Linux</p>
            </section>

            <section className="hobbies">
                <h2>Hobbies</h2>
                <ul>
                    <li>Hip Hop (Graffiti, Music)</li>
                    <li>Radio</li>
                    <li>Reading</li>
                </ul>
            </section>
        </div>
    );
};

export default About;
