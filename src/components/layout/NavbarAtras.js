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




export default function NavbarAtras() {



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
    <Navbar className={"fixed-top " } color-on-scroll="100" expand="lg">
      <Container>

        {
          Login
          ?<div className="navbar-translate">
          <NavbarBrand to="/landing-page" id="navbar-brand" tag={Link}>
            <span>ATRAS</span>

          </NavbarBrand>

        </div>
          :<div className="navbar-translate">
          <NavbarBrand to="/home-page" id="navbar-brand" tag={Link}>
            <span >ATRAS</span>

          </NavbarBrand>

        </div>
        }


      </Container>
    </Navbar>
  );
}
