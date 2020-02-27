import React, { useState } from 'react'
import NavigationBar from './NavigationBar';
import MediaButtons from './MediaButtons';

const SkillPage = (props) => {
    return (
      <div className="skill_page">
           <NavigationBar active='pink' activateTheme={props.activateTheme}/>
           <div className="content_title"><h1>Skills</h1></div>
           <div className="content">
              <h2>Aspiring Full Stack Developer</h2>
              <MediaButtons />
              <h1>Anna</h1>
              <h1>Tuominen</h1>
              <h2>Aspiring Full Stack Developer</h2>
              <MediaButtons />
          </div>
      </div>
    )
  }

  export default SkillPage