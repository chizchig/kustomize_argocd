import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';

function App() {
  const path = window.location.pathname;

  // Determine which HTML file to render based on the current path
  let page;
  if (path === '/about') {
    page = 'About.html';
  } else if (path === '/services') {
    page = 'Services.html';
  } else if (path === '/contact') {
    page = 'Contact.html';
  } else {
    page = 'Home.html';
  }

  // Load and render the HTML file dynamically
  fetch(page)
    .then(response => response.text())
    .then(html => {
      document.getElementById('root').innerHTML = html;
    })
    .catch(error => {
      console.error('Error loading page:', error);
    });

  return null; // We don't need to render anything with React
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
