import React from "react";
import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReact, faPython, faHtml5 } from '@fortawesome/free-brands-svg-icons';

import '../assets/styles/Expertise.scss';
function Expertise() {
    return (
    <div className="container" id="expertise">
        <div className="skills-container">
            <h1>Skills</h1>
            <div className="skills-grid">
                <div className="skill">
                    <FontAwesomeIcon icon={faReact} size="3x"/>
                    <h3>REACT</h3>
                    <p> As a student, I have learned to use React to build interactive and user-friendly web applications. I have experience working with components to create reusable UI elements and managing state using useState and useEffect. I can set up React Router for simple navigation and fetch data from APIs to display dynamic content. I also handle basic event interactions and style applications using CSS, Bootstrap, and Tailwind CSS. While I’m still learning, I enjoy experimenting with React to improve my skills and build better projects.

</p>
                    <div className="flex-chips">
                        <span className="chip-title"></span>
                       
                    </div>
                </div>
            
                <div className="skill">
                    <FontAwesomeIcon icon={faPython} size="3x"/>
                    <h3>PYTHON</h3>
                    <p>I have learned to use Python for writing simple programs and solving problems. I can work with variables, loops, and conditionals to control the flow of a program and use functions to make my code more organized and reusable. I have experience handling lists, dictionaries, and tuples for managing data efficiently. I also know how to read and write files, which helps in storing and retrieving information.</p>
                    <div className="flex-chips">
                        <span className="chip-title"></span>
                         
                        
                    </div>
                </div>


                <div className="skill">
                    <FontAwesomeIcon icon={faHtml5} size="3x"/>
                    <h3>HTML</h3>
                    <p>I have learned to use HTML to create the structure of web pages. I can write and organize content using elements like headings, paragraphs, lists, and links. I have experience working with forms and input fields to collect user data and using tables to display information neatly. I also know how to add images, videos, and audio to make web pages more interactive.</p>
                    <div className="flex-chips">
                        <span className="chip-title"></span>
                        
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
}

export default Expertise;