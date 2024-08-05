import React from 'react';
import { useParams } from 'react-router-dom';
import './ProjectDetails.css';
import projects from './projects.json'; // Import the JSON file

const ProjectDetails = () => {
    const { id } = useParams();
    const project = projects.find(p => p.id === parseInt(id)); // Find the project by ID

    if (!project) {
        return (
            <div className="no-project">
                <h1>No such project.</h1> {/* Corrected JSX syntax */}
            </div>
        );
    }

    const { project_overview, model_architecture, training_and_tuning, results, team_contributions } = project.fullDescription;

    return (
        <div className="project-details">
            <h1>{project.title}</h1>
            {project.image && <img src={project.image} className="project-image" />}
            <section>
                <h2>Project Overview</h2>
                <p><strong>Objective:</strong> {project_overview.objective}</p>
                <p><strong>Approach:</strong> {project_overview.approach}</p>
            </section>
            <section>
                <h2>Model Architecture</h2>
                <h3>Base Model</h3>
                <p><strong>Name:</strong> {model_architecture.base_model.name}</p>
                <p><strong>Description:</strong> {model_architecture.base_model.description}</p>
                <h3>Dense Layers</h3>
                <p>{model_architecture.dense_layers.description}</p>
                <ul>
                    {model_architecture.dense_layers.features.map((feature, index) => (
                        <li key={index}>{feature}</li>
                    ))}
                </ul>
            </section>
            <section>
                <h2>Training and Tuning</h2>
                <p><strong>Dataset:</strong> {training_and_tuning.dataset}</p>
                <p><strong>Description:</strong> {training_and_tuning.hyperparameter_tuning.description}</p>
                <ul>
                    {training_and_tuning.hyperparameter_tuning.techniques.map((technique, index) => (
                        <li key={index}>{technique}</li>
                    ))}
                </ul>
                <h3>Evaluation Metrics</h3>
                <p><strong>Accuracy:</strong> {training_and_tuning.evaluation_metrics.accuracy}</p>
                <p><strong>Precision:</strong> {training_and_tuning.evaluation_metrics.precision}</p>
                <p><strong>Recall:</strong> {training_and_tuning.evaluation_metrics.recall}</p>
                <p><strong>F1 Score:</strong> {training_and_tuning.evaluation_metrics.f1_score}</p>
            </section>
            <section>
                <h2>Results</h2>
                <p>{results.description}</p>
            </section>
            <section>
                <h2>Team Contributions</h2>
                <p>{team_contributions.description}</p>
                <ul>
                    {team_contributions.members.map((member, index) => (
                        <li key={index}>{member}</li>
                    ))}
                </ul>
            </section>
        </div>
    );
};

export default ProjectDetails;
