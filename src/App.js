import './App.css';
import React, {useState} from 'react'
import Navbar from "./components/Navbar"
import TextForm from './components/TextForm';
import Alert from './components/Alert';
// import About from './components/About';

function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null)

  const showAlert =  (message, type) =>{
    setAlert({
         msg:message,
         type:type
    });
    setTimeout(() =>{
      setAlert(null);
    },2000);
  }
 
  const toggleMode = () =>{
    if(mode === "light"){
        setMode('dark');
        document.body.style.backgroundColor = '#042743'
        showAlert("Dark mode enable", "success");
        document.title ='TextUtils - Dark Mode';
    }
    else{
      setMode('light')
      document.body.style.backgroundColor = 'white'
      showAlert("Light mode enable", "success");
      document.title ='TextUtils - Light Mode';
    }
  }
  return (
   <>
   <Navbar title = "TextUtils" mode={mode} toggleMode={toggleMode}/>
   <Alert alert={alert}/>
   <div className="container my-3">
            {/* <About /> */}
       <TextForm heading="Enter the text to analyze below" mode={mode} showAlert={showAlert}/>
       </div>
  </>
  );
}

export default App;
