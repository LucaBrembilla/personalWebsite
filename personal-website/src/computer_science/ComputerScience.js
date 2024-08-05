import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './ComputerScience.css';
import projects from './projects.json';

const Projects = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const projectsPerPage = 3;

    /* Probably need useRef here */
    const indexOfLastProject = currentPage * projectsPerPage;
    const indexOfFirstProject = indexOfLastProject - projectsPerPage;
    const currentProjects = projects.slice(indexOfFirstProject, indexOfLastProject);

    const totalPages = Math.ceil(projects.length / projectsPerPage);

    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    return (
        <main className="projects-content">
            <div className="intro">
                <p className="intro-text">
                    I am a computer science and engineering student with a passion for <span className="bold-text">Artificial Intelligence</span>.
                    My journey began at the University of Bergamo, where I studied Computer Engineering and graduated in
                    July 2022 with a score of 105/110.
                    <br/><br/>
                    Following my graduation, I moved to Milan to further my education in Computer Science and
                    Engineering at the Polytechnic University of Milan.
                    At the Polytechnic, I had the opportunity to specialize in Artificial Intelligence, choosing the
                    "Artificial Intelligence" (T2I) Pre-Approved Study Plan (PSPA) despite its stringent requirements.
                    This plan is vertical on the whole world of artificial intelligence and “Machine Learning,” in all
                    its declinations. Again, there is the possibility to choose some of the subjects, which include the
                    applications of artificial intelligence in particular domains such as autonomous robotics, computer
                    vision, data mining and recommender systems.
                    <br/><br/>
                    I am thrilled with my choice to specialize in AI, as it has opened up a new world of possibilities
                    and rekindled my passion for computer science. The knowledge and skills I have acquired have paved
                    the way for exciting research opportunities. While I recognize that there is still much to learn, I
                    am proud of my accomplishments so far. With only two exams left before I graduate, I am eager to
                    continue expanding my expertise in this dynamic field.
                </p>
            </div>
            <p> Here are some of my projects:</p>
            <div className="projects-list">
                {currentProjects.map((project) => (
                    <Link to={`/project/${project.id}`} key={project.id} className="project-item">
                        <h2 className="project-title">{project.title}</h2>
                        {project.image && <img src={project.image} className="project-image"/>}
                        <div className="project-description">{project.description}</div>
                    </Link>
                ))}
            </div>
            <div className="pagination">
                {[...Array(totalPages)].map((_, index) => (
                    <div
                        key={index}
                        className={`page-item ${currentPage === index + 1 ? 'active' : ''}`}
                        onClick={() => handlePageChange(index + 1)}
                    >
                        {index + 1}
                    </div>
                ))}
            </div>
        </main>
    );
};

export default Projects;
