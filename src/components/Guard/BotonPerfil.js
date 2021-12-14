import React from 'react'


import {
    Button,
  } from "reactstrap";

  const logaut = () => {

localStorage.getItem('LoginPage');
window.location.href="/profile-page"

}


export const BotonPerfil= () => {

    return(

        <Button color="success" onClick = {logaut} size="lg" >
        PERFIL
        </Button>
        
    )
    

}