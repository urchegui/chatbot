import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from "./components/Header"
import MainContent from "./components/MainContent"
import Footer from "./components/Footer"

function App() {
  return (
    <div>
      <Header />
      <br></br>
      <MainContent />
      <br></br>
      <Footer />
    </div>
  );
}

export default App;
