import React from 'react'
import Home from './Component/Pages/Home'
import About from './Component/Pages/About'
import Skills from './Component/Pages/Skills'
import Projects from './Component/Pages/Projects'
import Contact from './Component/Pages/Contact'
import { BrowserRouter } from "react-router-dom"
import Footer from './Component/Footer'

function App() {

  const colors = {
    bg1: '#292F36',
    bg2: '#1A1E23',
    brand1: '#12F7D6',
    brand2: '#98FAEC',
    gray: '#43454D',
  }

  return (

    <BrowserRouter>
      <div>
        <Home colors={colors} />
        <About colors={colors} />
        <Skills colors={colors} />
        <Projects colors={colors} />
        <Contact colors={colors} />
        <Footer colors={colors} />
      </div>
    </BrowserRouter>


  )
}

export default App
