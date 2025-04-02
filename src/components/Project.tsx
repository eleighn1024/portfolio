import React from "react";
import mock09 from '../assets/images/mock09.png';
import mock10 from '../assets/images/mock10.png';
import '../assets/styles/Project.scss';

function Project() {
    return(
    <div className="projects-container" id="projects">
        <h1>Projects</h1>
        <div className="projects-grid">
            <div className="project">
                <a href="https://www.figma.com/design/etRF1JdaznTe4xF73kuHse/Eventor?node-id=1049-156&t=XDvKXcigYs4F9i6v-1" target="_blank" rel="noreferrer"><img src={mock10} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://www.figma.com/design/etRF1JdaznTe4xF73kuHse/Eventor?node-id=1049-156&t=XDvKXcigYs4F9i6v-1" target="_blank" rel="noreferrer"><h2>Eventor</h2></a>
                <p>A school event assistant app designed for students at Western Institute of Technology.</p>
            </div>
            <div className="project">
                <a href="https://awesometodosappjabuen.onrender.com/" target="_blank" rel="noreferrer"><img src={mock09} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://awesometodosappjabuen.onrender.com/" target="_blank" rel="noreferrer"><h2>Awesome Todos</h2></a>
                <p>A minimal Todo App with full CRUD functionality.</p>
            </div>
            
            </div>
        </div>
    );
}

export default Project;