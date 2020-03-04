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
  
  const HomeButton = (props) => {
    return (
    <NavLink to={props.path} className ="home">Home</NavLink>
    )
  }
  
  const NavigationBar = (props) => {
    return (
      <>
      <ThemeMenu activateTheme={props.activateTheme} />
      <div className="navigation">
      <HomeButton exact path='/' />
      <ul>
        <NavigationButton path='/about' name = 'yellow' active = {props.active} label='About'/>
        <NavigationButton path='/skills' name = 'pink' active = {props.active} label='Skills'/>
        <NavigationButton path='/contact' name = 'green' active = {props.active} label='Contact'/>
        <NavigationButton path='/projects' name = 'purple' active = {props.active} label='Projects'/>
      </ul>
    </div>
      </>
    )
  }

  export default NavigationBar