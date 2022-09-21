import PropTypes from 'prop-types'
import React, { useState } from 'react';

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";


function titleCase(str) {
  return str.toLowerCase().split(' ').map(function(word) {
    return (word.charAt(0).toUpperCase() + word.slice(1));
  }).join(' ');
}

function MytextForm(props) {

const [text,setText] = useState('');
const [alertmsg,setAlert] = useState('');
const [extractedemails,setEmails] = useState('');
const handleOnChange = (event) =>{setText(event.target.value);}
const handleLowerChange = (event) =>{setText(text.toLowerCase()); setAlert('Set in LowerCase');}
const handleUpperChange = (event) =>{setText(text.toUpperCase());setAlert('Set in UpperCase');}
const handleTitleCase = (event) =>{setText(titleCase(text));setAlert('Set in TitleCase');}
const handleClear = (event)=> {setText('');setAlert('Clear the screen');}
const handleEmails = (event)=> {
const regex = /[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}/ig;
setEmails(text.match(regex).length);setAlert('Set in Emails');
}

const [mystyle,setMyStyle] = useState({
  color: 'white', backgroundColor: 'black'
})

const toggleStyle = () => {
  console.log('toggleClicked');
  if(props.mode === 'red'){console.log('inIF');//mystyle.color === 'white'
    setMyStyle({
      color: 'red',
      backgroundColor: 'Red'})
      setBtnRedText("Enable Red Mode")
                              }
  else if(props.mode === 'green'){console.log('inIF');//mystyle.color === 'white'
    setMyStyle({
      color: 'green',
      backgroundColor: 'green'})
      setBtnRedText("Enable green Mode")
                              }
  else if(props.mode === 'blue'){console.log('inIF');//mystyle.color === 'white'
    setMyStyle({
      color: 'blue',
      backgroundColor: 'blue'})
      setBtnRedText("Enable blue Mode")
                              }
  else if(props.mode === 'light'){console.log('inIF');//mystyle.color === 'white'
    setMyStyle({
      color: 'light',
      backgroundColor: 'light'})
      setBtnRedText("Enable light Mode")
                              }


                            }
    
  const [btnRedText, setBtnRedText] = useState("Enable Red Theme");
  
  const handleClipBoardCopy =()=>{
    var textarea = document.getElementById("floatingTextarea2");
    textarea.select();
    navigator.clipboard.writeText(textarea.value);
    }

  return (
<div className='container'>
    <div className="card-body">
    <div className="form-floating">
    <textarea className="form-control" placeholder="Leave a comment here" id="floatingTextarea2" value={text} onChange={handleOnChange}></textarea>
  </div>
  <label htmlFor="floatingTextarea2">{text.length} total chars ,total words {text.split(' ').length-1}</label>
      <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
      <Link to="#" className="btn btn-primary mx-2" onClick={handleUpperChange}>ToUpperCase</Link>
      <Link to="#" className="btn btn-primary mx-2" onClick={handleLowerChange}>ToLowerCase</Link>
      <Link to="#" className="btn btn-primary mx-2" onClick={handleTitleCase}>TitleCase</Link>
      <Link to="#" className="btn btn-primary mx-2" onClick={handleEmails}>Emails Extract</Link>
      <Link to="#" className="btn btn-primary mx-2" onClick={handleClipBoardCopy}>CopyToClipBoard</Link>
      <Link to="#" className="btn btn-primary mx-2" onClick={handleClear}>Clear text!</Link>
    </div>
    <div className="card-footer text-muted">
      {0.008 * text.split(' ').length} total minutes read!
    </div>
    <label htmlFor="floatingTextarea3">{extractedemails} total emails found!</label>

</div>    
    )
}

MytextForm.propTypes = {}
export default MytextForm