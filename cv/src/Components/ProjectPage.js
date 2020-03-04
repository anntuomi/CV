import React, { useState } from 'react'
import MediaButtons from './MediaButtons';
import { PageTransition } from './PageTransition'

const ProjectPage = (props) => {
    return (
      <PageTransition>
      <div className="page">
           <div className="content_title_project">
           <div className="content_title"><h1>Projects</h1></div>
           </div>
           <div className="content">
              <h1>Anna</h1>
              <h1>Tuominen</h1>
              <h2>Aspiring Full Stack Developer</h2>
              <MediaButtons />
              <h1>Anna</h1>
              <h1>Tuominen</h1>
              <h2>Aspiring Full Stack Developer</h2>
              <MediaButtons />
          </div>
      </div>
      </PageTransition>
    )
  }

  export default ProjectPage