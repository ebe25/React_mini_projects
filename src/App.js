
import './App.css';
import About_Us from './components/About_us';
import NavBar from './components/NavBar';
import Textform from './components/Textform';
import React, {useState} from 'react';

function App() {
   const[mode, setmode] = useState("light")
   const toggleMode=()=>{
    if(mode==='light'){
      setmode('dark')
      document.body.style.backgroundColor="rgb(15 26 59)"
    }else{
      setmode('light')
      document.body.style.backgroundColor="white"
    }
   }

  return (
    
  <>
  <NavBar title="Text Utilities" mode={mode} toggleMode={toggleMode}/>
  <div className="container">
    {/* <About_Us/> */}
  
  <Textform heading="Enter Text to Manipulate:" mode={mode}/>

  </div>

  </>
  );
}

export default App;
