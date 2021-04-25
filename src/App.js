import React from 'react';
import './App.css';
import MainHeader from './components/MainHeader.js';
import MainContent from './components/MainContent.js';
import MainFooter from './components/MainFooter.js';

function App() {
  return (
    <div>
      <MainHeader />
      <MainContent />
      <MainFooter />
    </div>
  );
}

export default App;
