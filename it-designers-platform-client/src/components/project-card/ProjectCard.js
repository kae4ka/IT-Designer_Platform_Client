import React from "react";
import '../project-card/ProjectCard.scss'
import london from '../../img/london.jpg'

export default function ProjectCard() {
    return(
        <>
            <div class="project-card">
                <p href="#" class="project-card__title">Карточка проекта</p>
                <img src={london} alt="Изображение проекта" class="project-card__img"/>
            </div>
        </>
    );
}