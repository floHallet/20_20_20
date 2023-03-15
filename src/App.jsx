import React from 'react';
import reactLogo from './assets/react.svg';
import { Clock } from './Clock/Clock';
import './App.css';

function App() {

  return (
    <div className="App">
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src="/20_20_20/vite.svg" className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <h2>This app helps you following the 20-20-20 rule</h2>
      <div className="card">
        <Clock></Clock>
      </div>
      <p className="read-the-docs">
        For every 20 minutes a person looks at a screen, they should look at something 20 feet away for 20 seconds.
      </p>
    </div>
  )
}

export default App
