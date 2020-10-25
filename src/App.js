import React from 'react';
import './App.css';
import NavBar from '../src/components/NavBar/NavBar.js';
import SideNav from '../src/components/SideNav/SideNav.js';

function App() {
  return (
    <div>
    <SideNav/>
    <div className="main">
    <NavBar/>
        <div className="pageCss">
           
          </div>
    </div>

  </div>
  );
}

export default App;
