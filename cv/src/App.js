import React, { useState } from 'react'
import { ThemeProvider } from 'styled-components';
import { defaultTheme, pastelTheme, colorlessTheme } from './theme';
import { GlobalStyles } from './global';
import FrontPage from './Components/FrontPage';
import AboutPage from './Components/AboutPage';
import SkillPage from './Components/SkillPage';
import ContactPage from './Components/ContactPage';
import ProjectPage from './Components/ProjectPage';
import {
    BrowserRouter as Router,
    Route, Link, Redirect, withRouter
  } from 'react-router-dom';

const App = () => {
    const [theme, setTheme] = useState('default');
    let pressed = false;
    const activateTheme = (id) => {
      if (id === 'default') {
        setTheme('default')
      } else if (id === 'pastel') {
        setTheme('pastel')
      } else {
        setTheme('colorless')
      }
    }
      let selectedTheme = defaultTheme;
      switch(theme) {
        case 'pastel':
          selectedTheme = pastelTheme;
          break;
        case 'colorless':
          selectedTheme = colorlessTheme;
          break;
        default:
          selectedTheme = defaultTheme;
      }
    return (
      <ThemeProvider theme={selectedTheme}>
      <>
        <GlobalStyles />
          <Router>
              <Route exact path="/" render={() => <FrontPage activateTheme={activateTheme}/>} />
              <Route path="/about" render={() => <AboutPage activateTheme={activateTheme}/>} />
              <Route path="/skills" render={() => <SkillPage activateTheme={activateTheme}/>} />
              <Route path="/contact" render={() => <ContactPage activateTheme={activateTheme}/>} />
              <Route path="/projects" render={() => <ProjectPage activateTheme={activateTheme}/>} />
          </Router>
          </>
      </ThemeProvider>
    )
  }

  export default App