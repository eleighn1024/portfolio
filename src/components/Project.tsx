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
                <p>A school event assistant app, designed for students at Western Institute of Technology to stay organized and informed about upcoming campus events. It streamlines event registration, provides event details, and offers notifications to ensure students never miss an important event or activity on campus.</p>
            </div>
            <div className="project">
                <a href="https://awesometodosappjabuen.onrender.com/" target="_blank" rel="noreferrer"><img src={mock09} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://awesometodosappjabuen.onrender.com/" target="_blank" rel="noreferrer"><h2>Awesome Todos</h2></a>
                <p>A minimal Todo app with full CRUD functionality built using the MERN stack (MongoDB, Express, React, Node.js) allows users to create, read, update, and delete tasks seamlessly. The app utilizes MongoDB for data storage, Express and Node.js for the backend server, and React for a dynamic, user-friendly front-end interface, providing a robust solution for task management.</p>
            </div>
            </div>
        </div>
    );
}

export default Project;