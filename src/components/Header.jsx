import React from 'react';
import ReactImg from '../assets/react.svg';

function Header() {
  return (
    <header className="container">
      <nav className="primary-nav">
        <figure>
          <img className="nav-logo" src={ReactImg} alt="react logo" />
          <figcaption>ReactFacts</figcaption>
        </figure>
        <span className="nav-link">React Course - Project 1</span>
      </nav>
    </header>
  );
}

export default Header;
