import React,{useState, useEffect} from 'react'
import logo from './logo.svg';
import './App.css';
import BeautifulNavbar from './navbar.js'
import Hero from './hero.js';
import About from './about.js';
import Eduation from './education.js';
import Skills from './skills.js';
import { ThemeProvider } from "./ThemeContext.js"
import "animate.css";
import Project from './project.js';
import Contect from './contect.js';


function App() {
  
  return (
    <>
    <ThemeProvider>
      <BeautifulNavbar />
    <Hero />
    <About/>
    <Eduation/>
    <Skills/>
    <Project/>
    <Contect/>
    </ThemeProvider>
    
    
    </>
    
    );
}

export default App;
