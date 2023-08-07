import React from 'react';
import ReactDOM from 'react-dom/client';

import './index.css';
import image from './images/logo192.png';

const Header = () => {
  return (
    <div>
      <nav className="nav-container">
        <img src={image} className="nav-img" width={'50 px'} alt="React logo" />
        <ul className="nav-items">
          <li>Pricing</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </nav>
    </div>
  );
};

const Page = () => {
  return (
    <div className="page-container">
      <h1>Reasons I'm excited to learn React</h1>
      <ol>
        <li>It's a popular library!</li>
        <li>I'm more likely to get a job as a developer if I know React</li>
      </ol>
    </div>
  );
};

const Footer = () => {
  return (
    <p className="footer">© 2023 Salif development. All rights reserved.</p>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <div className="content">
    <Header />
    <Page />
    <Footer />
  </div>
);
