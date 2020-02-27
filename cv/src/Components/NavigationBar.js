import React, { useState } from 'react'
import ThemeMenu from './ThemeMenu'
import {
    BrowserRouter as Router,
    Route, Link, Redirect, withRouter
  } from 'react-router-dom'

const NavigationButton = (props) => {
    const buttonClass = (props.name === props.active ? props.name.concat('_active') : props.name)
    return (
    <li><Link to={props.path} className = {buttonClass}>{props.label}</Link></li>
    )
  }
  
  const HomeButton = (props) => {
    return (
    <Link to={props.path} className ="home"><i className="fa fa-home"></i></Link>
    )
  }
  
  const NavigationBar = (props) => {
    return (
      <>
      <div className="navigation">
      <HomeButton exact path='/' />
      <ul>
        <NavigationButton path='/about' name = 'yellow' active = {props.active} label='About'/>
        <NavigationButton path='/skills' name = 'pink' active = {props.active} label='Skills'/>
        <NavigationButton path='/contact' name = 'green' active = {props.active} label='Contact'/>
        <NavigationButton path='/projects' name = 'purple' active = {props.active} label='Projects'/>
      </ul>
    </div>
        <ThemeMenu activateTheme={props.activateTheme} />
      </>
    )
  }

  export default NavigationBar