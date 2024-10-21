import React,{useState} from 'react';


import './App.css';
import Home from './components/Home';
import Navbar from './components/Template/Navbar'
import TextArea from './components/Experiment/Textarea'
// import Alert from './components/Template/Alert'
import About from './components/Experiment/About'
import { BrowserRouter as Router, Routes, Route, useLocation} from 'react-router-dom';
import NewsComponents from './components/Experiment/NewsComponents';
import LoadingBar from 'react-top-loading-bar'
import Calculater from './components/Experiment/Calculater';
import StudentListing from './components/Experiment/StudentListing';
import MCQ_test from './components/Experiment/MCQ_test/test_templete'

function App() {
  const [mode, setMode]   = useState('light');
  const [alert, setAlert] = useState(null);
  const [newsCount, setNewsCount] = useState(6);
  const [projectName, setProjectName] = useState("Let's Start");
  const [progress, setProgress] = useState(0)
  const APIKey = process.env.REACT_APP_NEWS_API_KEY;
  
  const setProgressBar = (progress)=>{
    setProgress(progress);
  }
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
    if(mode ===  'light'){
      setMode("dark");
      showAlert("Dark mode is applied","success")
    }else if(mode ===  "dark"){
      setMode('light');
      showAlert("Light mode is applied","success")
    }
    console.log(mode);
  }
  return (
    <>
      <Router>
        <Navbar Title={projectName} toggle={toggle} mode={mode}/>
        <LoadingBar
          color='#f11946'
          progress={progress}
          height={3}
        />
        <div className='my-3'> 
          &nbsp;
        </div>
        

        <Routes>
          <Route path='/' element={<Home setProgressBar={setProgressBar} />}></Route>
          <Route path='/TextAnalyzer' element={<TextArea setProgressBar={setProgressBar} mode={mode}/>}></Route>
          <Route path='/about' element={<About setProgressBar={setProgressBar} />}></Route>
          <Route path='/Calculater' element={<Calculater setProgressBar={setProgressBar} />}></Route>
          <Route path='/StudentList' element={<StudentListing setProgressBar={setProgressBar} />}></Route>
          <Route path='/MCQ_test' element={<MCQ_test setProgressBar={setProgressBar} />}></Route>

          <Route exact path='business' element={<NewsComponents  ApiKey={APIKey}  setProgressBar={setProgressBar} key="business" pageSize={newsCount} category='business' Title={projectName} />} />
          <Route exact path='/entertainment' element={<NewsComponents  ApiKey={APIKey}  setProgressBar={setProgressBar} key="entertainment" pageSize={newsCount} category='entertainment' Title={projectName}/>} />
          <Route exact path='/general' element={<NewsComponents  ApiKey={APIKey}  setProgressBar={setProgressBar} key="general" pageSize={newsCount} category='general' Title={projectName}/>} />
          <Route exact path='/health' element={<NewsComponents  ApiKey={APIKey}  setProgressBar={setProgressBar} key="health" pageSize={newsCount} category='health' Title={projectName}/>} />
          <Route exact path='/science' element={<NewsComponents  ApiKey={APIKey}  setProgressBar={setProgressBar} key="science" pageSize={newsCount} category='science' Title={projectName}/>} />
          <Route exact path='/sports' element={<NewsComponents  ApiKey={APIKey}  setProgressBar={setProgressBar} key="sports" pageSize={newsCount} category='sports' Title={projectName}/>} />
          <Route exact path='/technology' element={<NewsComponents  ApiKey={APIKey}  setProgressBar={setProgressBar} key="technology" pageSize={newsCount} category='technology' Title={projectName}/>} />
        </Routes>
      </Router>
    </>
  );  
}

export default App;
