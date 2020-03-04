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
        <button className='menu' onClick={showMenu} title="Change color theme"></button>
        <ul>
            <li><button className='default' title='Colorful' onClick={() => props.activateTheme('default')}>D</button></li>
            <li><button className='pastel' title='Pastel' onClick={() => props.activateTheme('pastel')}>P</button></li>
            <li><button className='colorless' title='Black and White' onClick={() => props.activateTheme('colorless')}>C</button></li>
        </ul>
      </div>
    )
    }
    return (
      <div className="theme_menu">
        <button className='menu' onClick={showMenu} title="Change color theme"></button>
      </div>
    )
  }

  export default ThemeMenu