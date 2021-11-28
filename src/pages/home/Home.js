import React from "react";

import './Home.scss'

import ProjectCard from "../../components/project-card/ProjectCard";

export default function Home() {
    return(
        <>
            {/* <h1>Home</h1> */}
            <div class="wrapper">
                <ProjectCard />
                <ProjectCard />
                <ProjectCard />
                <ProjectCard />
                <ProjectCard />
                <ProjectCard />
            </div>
        </>
    );    
}