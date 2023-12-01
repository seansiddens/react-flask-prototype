import React, { useState, useEffect} from 'react';

import logo from './logo.svg';
import './App.css';

function App() {
  const [message, setMessage] = useState('');
  const [aboutMessage, setAboutMessage] = useState('');

  useEffect(() => {
    // Fetch data from the root endpoint
    fetch('http://localhost:5000/')
      .then(response => response.text())
      .then(data => setMessage(data));

    // Fetch data from the /about endpoint
    fetch('http://localhost:5000/about')
      .then(response => response.text())
      .then(data => setAboutMessage(data));
  }, []);

  return (
    <div className="App">
      <div className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h2>Welcome to React</h2>
      </div>
       <p>Response from Flask root endpoint:</p>
        <p>{message}</p>
        <p>Response from Flask /about endpoint:</p>
        <p>{aboutMessage}</p>
    </div>
  );
}

export default App;
