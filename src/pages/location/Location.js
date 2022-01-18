import { Component, useState, useEffect } from "react";
import { PROJECTS } from '../../shared/projects';
import './Location.scss';


const ShowProjectDetails = ({project, isPopupOpen}) => {
    console.log(project);
    if(project != undefined) {
        return(
            <div className="project-detail" visibility={isPopupOpen}>
                <img src={project.image} alt={project.title} />
                <h3>{project.title}</h3>
                <p>{project.description}</p>
            </div>
        );
    } else {
        return(
            <div>
                Тут пусто
            </div>
        );
    }
}

export default function Location() {
    const [prjcts,setPrjcts] = useState([]);
    const [isPopupOpen,setIsPopupOpen] = useState(false);

    let clickedProjectId = null;

    useEffect(() => {
        setPrjcts(PROJECTS);
    });

    return(

        <div className="location">
            <h2 className="location-heading">Грузия</h2>
            {
            (prjcts != null)? 
            (
                <div className="projects-container">
                    {
                        prjcts.map((project)=> {
                            return(
                                <div key={project.id} className="project-card">
                                    <img src={project.image} alt={project.title} className="project-image" onClick={() => {
                                        clickedProjectId = project.id
                                        setIsPopupOpen(true);
                                    }
                                        }/>
                                </div>
                            );
                        })
                    }

                    <div className="project-details">
                        <button onClick={() => console.log(clickedProjectId)}>Show current Id</button>
                        <ShowProjectDetails project={prjcts[clickedProjectId]} isPopupOpen={isPopupOpen}/>
                    </div>
                </div>
            ):
            (
                <div>
                    <p>Здесь пока нет проектов</p>
                </div>
            )
        }
        </div>
    );
}


// class Location extends Component {

//     constructor(props) {
//         super(props);

//         this.state = {
//             projects: PROJECTS,
//         }
//     }

//     renderProjects({projects}) {
//         console.log(projects);
//         if(projects != null) {
//             return(
//                 <div>
//                     {
//                         projects.map((project)=> {
//                             return(
//                                 <div key={project.id}>
//                                     <h3>{project.title}</h3>
//                                     <img src={project.image} alt={project.title}/>
//                                 </div>
//                             );
//                         })
//                     }
//                 </div>
//             );

//         } else {
//             return(
//                 <div>
//                     <p>Здесь пока нет проектов</p>
//                 </div>
//             );
//         }
//     }

//     render() {
//         return(
//             <div className="Location">
//                 <h2>Грузия</h2>
//                 {this.renderProjects(this.state.projects)}
//             </div>
//         );
//     }
// }


// export default Location;