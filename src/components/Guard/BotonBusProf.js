


import React from 'react'


import {
    Button,
  } from "reactstrap";

  const logaut = () => {

localStorage.getItem('LoginPage');
window.location.href="/materias-page"

}


export const BotonBusProf = () => {

    return(

        <Button color="success" onClick = {logaut} size="lg" >
          BUSCA UN PROFESOR
        </Button>
        
    )
    

}
