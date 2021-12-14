import React from 'react'


import {
    Button,
  } from "reactstrap";

  const logaut = () => {

localStorage.getItem('LoginPage');
window.location.href="/registerProf"

}


export const BotonRegisProf = () => {

    return(

        <Button
        className="nav-link d-none d-lg-block"
        color="primary"
        target="_blank"
        onClick = {logaut} size="lg" >
         REGISTRATE 
         COMO 
         PROFESOR
        </Button>
        
    )
    

}