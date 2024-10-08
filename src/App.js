import React,{useState} from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './components/Template/Navbar'
import TextArea from './components/Experiment/Textarea'
import Signal from './components/Traffic_Light/Signal'
import Alert from './components/Template/Alert'
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
      <Navbar Title="Let's Start" toggle={toggle} mode={mode}/>
      <Alert alert={alert}/>
      <div className='main-body container h-100'>
        <TextArea mode={mode}/>
      </div>
    </>
  );  
}

export default App;
