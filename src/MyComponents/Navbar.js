import React, { useEffect} from 'react';
import { Link } from 'react-router-dom';

export default function Navbar(props) {
  
  useEffect(() => {
    setInterval(() => {
      props.setAlert("");
    }, 3000);

  }, []);
  const handleOnClick = (event)=>{
    if(event.target.id === 'flexSwitchCheckCheckedRed')
    { props.setAlert('Theme Red Updated! ='+event.target.value);
      props.setRedTh();
      
    }
else if(event.target.id === 'flexSwitchCheckCheckedGreen')
{ props.setAlert('Theme Green Updated! ='+event.target.value);
  props.setGreenTh();
  
}
else if(event.target.id === 'flexSwitchCheckCheckedBlue')
{ props.setAlert('Theme Blue Updated! ='+event.target.value);
  props.setBlueTh();
  
}

  }
  
  return (

<div>
      <nav className="navbar navbar-expand-lg bg-light">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">Practice Website</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <Link className="navbar-brand" to="/about">About</Link>

        <div className="collapse navbar-collapse" id="navbarScroll">
          <form className="d-flex" role="search">
              <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
              <button className="btn btn-outline-success" type="submit">Search</button>

              <div className="form-check form-switch">
                <input className="form-check-input" type="checkbox" id="flexSwitchCheckCheckedRed" defaultChecked onClick={handleOnClick}/>
                <label className="form-check-label" htmlFor="flexSwitchCheckCheckedRed">Red</label>
              </div>
    
                <div className="form-check form-switch">
                  <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckCheckedGreen" defaultChecked  onClick={handleOnClick}/>
                <label className="form-check-label" htmlFor="flexSwitchCheckCheckedGreen">Green</label>
              </div>
    
                <div className="form-check form-switch">
                  <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckCheckedBlue" defaultChecked  onClick={handleOnClick}/>
                <label className="form-check-label" htmlFor="flexSwitchCheckCheckedBlue">Blue</label>
              </div>
    
            </form>
        </div>
      </div>
    </nav>
    </div>
)
}