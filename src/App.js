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
  const [newsCount, setNewsCount] = useState(6);
  const [projectName, setProjectName] = useState("Let's Start");
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
      <Navbar Title={projectName} toggle={toggle} mode={mode}/>
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
        <Route exact path='/business' element={<NewsComponents key="business" pageSize={newsCount} category='business' Title={projectName} />} />
        <Route exact path='/entertainment' element={<NewsComponents key="entertainment" pageSize={newsCount} category='entertainment' Title={projectName}/>} />
        <Route exact path='/general' element={<NewsComponents key="general" pageSize={newsCount} category='general' Title={projectName}/>} />
        <Route exact path='/health' element={<NewsComponents key="health" pageSize={newsCount} category='health' Title={projectName}/>} />
        <Route exact path='/science' element={<NewsComponents key="science" pageSize={newsCount} category='science' Title={projectName}/>} />
        <Route exact path='/sports' element={<NewsComponents key="sports" pageSize={newsCount} category='sports' Title={projectName}/>} />
        <Route exact path='/technology' element={<NewsComponents key="technology" pageSize={newsCount} category='technology' Title={projectName}/>} />
      </Routes>
      </Router>
    </>
  );  
}

export default App;
