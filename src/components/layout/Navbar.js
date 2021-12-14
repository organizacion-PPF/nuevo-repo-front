import React from "react";
import './foto.css'
import { Link } from "react-router-dom";
import  { useEffect,useState } from 'react'
// reactstrap components
import {
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown,
  DropdownToggle,
  Button,
  Media,
  Collapse,
  NavbarBrand,
  Navbar,
  NavItem,
  NavLink,
  Modal,
  Nav,
  Container
} from "reactstrap";

import { BotonRegis } from '../Guard/BotonRegis';
import { BotonLogin } from '../Guard/BotonLogin';
import { BotonCerrarSes } from '../Guard/BotonCerrarSes';
import { BotonBusProf} from '../Guard/BotonBusProf';
import { BotonRegisProf} from '../Guard/BotonRegisProf';
import { BotonPerfil} from '../Guard/BotonPerfil';
import { isNullishCoalesce } from "typescript";

export default function Navbarr() {
  const [collapseOpen, setCollapseOpen] = React.useState(false);
  const [collapseOut, setCollapseOut] = React.useState("");
  const [miniModal, setMiniModal] = React.useState(false);
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
                    :<BotonLogin/>
                    
                  }
                   {
                    Login
                    ?<BotonRegisProf/>
                    :null
                    
                  }

                   
              
            <Nav className="align-items-center d-none d-md-flex" navbar>
            <UncontrolledDropdown nav>
              <DropdownToggle className="pr-0" nav>
                <Media className="align-items-center">
                  <span class="avatar">
                    <img class="avatarimg"
                      alt="..."
                      src={
                        require("../../assets/img/julie.jpeg")
                          .default
                      }
                    />
                  </span>
                  <Media className="ml-2 d-none d-lg-block">
                    <span className="mb-0 text-sm font-weight-bold">
                      Jessica Jones
                    </span>
                  </Media>
                </Media>
              </DropdownToggle>
              <DropdownMenu className="dropdown-menu-arrow" right>
                <DropdownItem to="/profile-prof" tag={Link}>
                  <i className="ni ni-single-02" />
                  <span>perfil</span>
                </DropdownItem>
                <DropdownItem divider />
                <NavItem>
            <Button className="nav-link d-none d-lg-block" color="warning" onClick={() => setMiniModal(true)}>
              Cerrar Sesion
            </Button>
            </NavItem>
            <Modal
            modalClassName="modal-mini modal-primary modal-mini"
            isOpen={miniModal}
            toggle={() => setMiniModal(false)}
          >
            <div className="modal-header justify-content-center">
              <button className="close" onClick={() => setMiniModal(false)}>
                <i className="tim-icons icon-simple-remove text-white" />
              </button>
              <div className="modal-profile">
                <i className="tim-icons icon-single-02" />
              </div>
            </div>
            <div className="modal-body">
              <p>¿Estas seguro de querer cerrar sesion?</p>
            </div>
            <div className="modal-footer">
              <Button className="btn-neutral" color="link" type="button">
                NO
              </Button>
              <NavLink tag={Link} to="/">
              <Button
                className="btn-neutral"
                color="link"
                onClick={() => setMiniModal(false)}
                type="button"
              >
                SI
              </Button>
              </NavLink>
            </div>
          </Modal>
              </DropdownMenu>
            </UncontrolledDropdown>
          </Nav>
           
          </Nav>
        </Collapse>
      </Container>
    </Navbar>
  );
}
