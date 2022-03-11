import React from 'react';
import logo from './logo.svg';
import css from '../App.css';

const Splash = () => {
  return (
    <div className={css.App}>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
    </div>
  );
};

export default Splash;
