import React from "react";
import mock09 from '../assets/images/mock09.png';
import mock10 from '../assets/images/mock10.png';
import mock11 from '../assets/images/mock11.png';
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
            <div className="project">
                <a href="https://www.figma.com/design/cD2EHs7ejqofLkvhijdzGf/RAW-PROTOTYPE-No.1(Final)?node-id=0-1&t=pfunO8KB3q15MeIl-1" target="_blank" rel="noreferrer"><img src={mock11} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://www.figma.com/design/cD2EHs7ejqofLkvhijdzGf/RAW-PROTOTYPE-No.1(Final)?node-id=0-1&t=pfunO8KB3q15MeIl-1" target="_blank" rel="noreferrer"><h2>Right A Way</h2></a>
                <p>An app focused on providing flood-related information for students at Western Institute of Technology. It offers real-time updates, alerts, and data to help students stay informed about potential flood risks and navigate their campus safely during adverse weather conditions.</p>
            </div>
            </div>
        </div>
    );
}

export default Project;