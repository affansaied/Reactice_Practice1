import './App.css';
import MytextForm from './MyComponents/MytextForm';
import Navbar from './MyComponents/Navbar';
import React, { useState } from 'react';
import Alert from './MyComponents/Alert';
import About from './MyComponents/About';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Fragment,
  Link
} from "react-router-dom";

function App() {

  const [mode,setToggleMode] = useState('light');
  const [alertmsg,setAlert] = useState('');

  const [mystyle,setMyStyle] = useState({
  color: 'white', backgroundColor: 'green'
})

const  setRedTh = ()=> {
  document.title ="MyRed ReactApp";
  console.log('Setting Red Theme!');
    {
      setToggleMode('Red');
      document.body.style.backgroundColor = "Red";
      setMyStyle({
        color: 'Red',
        backgroundColor: 'Red',
      })
     }
    }

    const  setGreenTh = ()=> {
      document.title ="MyGreen ReactApp";
      console.log('Setting Green Theme!');
        {
          setToggleMode('Green');
          document.body.style.backgroundColor = "Green";
          setMyStyle({
            color: 'Green',
            backgroundColor: 'Green',
          })
         }
        }
    
        const  setBlueTh = ()=> {document.title ="MyBlue ReactApp";
          console.log('Setting Blue Theme!');
            {
              setToggleMode('Blue');
              document.body.style.backgroundColor = "Blue";
              setMyStyle({
                color: 'Blue',
                backgroundColor: 'Blue',
              })
             }
            }
        
            const  setLightTh = ()=> {
              console.log('Setting Light Theme!');
                {
                  setToggleMode('Light');
                  document.body.style.backgroundColor = "Light";
                  setMyStyle({
                    color: 'Light',
                    backgroundColor: 'Light',
                  })
                 }
                }
            
                        
    const  toggleMode = (myptop)=> {

  console.log(mode);
  //console.log('toggleMode');
    if(mode === 'blue')
    {console.log('light'); setToggleMode('light');
      setMyStyle({
        color: 'grey',
        backgroundColor: 'DarkGrey'
        //document.body.style.backgroundColor='white'
        //setBtnText("Enable Dark Mode")
      })
     }
     else if(mode === 'green')
     {console.log('green');setToggleMode('green');
       setMyStyle({
         color: 'white',
         backgroundColor: 'green'
       })
      }
      else if(mode === 'Red')
      {console.log('Red');//setToggleMode('Red');
        setMyStyle({
          color: 'grey',
          backgroundColor: 'Red'
        })
       }
       else if(mode === 'light')
       {setToggleMode('light');
         setMyStyle({
           color: 'Red',
           backgroundColor: 'Red'
         })
        }
    }
  
  return (
<Router>
<div className="App">
      <Navbar mode={mode} toggleMode={toggleMode} setRedTh={setRedTh} setGreenTh={setGreenTh} setBlueTh={setBlueTh} setAlert={setAlert}></Navbar>
      <Alert head="heading:" alert={alertmsg}></Alert>  

<div className="card text-center">
  <div className="card-header">
        <Routes>
          <Route exact path='/' element={<MytextForm mode={mode} toggleMode={toggleMode}/>}/>
          <Route exact path='/about' element={<About/>} />
        </Routes>

    </div>
    </div>
</div>
</Router>
      );
}

export default App;