import React, { useState } from 'react'
import ThemeMenu from './ThemeMenu'
import {
    BrowserRouter as Router,
    Route, NavLink, Redirect, withRouter
  } from 'react-router-dom'

const NavigationButton = (props) => {
    const activeName = props.name.concat('_active')
    return (
    <li><NavLink to={props.path} className={props.name} activeClassName={activeName}>{props.label}</NavLink></li>
    )
  }
  
  const NavigationMobile = (props) => {
    return (
      <>
      <div className="navigation_mobile">
      <ul>
      <li><NavLink exact to='/' className='blue' activeClassName='blue_active'>Home</NavLink></li>
        <NavigationButton path='/about' name = 'yellow' active = {props.active} label='About'/>
        <NavigationButton path='/skills' name = 'pink' active = {props.active} label='Skills'/>
        <NavigationButton path='/contact' name = 'green' active = {props.active} label='Contact'/>
        <NavigationButton path='/projects' name = 'purple' active = {props.active} label='Projects'/>
      </ul>
    </div>
      </>
    )
  }

  const MenuToggleButton = (props) => {
      const [visibility, setVisibility] = useState(false);

      const toggleMenu = () => {
        if (visibility === false) {
          setVisibility(true)
        } else {
          setVisibility(false)
        }
      }
      if (visibility === true) {
        return (
            <>
                <ThemeMenu activateTheme={props.activateTheme} />
                <button className="hamburger_menu" onClick={toggleMenu}>X</button>
                <NavigationMobile />
            </>
        )
        }
        return (
            <>
                <ThemeMenu activateTheme={props.activateTheme} />
                <button className="hamburger_menu" onClick={toggleMenu}>☰</button>
            </>
        )
  }

  export default MenuToggleButton