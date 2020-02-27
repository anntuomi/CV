import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  *,
  *::after,
  *::before {
    box-sizing: border-box;
  }

  body {
    background-color: ${({ theme }) => theme.navPrimary};
  }

  .theme_menu {
    position: absolute;
    top: 58px;
    left: 0;
    text-align: center;
    background-color: ${({ theme }) => theme.navPrimary};
    padding: 5px 20px 5px 10px;
    border-top-right-radius: 50px;
    border-bottom-right-radius: 50px;
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
    color: ${({ theme }) => theme.navSecondary};
    background-color: ${({ theme }) => theme.navPrimary};
    text-decoration: none;
    border-radius: 0%;
    height: 30px;
    width: 107px;
    border: none;
    margin-left: 0;
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
    width: 100%;
    height: 100%;
    min-height: 800px;
    position: absolute;
    top: 0;
    left: 0;
    text-align: center;
  }
  
  .content_title {
    width: 90%;
    max-width: 1200px;
    height: 70px;
    margin-left: auto;
    margin-right: auto;
    margin-top: 90px;
    margin-bottom: 0;
    background-color: rgba(50, 50, 50, 0.2);
    font-family: 'Wellfleet', sans-serif;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    text-align: left;
    padding-left: 20px;
  }

  .content_title h1 {
    padding-top: 5px;
    margin-bottom: 0;
    color: rgba(0, 0, 0, 0.3);
    font-size: 50px;
  }

  .content {
    width: 90%;
    margin: 0 auto 0 auto;
    max-width: 1200px;
    background-color: rgba(0, 0, 0, 0.2);
    border-bottom-left-radius: 40px;
    border-bottom-right-radius: 40px;
    color: ${({ theme }) => theme.navSecondary};
    padding: 20px 60px 40px 60px;
    text-align: left;
    font-family: 'BenchNine', sans-serif;
  }

  .about_page {
    background: ${({ theme }) => theme.aboutColor};
    background: ${({ theme }) => theme.aboutGradient};
    width: 100%;
    height: 100%;
    min-height: 1000px;
    position: absolute;
    top: 0;
    left: 0;
    text-align: center;
  }
  
  .skill_page {
    background: ${({ theme }) => theme.skillColor};
    background: ${({ theme }) => theme.skillGradient};
    width: 100%;
    height: 100%;
    min-height: 1000px;
    padding-bottom: 20px;
    position: absolute;
    top: 0;
    left: 0;
    text-align: center;
  }
  
  .contact_page {
    background: ${({ theme }) => theme.contactColor};
    background: ${({ theme }) => theme.contactGradient};
    width: 100%;
    height: 100%;
    min-height: 1000px;
    position: absolute;
    top: 0;
    left: 0;
    text-align: center;
  }
  
  .project_page {
    background: ${({ theme }) => theme.projectColor};
    background: ${({ theme }) => theme.projectGradient};
    width: 100%;
    height: 100%;
    min-height: 1000px;
    position: absolute;
    top: 0;
    left: 0;
    text-align: center;
  }
  
  .front_page_left {
    width: 75%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    text-align: center;
  }
  
  .front_page_right {
    width: 25%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 75%;
    text-align: center;
  }
  
  .front_page_content {
    width: 100%;
    display: block;
    position: absolute;
    text-align: center;
    justify-content: center;
    top: 5%;
    left: 0%;
    margin-top: 58px;
  }
  
  .front_page_left_img {
    width: 35vw;
    max-width: 420px;
    min-width: 200px;
    border-radius: 50%;
    filter: ${({ theme }) => theme.portraitFilter};
    border-width: 20px;
    margin-bottom: 20px;
  }
  
  .front_page h1 {
    font-family: 'Wellfleet', sans-serif;
    color: ${({ theme }) => theme.frontTitle};
    font-size: 6.5vw;
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
    height: 58px;
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
    width: 50%;
    height: 100%;
    margin: 0px auto 0px auto;
    position: absolute;
    left: 25%;
  }
  
  .navigation li {
    width: 25%;
    display: flex;
    height: 100%;
  }
  
  .navigation a.home {
    width: 10%;
    position: absolute;
    left: 5%;
    height: 100%;
    border-color: ${({ theme }) => theme.frontColor};
    border: none;
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
    font-size: 25px;
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
    .front_page h1 {
      font-size: 78px;
    }
    .front_page h2 {
      font-size: 30px;
    }
    .theme_menu {
      top: 78px;
    }
    .content_title {
      margin-top: 100px;
    }
    .navigation {
      height: 78px;
    }
    .navigation ul {
      height: 78px;
    }
    .navigation a {
      font-size: 30px;
      border-bottom-width: 6px;
      border-top-width: 6px;
      padding-top: 20px;
    }
    .front_page_content {
      margin-top: 78px;
    }
  }
  
  @media screen and (max-width: 800px) {
    .front_page {
      min-height: 600px;
      min-width: 500px;
    }
    .theme_menu button.menu {
      height: 30px;
      width: 80px;
    }
    .front_page h1 {
      font-size: 52px;
    }
    .front_page h2 {
      font-size: 20px;
    }
    .front_page_content {
      margin-top: 52px;
    }
    .theme_menu {
      top: 52px;
    }
    .navigation {
      height: 52px;
    }
    .content_title {
      margin-top: 80px;
    }
    .navigation ul {
      left: 10%;
      height: 52px;
      width: 90%;
    }
    .navigation a.home {
      left: 0%;
    }
    .navigation a {
      font-size: 20px;
      border-bottom-width: 4px;
      border-top-width: 4px;
      padding-top: 16px;
    }
  }
  `;