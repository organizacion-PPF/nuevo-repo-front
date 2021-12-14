

import React from 'react'
import { Link } from "react-router-dom";
import {
    Button,
    
    NavLink,
    NavItem
  } from "reactstrap";


export const BotonLogin = () => {

    return(
<NavItem>
<NavLink tag={Link} to="/login-page">
            <Button
                className="nav-link d-none d-lg-block"
                color="success"
                target="_blank"
                
              >
                <i className="tim-icons icon-single-02" /> Iniciar sesion 
              </Button>
</NavLink>
</NavItem>

    )
    

}