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
                    <p> A 2nd-year BSIT student at Western Institute of Technology with skills in React development, building dynamic and interactive web applications.</p>
                    <div className="flex-chips">
                        <span className="chip-title"></span>
                       
                    </div>
                </div>
            
                <div className="skill">
                    <FontAwesomeIcon icon={faPython} size="3x"/>
                    <h3>PYTHON</h3>
                    <p>A 2nd-year BSIT student at Western Institute of Technology with skills in Python programming, including data analysis, automation, and problem-solving, alongside experience in JavaScript development and design.</p>
                    <div className="flex-chips">
                        <span className="chip-title"></span>
                         
                        
                    </div>
                </div>


                <div className="skill">
                    <FontAwesomeIcon icon={faHtml5} size="3x"/>
                    <h3>HTML</h3>
                    <p>A 2nd-year BSIT student at Western Institute of Technology with skills in HTML, including creating structured, accessible, and responsive web pages.</p>
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