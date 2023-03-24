import logo from './logo.svg';
import React, { useState, useEffect } from "react";
import './App.css';

function App() {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");

  useEffect(() => {
    fetch('/app-data')
      .then((res) => res.json())
      .then((data) => {
        setName(data.name);
        setDescription(data.description);
      })
      .catch((e) => {
        console.error(e);
      });

  }, []);
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <p>{`welcome to ${name} a ${description}`}</p>
      </header>
    </div>
  );
}

export default App;
