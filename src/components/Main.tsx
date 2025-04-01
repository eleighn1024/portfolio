import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import '../assets/styles/Main.scss';
import profile from '../assets/profile.jpg';

function Main() {

  return (
    <div className="container">
      <div className="about-section">
        <div className="image-wrapper">
          <img src={profile} alt="Avatar" />
        </div>
        <div className="content">
          <div className="social_icons">
            <a href="https://github.com/eleighn1024" target="_blank" rel="noreferrer"><GitHubIcon/></a>
            <a href="https://www.linkedin.com/in/elea-belle-a7053533b/" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
          </div>
          <h1>Elea Belle Jabuen</h1>
          <p>UX Researcher</p>

          <div className="mobile_social_icons">
            <a href="https://github.com/eleighn1024"  target="_blank" rel="noreferrer"><GitHubIcon/></a>
            <a href="https://www.linkedin.com/in/elea-belle-a7053533b/"target="_blank" rel="noreferrer"><LinkedInIcon/></a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;