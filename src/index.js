import React from 'react';
import ReactDOM from 'react-dom/client';

import { Header } from './Header.js';
import { Page } from './Page.js';
import { Footer } from './Footer.js';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <div className="content">
    <Header />
    <Page />
    <Footer />
  </div>
);
