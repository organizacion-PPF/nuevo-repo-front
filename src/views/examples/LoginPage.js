import React, {useState, useEffect} from "react";
import { useHistory } from "react-router-dom";
import { Link } from 'react-router-dom';
import classnames from "classnames";
// reactstrap components
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  CardImg,
  CardTitle,
  Form,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Container,
  Row,
  Col,
} from "reactstrap";

// core components

import Footer from "components/Footer/Footer.js";
import PacmanLoader from "react-spinners/PacmanLoader";
import { css } from "@emotion/react";
import NavbarAtras from "components/layout/NavbarAtras";
import * as yup from 'yup';
let schemaDatosLogin = yup.object().shape({
  email: yup.string().email().required(),
  password: yup.string().required().min(8,"Como minimo, 8 caracteres")
})



const override = css`
  display: block;
  margin: 0 auto;
  border-color: red;
`;

export default function LoginPage() {
  const history = useHistory();
  const [squares1to6, setSquares1to6] = React.useState("");
  const [squares7and8, setSquares7and8] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [logeado, setLogeado] = useState(null);
  const [habilitado, setHabilitado] = useState(false);
  const [cargando, setCargando] = useState(false);

  useEffect(() => {
    setCargando(true)
    
   
  }, [])
  React.useEffect(() => {
    document.body.classList.toggle("register-page");
    document.documentElement.addEventListener("mousemove", followCursor);
    // Specify how to clean up after this effect:
    return function cleanup() {
      document.body.classList.toggle("register-page");
      document.documentElement.removeEventListener("mousemove", followCursor);
    };
  },[]);

  useEffect(()=> {
    
    schemaDatosLogin.isValid({email, password})
    .then(
      (valid) => {
        if(valid){
          setHabilitado(true)
        }else{
          setHabilitado(false)
        }
      }
    )
   
  },[email, password, schemaDatosLogin]);


  const followCursor = (event) => {
    let posX = event.clientX - window.innerWidth / 2;
    let posY = event.clientY - window.innerWidth / 6;
    setSquares1to6(
      "perspective(500px) rotateY(" +
        posX * 0.05 +
        "deg) rotateX(" +
        posY * -0.05 +
        "deg)"
    );
    setSquares7and8(
      "perspective(500px) rotateY(" +
        posX * 0.02 +
        "deg) rotateX(" +
        posY * -0.02 +
        "deg)"
    );
  };

  
  const LoginUsu = async () => {
    let myHeaders = new Headers();
myHeaders.append("Content-Type","application/json");

const raw = JSON.stringify({
  email,
  password 
  
})

const options = {
  method: 'POST',
  headers: myHeaders,
  body: raw,
  redirect: 'follow'
}

const postData = await fetch("https://proyec-back.herokuapp.com/auth/login", options)
const respu = await postData.json()
console.log(respu)


const {token}=respu
console.log(token)
setLogeado(true)

window.localStorage.setItem(
  'LoginPage', token
)



  if(logeado){
   
    window.location.href= `/landing-page`
  
  }


  }

 
  return (
    <>

    <NavbarAtras/>

      <div className="wrapper">
        <div className="page-header">
          <div className="page-header-image" />
          <div className="content">
            <Container>
              <Row>
                <Col className="offset-lg-0 offset-md-3" lg="5" md="6">
                  <div
                    className="square square-7"
                    id="square7"
                    style={{ transform: squares7and8 }}
                  />
                  <div
                    className="square square-8"
                    id="square8"
                    style={{ transform: squares7and8 }}
                  />
                  <Card className="card-register">
                    <CardHeader>
                      <CardImg
                        alt="..."
                        src={require("assets/img/square-purple-1.png").default}
                      />
                      <CardTitle tag="h4">LOGIN</CardTitle>
                    </CardHeader>
                    <CardBody>
                      <Form className="form">
                      
                        <InputGroup
                          className={classnames({
                            "input-group-focus": email,
                          })}
                        >
                          <InputGroupAddon addonType="prepend">
                            <InputGroupText>
                              <i className="tim-icons icon-email-85" />
                            </InputGroupText>
                          </InputGroupAddon>
                          <Input
                            placeholder="Email"
                            type="text"
                            onChange={(e)=>{setEmail(e.target.value)}}
                          />
                        </InputGroup>
                        <InputGroup
                          className={classnames({
                            "input-group-focus": password,
                          })}
                        >
                          <InputGroupAddon addonType="prepend">
                            <InputGroupText>
                              <i className="tim-icons icon-lock-circle" />
                            </InputGroupText>
                          </InputGroupAddon>
                          <Input
                            placeholder="Contraseña"
                            type="password"
                            onChange={(e)=>{setPassword(e.target.value)}}
                          />
                        </InputGroup>
                        
                      </Form>
                    </CardBody>
                    
                    <CardFooter>

             <Button color="success" size="lg"
             className="btn-round" color="primary" size="lg" 
             disabled={habilitado ? false : true}
            
             onClick={LoginUsu}
            
             >
                
        
   
             
             {habilitado ? "Aceptar" : "Aceptar"}
              </Button>
              
                    </CardFooter>
                    
                  </Card>
                </Col>
              </Row>
              
              
              <div className="register-bg" />
              <div
                className="square square-1"
                id="square1"
                style={{ transform: squares1to6 }}
              />
              <div
                className="square square-2"
                id="square2"
                style={{ transform: squares1to6 }}
              />
              <div
                className="square square-3"
                id="square3"
                style={{ transform: squares1to6 }}
              />
              <div
                className="square square-4"
                id="square4"
                style={{ transform: squares1to6 }}
              />
              <div
                className="square square-5"
                id="square5"
                style={{ transform: squares1to6 }}
              />
              <div
                className="square square-6"
                id="square6"
                style={{ transform: squares1to6 }}
              />
            </Container>
          </div>
        </div>
        <Footer />
      </div>
     
    </>
  );

}
