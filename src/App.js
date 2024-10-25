
import React,{useState, Suspense, lazy,createContext} from 'react';

import { BrowserRouter as Router, Routes, Route, useLocation} from 'react-router-dom';
import './App.css';


import Navbar from './components/Template/Navbar'
import LoadingBar from 'react-top-loading-bar'


import { store } from './redux/store'
import { Provider } from 'react-redux'

const Home        = lazy(()=>import('./components/Home'))
const TextArea    = lazy(()=>import('./components/Experiment/Textarea'))
const About       = lazy(()=>import('./components/Experiment/About'))
const NewsComponents = lazy(()=>import('./components/Experiment/NewsComponents'))
const StudentListing = lazy(()=>import('./components/Experiment/StudentListing'))

const DropDown      = lazy(()=>import('./components/Experiment/DropDown'))

const MCQ_test      = lazy(()=>import('./components/Experiment/MCQ_test/test_templete'))
const Calculater    = lazy(()=>import('./components/Experiment/Calculater'))
const ProductFilter = lazy(()=> import('./components/Experiment/ProductFilter'))

export const GobleState = createContext(0);

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
      <Router >
        <Provider store={store}>
        <GobleState.Provider value={{mode: mode,toggle:toggle}} >
          <Navbar Title={projectName} />
          <LoadingBar
            color='#f11946'
            progress={progress}
            height={3}
          />
          <div className='my-3'> 
            &nbsp;
          </div>
          
          <Suspense fallback='Loading...'>
            <Routes>
              <Route path='/' element={<Home setProgressBar={setProgressBar} />}></Route>
              <Route path='/TextAnalyzer' element={<TextArea setProgressBar={setProgressBar} mode={mode}/>}></Route>
              <Route path='/about' element={<About setProgressBar={setProgressBar} />}></Route>
              <Route path='/Calculater' element={<Calculater setProgressBar={setProgressBar} />}></Route>
              <Route path='/StudentList' element={<StudentListing setProgressBar={setProgressBar} />}></Route>
              <Route path='/MCQ_test' element={<MCQ_test setProgressBar={setProgressBar} />}></Route>
              <Route path='/DropDwon' element={<DropDown setProgressBar={setProgressBar} />}></Route>

              <Route path='/product-filter' element={<ProductFilter setProgressBar={setProgressBar} />}></Route>
              
              <Route exact path='business' element={<NewsComponents  ApiKey={APIKey}  setProgressBar={setProgressBar} key="business" pageSize={newsCount} category='business' Title={projectName} />} />
              <Route exact path='/entertainment' element={<NewsComponents  ApiKey={APIKey}  setProgressBar={setProgressBar} key="entertainment" pageSize={newsCount} category='entertainment' Title={projectName}/>} />
              <Route exact path='/general' element={<NewsComponents  ApiKey={APIKey}  setProgressBar={setProgressBar} key="general" pageSize={newsCount} category='general' Title={projectName}/>} />
              <Route exact path='/health' element={<NewsComponents  ApiKey={APIKey}  setProgressBar={setProgressBar} key="health" pageSize={newsCount} category='health' Title={projectName}/>} />
              <Route exact path='/science' element={<NewsComponents  ApiKey={APIKey}  setProgressBar={setProgressBar} key="science" pageSize={newsCount} category='science' Title={projectName}/>} />
              <Route exact path='/sports' element={<NewsComponents  ApiKey={APIKey}  setProgressBar={setProgressBar} key="sports" pageSize={newsCount} category='sports' Title={projectName}/>} />
              <Route exact path='/technology' element={<NewsComponents  ApiKey={APIKey}  setProgressBar={setProgressBar} key="technology" pageSize={newsCount} category='technology' Title={projectName}/>} />
            </Routes>
          </Suspense>
        </GobleState.Provider>
        </Provider>
      </Router>
    </>
  );  
}

export default App;
