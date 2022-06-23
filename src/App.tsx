import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import SideBar from './components/sidebar/SideBar';

function App() {
  return (
    <div className="App">
      <Header />
      <div className="AppWrapper">
        <SideBar />
      </div>

    </div>
  );
}

export default App;
