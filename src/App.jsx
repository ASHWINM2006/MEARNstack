import React from 'react'

import About from './function compunent/About';
import Home from './function compunent/Home';
import Contact from './function compunent/Contact';
import Gallery from './function compunent/Gallery';
import Navbar from './Navbar';



function App() {
  return (
    <>
    <Navbar/>

      
      <section>
        <About/>
        <Gallery/>
        <Home/>
        <Contact/>
       
      </section>
    </>
  );
}

export default App;
