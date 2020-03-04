import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  *,
  *::after,
  *::before {
    box-sizing: border-box;
  }

  body {
    background-color: ${({ theme }) => theme.navPrimary};
    overflow-x: hidden;
    min-height: 100%;
  }

  .theme_menu {
    position: absolute;
    z-index: +1;
    top: 0px;
    left: 91%;
    text-align: center;
    background-color: ${({ theme }) => theme.navPrimary};
    padding: 5px 2px 5px 2px;
    border-bottom-left-radius: 50px;
    border-bottom-right-radius: 50px;
  }

  .theme_menu ul {
    list-style-type: none;
    padding: 0;
  }

  .theme_menu button {
    color: rgba(0, 0, 0, 0);
    text-decoration: none;
    color: rgba(0, 0, 0, 0)
    margin: 4px;
    border-radius: 50%;
    height: 30px;
    width: 30px;
    border-color: ${({ theme }) => theme.navSecondary};
    font-family: 'Wellfleet', sans-serif;
    margin: 4px;
    text-align: left;
    font-size: 12px;
  }
  
  .theme_menu button b {
    color: ${({ theme }) => theme.frontColor};
  }

  .theme_menu button.menu {
      border-radius: 50%;
      width: 30px;
      height: 30px;
      background: linear-gradient(270deg, rgba(255,0,0,1) 0%, rgba(255,163,10,1) 18%, rgba(254,255,20,1) 37%, rgba(65,253,36,1) 60%, rgba(54,163,212,1) 81%, rgba(149,69,252,1) 100%);
  }
  .theme_menu button.default {
    background: linear-gradient(0deg, rgba(255,224,13,1) 0%, rgba(255,0,125,1) 21%, rgba(0,159,255,1) 46%, rgba(66,255,183,1) 70%, rgba(139,0,255,1) 103%);
  }

  .theme_menu button.default:hover {
    background: radial-gradient(circle, rgba(0,159,255,1) 0%, rgba(139,0,255,1) 20%, rgba(255,0,125,1) 54%, rgba(255,224,13,1) 78%, rgba(66,255,183,1) 100%);
}
.theme_menu button.pastel {
  background: linear-gradient(0deg, rgba(155,217,255,1) 0%, rgba(215,255,182,1) 100%);
}
.theme_menu button.pastel:hover {
  background: radial-gradient(circle, rgba(155,217,255,1) 0%, rgba(215,255,182,1) 100%);
}
.theme_menu button.colorless {
  background: linear-gradient(0deg, rgba(255,255,255,1) 0%, rgba(0,0,0,1) 100%);
}
.theme_menu button.colorless:hover {
  background: radial-gradient(circle, rgba(255,255,255,1) 0%, rgba(0,0,0,1) 100%);
}

.front_page {
    background: ${({ theme }) => theme.frontColor};
    background: ${({ theme }) => theme.frontGradient};
    position: absolute;
    width: 100%;
    min-height: calc(${window.innerHeight}px - 10px);
    top: 0;
    left: 0;
    text-align: center;
    z-index: -1;
    padding-top: 50px;
  }

  .page {
    width: 100%;
    position: absolute;
    top: 0;
    left: 0;
    text-align: center;
    z-index: -1;
  }
  
  .content_title_about {
    width: 100%;
    height: 200px;
    background: ${({ theme }) => theme.aboutColor};
    background: ${({ theme }) => theme.aboutGradient};
  }

  .content_title_skill {
    width: 100%;
    height: 200px;
    background: ${({ theme }) => theme.skillColor};
    background: ${({ theme }) => theme.skillGradient};
  }

  .content_title_contact {
    width: 100%;
    height: 200px;
    background: ${({ theme }) => theme.contactColor};
    background: ${({ theme }) => theme.contactGradient};
  }

  .content_title_project {
    width: 100%;
    height: 200px;
    background: ${({ theme }) => theme.projectColor};
    background: ${({ theme }) => theme.projectGradient};
  }

  .content_title {
    width: 80%;
    max-width: 1100px;
    height: 100%;
    display: flex;
    justify-content: left;
    align-items: baseline;
    font-family: 'Wellfleet', sans-serif;
    color: ${({ theme }) => theme.navPrimary};
    margin-left: auto;
    margin-right: auto;
    padding-top: 100px;
  }

  .content_title ul {
    list-style-type: none;
  }

  .content_title li {
    display: inline;
    padding-right: 10px;
  }

  .content_title h1 {
    font-size: 50px;    
  }

  .content_title a {
    text-decoration: none;
    color: rgba(0, 0, 0, 0.8);
  }

  .content_title a.active {
    text-decoration: underline;
  }

  .content_title a:hover {
    color: rgba(0, 0, 0, 0.4);
  }

  .content {
    width: 90%;
    font-size: 1em;
    margin: 0 auto 20px auto;
    max-width: 1200px;
    color: ${({ theme }) => theme.contentText};
    padding: 20px 60px 40px 60px;
    text-align: left;
    font-family: 'Lato', sans-serif;
    border-bottom-left-radius: 30px;
    border-bottom-right-radius: 30px;
  }
  
  .front_page_content {
    width: 100%;
    display: block;
    text-align: center;
    justify-content: center;
    left: 0%;
    margin-top: 30px;
  }
  
  .front_page_left_img {
    width: 35vw;
    max-width: 350px;
    min-width: 200px;
    border-radius: 50%;
    filter: ${({ theme }) => theme.portraitFilter};
    border-width: 20px;
    margin-bottom: 10px;
  }
  
  .front_page h1 {
    font-family: 'Wellfleet', sans-serif;
    color: ${({ theme }) => theme.frontTitle};
    font-size: 4.5vw;
    margin-bottom: -10px;
    margin-top: -10px;
  }
  
  .front_page h2 {
    font-family: 'BenchNine', sans-serif;
    font-style: italic;
    color: ${({ theme }) => theme.frontSubtitle};
    font-size: 2.5vw;
  }
  
  .navigation {
    font-family: 'Wellfleet', sans-serif;
    display: flex;
    width: 100%;
    height: 50px;
    background-color: ${({ theme }) => theme.navPrimary};
    justify-content: left;
    overflow: hidden;
    margin: 0 auto 20px auto;
    padding: 0;
    position: absolute;
    top: 0%;
    left: 0%;
  }
  
  .navigation ul {
    list-style-type: none;
    display: flex;
    padding: 0;
    width: 60%;
    height: 100%;
    margin: 0px auto 0px auto;
    position: absolute;
    left: 20%;
  }
  
  .navigation li {
    width: 25%;
    display: flex;
    height: 100%;
  }
  
  .navigation a.home {
    width: 10%;
    height: 100%;
    position: absolute;
    left: 2%;
    border-color: ${({ theme }) => theme.frontColor};
  }

  .navigation a.home:hover {
    color: ${({ theme }) => theme.frontColor};

  }

  .navigation a.blue {
    border-color: ${({ theme }) => theme.frontColor};
  }

  .navigation a.yellow {
    border-color: ${({ theme }) => theme.aboutColor};
  }
  
  .navigation a.pink {
    border-color: ${({ theme }) => theme.skillColor};
  }
  
  .navigation a.green {
    border-color: ${({ theme }) => theme.contactColor};
  }
  
  .navigation a.purple {
    border-color: ${({ theme }) => theme.projectColor};
  }

  .navigation a.blue:hover {
    background-color: ${({ theme }) => theme.frontColor};
    border-color: ${({ theme }) => theme.frontColor};
  }

  .navigation a.yellow:hover {
    background-color: ${({ theme }) => theme.aboutColor};
    color: ${({ theme }) => theme.navPrimary};
    border-color: ${({ theme }) => theme.aboutColor};
  }
  
  .navigation a.pink:hover {
    background-color: ${({ theme }) => theme.skillColor};
    border-color: ${({ theme }) => theme.skillColor};
  }
  
  .navigation a.green:hover {
    background-color: ${({ theme }) => theme.contactColor};
    border-color: ${({ theme }) => theme.contactColor};
    color: ${({ theme }) => theme.navPrimary};
  }
  
  .navigation a.purple:hover {
    background-color: ${({ theme }) => theme.projectColor};
    border-color: ${({ theme }) => theme.projectColor};
  }
  
  .navigation a.yellow_active {
    background-color: ${({ theme }) => theme.aboutColor};
    color: ${({ theme }) => theme.navPrimary};
    border-color: ${({ theme }) => theme.aboutColor};
  }
  
  .navigation a.blue_active {
    border-color: ${({ theme }) => theme.frontColor};
    color: rgba(0, 0, 0, 0);
    cursor: default;
  }

  .navigation a.pink_active {
    background-color: ${({ theme }) => theme.skillColor};
    border-color: ${({ theme }) => theme.skillColor};
  }
  
  .navigation a.green_active {
    background-color: ${({ theme }) => theme.contactColor};
    color: ${({ theme }) => theme.navPrimary};
    border-color: ${({ theme }) => theme.contactColor};
  }
  
  .navigation a.purple_active {
    background-color: ${({ theme }) => theme.projectColor};
    border-color: ${({ theme }) => theme.projectColor};
  }
  
  .navigation a {
    width: 25%;
    flex: 1;
    color: ${({ theme }) => theme.navSecondary};
    text-align: center;
    text-decoration: none;
    font-size: 16px;
    border-bottom-width: 4px;
    border-bottom-style: solid;
    padding-top: 15px;
  }
  
  .button_media {
    text-decoration: none;
    background-color: ${({ theme }) => theme.mediaColor};
    border-radius: 5px;
    color: ${({ theme }) => theme.frontColor};
    text-align: center;
    font-size: 36px;
    padding-left: 5px;
    padding-right: 5px;
    font-family: 'Myriad Pro';
    font-weight: 900;
    cursor: pointer;
    margin: 10px;
    height: 40px;
    width: 40px;
  }
  
  .button_media img {
    height: 28px;
    width: 28px;
    filter: ${({ theme }) => theme.buttonFilter};
  }
  
  .button_media:hover {
    background-color: ${({ theme }) => theme.skillColor};
    color: white;
  }
  
  .button_media:hover img {
    filter: brightness(100%);
  }
  
  @media screen and (min-width: 1200px) {
    .front_page {
      min-height: 750px;
    }
    .front_page h1 {
      font-size: 54px;
    }
    .front_page h2 {
      font-size: 30px;
    }
    .theme_menu {
      padding-top: 10px;
    }
    .content_title {
      margin-top: 0;
    }
    .navigation {
      height: 60px;
    }
    .navigation ul {
      width: 50%;
      left: 25%;
    }
    .navigation a {
      font-size: 20px;
      border-bottom-width: 6px;
      border-top-width: 6px;
      padding-top: 15px;
    }
    .front_page_content {
      margin-top: 50px;
    }
  }
  
  @media screen and (max-width: 800px) {
    .theme_menu {
      left: 91%;
      top: 0px;
      padding-top: 10px;
    }
    .theme_menu button {
      width: 25px;
      height: 25px;
    }
    .theme_menu button.menu {
      width: 25px;
      height: 25px;
  }

    .front_page h1 {
      font-size: 32px;
    }
    .front_page h2 {
      font-size: 20px;
    } 
    .front_page_content {
      margin-top: 30px;
    }
    .navigation {
      height: 52px;
    }
    .content_title {
      margin-top: 0;
    }
    .navigation ul {
      left: 10%;
      height: 52px;
      width: 80%;
    }
    .navigation a.home {
      left: 0%;
    }
    .navigation a {
      font-size: 16px;
      border-bottom-width: 4px;
      border-top-width: 4px;
      padding-top: 16px;
    }
  }
  `;