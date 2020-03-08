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
import NavigationMobile from './Components/NavigationMobile';
import { TransitionGroup, CSSTransition } from "react-transition-group";
import styled from 'styled-components'
import {
    BrowserRouter,
    Route, Switch
  } from 'react-router-dom';

  const PageContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  left: 0;
  background-color: red;
`;

const Navigation = (props) => {
  if (props.width < 800)
  return (
      <NavigationMobile activateTheme={props.activateTheme} />
  )
  return (
    <NavigationBar activateTheme={props.activateTheme} />
)
}

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
    function useWindowSize() {
      const [size, setSize] = useState([0, 0]);
      useLayoutEffect(() => {
        function updateSize() {
          setSize([window.innerWidth, window.innerHeight]);
        }
        window.addEventListener('resize', updateSize);
        updateSize();
        return () => window.removeEventListener('resize', updateSize);
      }, []);
      return size;
    }

    const dimensions = useWindowSize();
    const size = {
      height: dimensions[1],
      width: dimensions[0]
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
        <GlobalStyles size={size}/>
          <BrowserRouter>
          <Route path="/" render={() => <Navigation activateTheme={ activateTheme } width={ size.width } />} />
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
          </BrowserRouter>
          </>
      </ThemeProvider>
    )
  }

  export default App