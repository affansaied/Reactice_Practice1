import React from 'react'



function Alert(props) {
    return (
props.alert && <div className="alert alert-success fade show my-3" role="alert" >
  <strong>{props.head}</strong> {props.alert}  
  <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
</div>

  )
}

export default Alert