import React,{useState} from 'react';


import './App.css';
import Home from './components/Home';
import Navbar from './components/Template/Navbar'
import TextArea from './components/Experiment/Textarea'
import Alert from './components/Template/Alert'
import About from './components/Experiment/About'
import { BrowserRouter as Router, Routes, Route, useLocation} from 'react-router-dom';
import NewsComponents from './components/Experiment/NewsComponents';

function App() {
  const [mode, setMode]   = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert = (massage, type) =>{
    setAlert({
      msg : massage,
      type: type
    });
    setTimeout(()=>{
      setAlert(null)
    },1500)
  }

  const toggle = () =>{
    if(mode == 'light'){
      setMode("dark");
      showAlert("Dark mode is applied","success")
    }else if(mode == "dark"){
      setMode('light');
      showAlert("Light mode is applied","success")
    }
    console.log(mode);
  }
  return (
    <>
    <Router>
      <Navbar Title="Let's Start" toggle={toggle} mode={mode}/>
      {/* <Alert alert={alert}/>
      <div className='main-body container h-100'>
        <TextArea mode={mode}/>
      </div>
      <div className='container'>
        
      </div> */}
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/TextAnalyzer' element={<TextArea mode={mode}/>}></Route>
        <Route path='/about' element={<About/>}></Route>
        <Route path='/News' element={<NewsComponents/>} />
      </Routes>
      </Router>
    </>
  );  
}

export default App;
