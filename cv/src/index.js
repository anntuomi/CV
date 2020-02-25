import React from 'react'
import ReactDOM from 'react-dom'
import './index.css';
import atuomine from './atuomine.jpg';
import github from './github_logo.png';

const NavigationBar = () => {
  return (
    <div className="navigation">
    <ul>
      <li><a className="yellow" style={{borderColor: "#ffd900"}} href="default.asp">About</a></li>
      <li><a className="pink" style={{borderColor: "#f23084"}} href="news.asp">Skills</a></li>
      <li><a className="green" style={{borderColor: "#88f23d"}} href="contact.asp">Contact</a></li>
      <li><a className="purple" style={{borderColor: "#9b3df2"}} href="about.asp">Projects</a></li>
    </ul>
  </div>
  )
}

const MediaButtons = () => {
  return (
    <div>
    <a className="button_media" href="https://linkedin.com/in/anna-tuominen-4382aa8a" target="_blank" title="Linkedin">in</a>
    <a className="button_media" href="https://github.com/anntuomi" target="_blank" title="Github"><img src={github} alt='Git' /></a>
    </div>
  )
}

const FrontPage = () => {
  return (
    <div className="front_page">
      <div className="front_page_title">
          <img src={atuomine} className="front_page_left_img" alt='Portrait' />
          <h1>Anna</h1>
          <h1>Tuominen</h1>
          <h2>Aspiring Full Stack Developer</h2>
          <NavigationBar />
          <MediaButtons />
      </div>
    </div>
  )
}

const App = () => {
  return (
    <FrontPage />
  )
}

ReactDOM.render(<App />, document.getElementById('root'))