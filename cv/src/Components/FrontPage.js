import React, { useState } from 'react'
import atuomine from './atuomine.jpg';
import MediaButtons from './MediaButtons';
import { PageTransition } from './PageTransition';
import styled, { keyframes } from 'styled-components';


const FrontPage = (props) => {
    return (
      <PageTransition>
      <div className="front_page">
        <div className="front_page_content">
            <img src={atuomine} className="front_page_left_img" alt='Portrait' />
            <h1>Anna</h1>
            <h1>Tuominen</h1>
            <h2>Aspiring Full Stack Developer</h2>
            <MediaButtons />
        </div>
      </div>
      </PageTransition>
    )
  }

  export default FrontPage