import logo from '../logo.svg';
import '../App.css';
import React from 'react'
// import { useParams } from 'react-router-dom'

function View(props) {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          何しに来たんですか
        </p>
        <a
          className="App-link"
          href="https://Twitter.com/Tech_Kazu"
          target="_blank"
          rel="noopener noreferrer"
        >
          開発者Twitter
        </a>
      </header>
    </div>
  );
}

export default View;
