import React, {  useLayoutEffect, useState } from 'react'
import { ThemeProvider } from 'styled-components';
import { defaultTheme, pastelTheme, colorlessTheme } from './theme';
import { GlobalStyles } from './global';
import FrontPage from './Components/FrontPage';
import AboutPage from './Components/AboutPage';
import SkillPage from './Components/SkillPage';
import ContactPage from './Components/ContactPage';
import ProjectPage from './Components/ProjectPage';
import NavigationBar from './Components/NavigationBar';
import { TransitionGroup, CSSTransition } from "react-transition-group";
import styled from 'styled-components'
import {
    BrowserRouter,
    Route, Switch,
    useLocation
  } from 'react-router-dom';

  const PageContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background-color: red;
`;

const App = () => {
    const [theme, setTheme] = useState('default');
    const activateTheme = (id) => {
      if (id === 'default') {
        setTheme('default')
      } else if (id === 'pastel') {
        setTheme('pastel')
      } else {
        setTheme('colorless')
      }
    }
    const size = {
      height: window.innerHeight,
      width: window.innerWidth
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
          <BrowserRouter>
          <Route render={({ location }) => {
            var pathname = location.pathname;
            var key = pathname.split('/')[1] || 'root';
              return (
                <PageContainer>
                <TransitionGroup component={null}>
                  <CSSTransition
                    timeout={500}
                    classNames="page"
                    key={key}
                  >
                      <Switch location={location}>
                        <Route exact path="/" component={FrontPage} />
                        <Route path="/about" render={() => <AboutPage location={ location } />} />
                        <Route path="/skills" component={SkillPage} />
                        <Route path="/contact" component={ContactPage} />
                        <Route path="/projects" component={ProjectPage} />
                      </Switch>
                  </CSSTransition>
              </TransitionGroup>
              </PageContainer>

              )
              }} 
              />
              <Route path="/" render={() => <NavigationBar activateTheme={ activateTheme } />} />
          </BrowserRouter>
          </>
      </ThemeProvider>
    )
  }

  export default App