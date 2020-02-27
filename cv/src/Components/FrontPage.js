import React, { useState } from 'react'
import atuomine from './atuomine.jpg';
import NavigationBar from './NavigationBar';
import MediaButtons from './MediaButtons';

const FrontPage = (props) => {
    return (
      <div className="front_page">
        <NavigationBar active='blue' activateTheme={props.activateTheme}/>
        <div className="front_page_content">
            <img src={atuomine} className="front_page_left_img" alt='Portrait' />
            <h1>Anna</h1>
            <h1>Tuominen</h1>
            <h2>Aspiring Full Stack Developer</h2>
            <MediaButtons />
        </div>
      </div>
    )
  }

  export default FrontPage