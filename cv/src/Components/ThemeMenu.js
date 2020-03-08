import React, { useState } from 'react'

const ThemeMenu = (props) => {
    const [visibility, setVisibility] = useState(false);
    const showThemeMenu = () => {
      if (visibility === false) {
        setVisibility(true)
      } else {
        setVisibility(false)
      }
    }
    if (visibility === true) {
    return (
      <>
      <button className='theme_menu_button' onClick={showThemeMenu} title="Change color theme"></button>
      <div className="theme_menu">
        <ul>
            <li><button className='default' title='Colorful' onClick={() => props.activateTheme('default')}>D</button></li>
            <li><button className='pastel' title='Pastel' onClick={() => props.activateTheme('pastel')}>P</button></li>
            <li><button className='colorless' title='Black and White' onClick={() => props.activateTheme('colorless')}>C</button></li>
        </ul>
      </div>
      </>
    )
    }
    return (
      <button className='theme_menu_button' onClick={showThemeMenu} title="Change color theme"></button>
    )
  }

  export default ThemeMenu