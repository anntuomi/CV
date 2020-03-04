import React, { useState } from 'react'
import { PageTransition } from './PageTransition'

const SkillPage = (props) => {
    return (
      <PageTransition>
      <div className="page">
           <div className="content_title_skill">
           <div className="content_title"><h1>Skills</h1></div>
           </div>
           <div className="content">
             <h2>Something</h2>
           <ul>
              <li>Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</li>
              <li>Aliquam tincidunt mauris eu risus.</li>
              <li>Vestibulum auctor dapibus neque.</li>
            </ul>
            <h2>Something</h2>
            <ul>
              <li>Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</li>
              <li>Aliquam tincidunt mauris eu risus.</li>
              <li>Vestibulum auctor dapibus neque.</li>
            </ul>
            <h2>Something</h2>
            <ul>
              <li>Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</li>
              <li>Aliquam tincidunt mauris eu risus.</li>
              <li>Vestibulum auctor dapibus neque.</li>
            </ul>
          </div>
      </div>
      </PageTransition>
    )
  }

  export default SkillPage