import { useState, useEffect } from "react";
import { PROJECTS } from "../../shared/projects";
import classnames from 'classnames';
import "./Location.scss";

const ShowProjectDetails = ({ project }) => {
    return project !== undefined ? (
        <div className="project-detail">
            <img src={project.image} alt={project.title} className="project-detail__image"/>
            <p className="project-detail__text">{project.description}</p>
        </div>
    ) : (
        <div></div>
    );
};

export default function Location() {
    const [prjcts, setPrjcts] = useState([]);
    const [clickedProjectId, setClickedProjectId] = useState();
    const [isHiden, setIsHiden] = useState();

    useEffect(() => {
        setPrjcts(PROJECTS);
        setIsHiden(true);
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
                                        setIsHiden(!isHiden);
                                    }}
                                />
                            </div>
                        );
                    })}

                    <div className={classnames("project-details", {"hide" : isHiden})}>
                        <button className="project-details__close-btn" onClick={() => setIsHiden(!isHiden)}>x</button>  
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
