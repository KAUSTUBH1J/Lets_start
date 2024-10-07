import React from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './components/Template/Navbar'
import TextArea from './components/Experiment/Textarea'
import Signal from './components/Traffic_Light/Signal'
function App() {
  return (
    <>
      <Navbar Title="Let's Start"/>
      <div className='main-body'>
        <TextArea/>

      </div>
    </>
  );  
}

export default App;
