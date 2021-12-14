import React from "react";
import { Link } from "react-router-dom";
import  { useEffect,useState } from 'react'
// reactstrap components
import {
  Collapse,
  NavbarBrand,
  Navbar,
  NavItem,
  Nav,
  Container,

} from "reactstrap";


import { BotonBusProf} from '../Guard/BotonBusProf';



export default function NavbarProf() {
  const [collapseOpen, setCollapseOpen] = React.useState(false);
  const [collapseOut, setCollapseOut] = React.useState("");
  const [color, setColor] = React.useState("navbar-transparent");
  React.useEffect(() => {
    window.addEventListener("scroll", changeColor);
    return function cleanup() {
      window.removeEventListener("scroll", changeColor);
    };
  },[]);
  const changeColor = () => {
    if (
      document.documentElement.scrollTop > 99 ||
      document.body.scrollTop > 99
    ) {
      setColor("bg-info");
    } else if (
      document.documentElement.scrollTop < 100 ||
      document.body.scrollTop < 100
    ) {
      setColor("navbar-transparent");
    }
  };
  const toggleCollapse = () => {
    document.documentElement.classList.toggle("nav-open");
    setCollapseOpen(!collapseOpen);
  };
  const onCollapseExiting = () => {
    setCollapseOut("collapsing-out");
  };
  const onCollapseExited = () => {
    setCollapseOut("");
  };

  
//comprobar si existe token  
const [Login, setLogin] = useState(null);

useEffect(() => {
//guardar 
//hacer consulta mediante getitem
  const usuarioT = localStorage.getItem('LoginPage')
  if (usuarioT){
    const user = usuarioT
    setLogin(user)
  }
}, [])



  return (
    <Navbar className={"fixed-top " + color} color-on-scroll="100" expand="lg">
      <Container>

        {
          Login
          ?<div className="navbar-translate">
          <NavbarBrand to="/landing-page" id="navbar-brand" tag={Link}>
            <span>INICIO </span>
          
          </NavbarBrand>
        
        </div>
          :<div className="navbar-translate">
          <NavbarBrand to="/home-page" id="navbar-brand" tag={Link}>
            <span style={{display:"none"}} >INICIO </span>
          
          </NavbarBrand>
        
        </div>
        }
       
        <Collapse
          className={"justify-content-end " + collapseOut}
          navbar
          isOpen={collapseOpen}
          onExiting={onCollapseExiting}
          onExited={onCollapseExited}
        >
          <Nav navbar>
  
 
             
            {/*  BOTON REGISTRO Y LOGIN */}

          
          
          {
                    Login
                    ?<BotonBusProf/>
                    :null
                    
                  }
                  
                  
           
          </Nav>
        </Collapse>
      </Container>
    </Navbar>
  );
}