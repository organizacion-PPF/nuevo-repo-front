import React from 'react'

import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";


import HomePage from "views/examples/HomePage.js";
import LandingPage from "views/examples/LandingPage.js";
import RegisterPage from "views/examples/RegisterPage.js";
import ProfileProf from "views/examples/ProfileProf";
import LoginPage from "views/examples/LoginPage.js";
import Materias from "views/examples/Materias";
import ProfilePage from "views/examples/ProfilePage.js";
import RegisterProf from "views/examples/RegisterProf.js";
import ListaProfesores from "views/examples/ListaProfesores"
import RoutePublica from "../routes/RoutePublica";
import RoutePrivada from "../routes/RoutePrivada";
import ContactosProf  from 'views/examples/ContactosProf';



export default function Apprutas () {

  return (
    <div>
       <BrowserRouter>
    <Switch>
    <Route
        exact path="/home-page" component={HomePage}
      />
      <RoutePrivada
        exact path="/landing-page" component={LandingPage} 
      />
      
      <RoutePublica
        exact path="/register-page" component={RegisterPage}  
      />
      <RoutePublica

       exact path="/login-page" component={LoginPage}  
      />
       <RoutePrivada
       exact path="/materias-page" component={Materias}
      />
       <RoutePrivada
       exact path="/registerProf" component={RegisterProf}
      />
      <RoutePrivada
       exact path="/profile-page" component={ProfilePage}
      />
      <RoutePrivada
       exact path="/profile-prof" component={ProfileProf}
      />
      <RoutePrivada
       exact path="/lista-prof/:materia" component={ListaProfesores}
      />
      <RoutePrivada
       exact path="/contactos/:_id" component={ContactosProf}
      />
      <Redirect from="/" to="/home-page" />

  

    </Switch>
  </BrowserRouter>,    

    </div>
  )
}


