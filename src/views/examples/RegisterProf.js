import React, {useState, useEffect} from "react";
import { useHistory } from "react-router";
import classnames from "classnames";
import ReactDatetime from "react-datetime";

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
  select
} from "reactstrap";

// core components
import Footer from "components/Footer/Footer.js";
import NavbarAtras from "components/layout/NavbarAtras";
import * as yup from "yup";

let profSchema = yup.object().shape({
  descripcion: yup.string().required(),
  nivel : yup.string().required(),
  materia: yup.string().required(),
  honorarios: yup.number().required(),

})

let token=window.localStorage.getItem('LoginPage')
  
 export const setToken= newToken=>{
  
    token=`Bearer ${newToken}`
  
  }

export default  function RegisterProf()  {
  const [squares1to6, setSquares1to6] = React.useState("");
  const [descripcion, setDescripcion] = useState('');
  const [nivel, setNivel] = useState('');
  const [materia, setMateria] = useState('');
  
  const [honorarios, setHonorarios] = useState('');
  const [resgistrado, setResgistrado] = useState(null);
  const [squares7and8, setSquares7and8] = React.useState("");
  const [habilitado, setHabilitado] = useState(false);
  React.useEffect(() => {
    
    document.body.classList.toggle("resgiter-page");
    document.documentElement.addEventListener("mousemove", followCursor);
    // Specify how to clean up after this effect:
    return function cleanup() {
      document.body.classList.toggle("register-page");
      document.documentElement.removeEventListener("mousemove", followCursor);
    };
  },[]);

  


  useEffect(()=> {
    profSchema.isValid({descripcion, nivel, materia, honorarios})
    .then(
      (valid) => {
        if(valid){
          setHabilitado(true)
        }else{
          setHabilitado(false)
        }
      }
    )
  },[descripcion, nivel, materia, honorarios, profSchema]);



  const history = useHistory()
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

  


  const resgistroNuevoProf = async () => {
    let myHeaders = new Headers();
myHeaders.append("Content-Type","application/json");


const raw = {
  descripcion,
  "nivel":[nivel],
  "materia":[materia],
  
  honorarios,

}
console.log("el cuerpo es:", raw)

const options = {
  method: 'POST',
  headers: {
    "Content-Type":"application/json",
    token
  },
  body: JSON.stringify(raw),
 
}

console.log(token)
const postData = await fetch("https://proyec-back.herokuapp.com/profesor", options, )
const res = await postData.json()
console.log(res)
setResgistrado(true)

  }

  useEffect(() => {
    if(resgistrado){
      history.push("/profile-page")
    }
  },[resgistrado])





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
                      <CardTitle tag="h1">Registro Profesor</CardTitle>
                    </CardHeader>
                    <CardBody>
                      <Form className="form">
                        <InputGroup
                          className={classnames({
                            "input-group-focus": descripcion,
                          })}
                        >
                          <InputGroupAddon addonType="prepend">
                            <InputGroupText>
                              <i className="tim-icons icon-notes" />
                            </InputGroupText>
                          </InputGroupAddon>
                          <Input
                            placeholder="Descripcion"
                            type="text"
                            onChange={(e)=>{setDescripcion(e.target.value)}}
                          />
                        </InputGroup>
                        <InputGroup
                          className={classnames({
                            "input-group-focus": nivel,
                          })}
                        >
                          <InputGroupAddon addonType="prepend">
                            <InputGroupText>
                              <i className="tim-icons icon-shape-star" />
                            </InputGroupText>
                          </InputGroupAddon>
                          <Input
                            placeholder="A quien va dirijido (nivel)"
                            type="text"
                            onChange={(e)=>{setNivel(e.target.value)}}
                          />
                        </InputGroup>
                        <InputGroup
                          className={classnames({
                            "input-group-focus": nivel,
                          })}
                        >
                          <InputGroupAddon addonType="prepend">
                            <InputGroupText>
                              <i className="tim-icons icon-shape-star" />
                            </InputGroupText>
                          </InputGroupAddon>
                          <Input
                            placeholder="materia"
                            type="select"
                            onChange={(e)=>{setMateria(e.target.value)}}
                          />
                        </InputGroup>
                       
                        <InputGroup
                          className={classnames({
                            "input-group-focus": honorarios,
                          })}
                        >
                          <InputGroupAddon addonType="prepend">
                            <InputGroupText>
                              <i className="tim-icons icon-money-coins" />
                            </InputGroupText>
                          </InputGroupAddon>
                          <Input
                            placeholder="Honorarios"
                            type="number"
                            onChange={(e)=>{setHonorarios(e.target.value)}}
                          />
                        </InputGroup>
                      
                      </Form>
                    </CardBody>
                    <CardFooter>
                    <Button className="btn-round" color="primary" size="lg" 
                     disabled={habilitado ? false : true}
                     onClick={resgistroNuevoProf}>
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



