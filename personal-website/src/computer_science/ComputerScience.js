import React, { useState } from 'react';
import './ComputerScience.css';

const projects = [
    { title: "Project 1", description: "A brief description of what this project is about, the technologies used, and any other relevant details." },
    { title: "Project 2", description: "A brief description of what this project is about, the technologies used, and any other relevant details." },
    { title: "Project 3", description: "A brief description of what this project is about, the technologies used, and any other relevant details." },
    { title: "Project 3", description: "A brief description of what this project is about, the technologies used, and any other relevant details." },
    { title: "Project 3", description: "A brief description of what this project is about, the technologies used, and any other relevant details." },
    // Add more projects as needed
];

const Projects = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const projectsPerPage = 3;

    const indexOfLastProject = currentPage * projectsPerPage;
    const indexOfFirstProject = indexOfLastProject - projectsPerPage;
    const currentProjects = projects.slice(indexOfFirstProject, indexOfLastProject);

    const totalPages = Math.ceil(projects.length / projectsPerPage);

    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    return (
        <main className="projects-content">
            <div className="title">
                <h1 className="title-text">Computer Science</h1>
            </div>
            <div className="intro">
                <p className="intro-text">
                    I am a computer science and engineering student with a passion for <span className="bold-text">Artificial Intelligence</span>.
                    My journey began at the University of Bergamo, where I studied Computer Engineering and graduated in
                    July 2022 with a score of 105/110.
                    <br /><br />
                    Following my graduation, I moved to Milan to further my education in Computer Science and
                    Engineering at the Polytechnic University of Milan.
                    At the Polytechnic, I had the opportunity to specialize in Artificial Intelligence, choosing the
                    "Artificial Intelligence" (T2I) Pre-Approved Study Plan (PSPA) despite its stringent requirements.
                    This plan is vertical on the whole world of artificial intelligence and “Machine Learning,” in all
                    its declinations. Again, there is the possibility to choose some of the subjects, which include the
                    applications of artificial intelligence in particular domains such as autonomous robotics, computer
                    vision, data mining and recommender systems.
                    <br /><br />
                    I am thrilled with my choice to specialize in AI, as it has opened up a new world of possibilities
                    and rekindled my passion for computer science. The knowledge and skills I have acquired have paved
                    the way for exciting research opportunities. While I recognize that there is still much to learn, I
                    am proud of my accomplishments so far. With only two exams left before I graduate, I am eager to
                    continue expanding my expertise in this dynamic field.
                </p>
            </div>
            <div className="projects-list">
                {currentProjects.map((project, index) => (
                    <div key={index} className="project-item">
                        <h2 className="project-title">{project.title}</h2>
                        <p className="project-description">{project.description}</p>
                    </div>
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
