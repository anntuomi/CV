import React, { useState } from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import { gsap } from "gsap";

ReactDOM.render(<App gsap={gsap} />, document.getElementById('root'))