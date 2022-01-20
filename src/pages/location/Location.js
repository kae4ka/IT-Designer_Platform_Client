import { useState, useEffect } from "react";
import { PROJECTS } from "../../shared/projects";
import "./Location.scss";

const ShowProjectDetails = ({ project }) => {
    return project !== undefined ? (
        <div className="project-detail">
            <img src={project.image} alt={project.title} />
            <h3>{project.title}</h3>
            <p>{project.description}</p>
        </div>
    ) : (
        <div></div>
    );
};

export default function Location() {
    const [prjcts, setPrjcts] = useState([]);
    const [clickedProjectId, setClickedProjectId] = useState();

    useEffect(() => {
        setPrjcts(PROJECTS);
    }, []);

    return (
        <div className="location">
            <h2 className="location-heading">Грузия</h2>
            {prjcts != null ? (
                <div className="projects-container">
                    {prjcts.map((project) => {
                        return (
                            <div key={project.id} className="project-card">
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="project-image"
                                    onClick={() => {
                                        setClickedProjectId(project.id);
                                    }}
                                />
                            </div>
                        );
                    })}

                    <div className="project-details">   
                        <ShowProjectDetails
                            project={prjcts[clickedProjectId]}
                        />
                    </div>
                </div>
            ) : (
                <div>
                    <p>Здесь пока нет проектов</p>
                </div>
            )}
        </div>
    );
}
