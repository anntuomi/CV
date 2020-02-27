import React, { useState } from 'react'

const ThemeMenu = (props) => {
    const [visibility, setVisibility] = useState(false);
    const showMenu = () => {
      if (visibility === false) {
        setVisibility(true)
      } else {
        setVisibility(false)
      }
    }
    if (visibility === true) {
    return (
      <div className="theme_menu">
            <button className='menu' onClick={showMenu}>Color Themes <b>&#60;</b></button>
            <button className='default' onClick={() => props.activateTheme('default')}>D</button>
            <button className='pastel' onClick={() => props.activateTheme('pastel')}>P</button>
            <button className='colorless' onClick={() => props.activateTheme('colorless')}>C</button>
      </div>
    )
    }
    return (
      <div className="theme_menu">
        <button className='menu' onClick={showMenu}>Color Themes <b>&#62;</b></button>
      </div>
    )
  }

  export default ThemeMenu