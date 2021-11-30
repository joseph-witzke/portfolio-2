//GENERAL IMPORTS
import React from 'react';

//COMPONENTS AND CONTAINERS
import { About, Footer, Header, Projects } from './containers/';
import { Navbar, Project } from './components';

//STYLES
import './App.css';

function App() {
  return (
    <div className='App'>
      <Navbar />
      <Header />
      <About />
      <Projects />
      <Footer />
    </div>
  );
}

export default App;
