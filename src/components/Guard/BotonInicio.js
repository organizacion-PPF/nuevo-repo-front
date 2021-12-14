import React from 'react'
import { Link } from "react-router-dom";
import {
   
    NavbarBrand,
   
  
  } from "reactstrap";

export const BotonInicio = () => {

    return (
        
        <div className="navbar-translate">
        <NavbarBrand to="/landing-page" id="navbar-brand" tag={Link}>
          <span>INICIO </span>
        
        </NavbarBrand>
      
      </div>
      )
}