import React from 'react';
import { useState } from 'react';
import ReactImg from '../assets/react.svg';

function Header() {
  const [theme, setTheme] = useState({ active: true, name: 'dark' });
  function toggleTheme(e) {
    setTheme(({ active, name }) => ({
      active: !active,
      name: name === 'dark' ? 'light' : 'dark',
    }));

    console.log(theme);
  }
  return (
    <header>
      <nav className="primary-nav">
        <figure>
          <img className="nav-logo" src={ReactImg} alt="react logo" />
          <figcaption>ReactFacts</figcaption>
        </figure>
        <div className={`slider-wrapper ${theme.name}`}>
          <span>Light</span>
          <button className="slider" onClick={toggleTheme}>
            <div className="slider-ball light-ball"></div>
          </button>
          <span>Dark</span>
        </div>
      </nav>
    </header>
  );
}

export default Header;
