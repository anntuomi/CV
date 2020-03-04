import React, { useState } from 'react'
import github from './github_logo.png'

const MediaButtons = () => {
    return (
      <div>
      <a className="button_media" href="https://linkedin.com/in/anna-tuominen-4382aa8a" target="_blank" rel="noopener noreferrer" title="Linkedin">in</a>
      <a className="button_media" href="https://github.com/anntuomi" target="_blank" rel="noopener noreferrer" title="Github"><img src={github} alt='Git' /></a>
      </div>
    )
  }

  export default MediaButtons