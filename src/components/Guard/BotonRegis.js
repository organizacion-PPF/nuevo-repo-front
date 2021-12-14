import React from 'react'
import { Link } from "react-router-dom";
import {
    Button,
    
    NavLink,
    NavItem
   
  } from "reactstrap";


export const BotonRegis = () => {

    return(
<NavItem> 
<NavLink tag={Link} to="/register-page">
             
             <Button
 className="nav-link d-none d-lg-block"
 color="warning"
 target="_blank"
>
 <i className="tim-icons icon-badge" /> Registrate
</Button>

    
      </NavLink>
      </NavItem>

    )
    

}