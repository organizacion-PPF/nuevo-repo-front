
import React from "react";

// react plugin used to create charts
import { useParams } from "react-router-dom";
import { Rating } from 'react-simple-star-rating';
// reactstrap components
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  Label,
  FormGroup,
  Form,
  Input,
  
  Table,
 
  Container,
  Row,
  Col,
  UncontrolledTooltip,
 
} from "reactstrap"
import  { useEffect,useState } from 'react'
import PacmanLoader from "react-spinners/PacmanLoader";
import { css } from "@emotion/react";


const override = css`
  display: block;
  margin: 0 auto;
  border-color: red;
`;



export default function  ContactosProf () {
  const [cargando, setCargando] = useState(false);

  useEffect(() => {
    setCargando(true)
    
   
  }, [])
  const [tabs, setTabs] = React.useState(1);

  React.useEffect(() => {
    if (navigator.platform.indexOf("Win") > -1) {
      document.documentElement.className += " perfect-scrollbar-on";
      document.documentElement.classList.remove("perfect-scrollbar-off");
      
      
    }
    document.body.classList.toggle("profile-page");
    // Specify how to clean up after this effect:
    return function cleanup() {
      if (navigator.platform.indexOf("Win") > -1) {
        
        document.documentElement.className += " perfect-scrollbar-off";
        document.documentElement.classList.remove("perfect-scrollbar-on");
      }
      document.body.classList.toggle("profile-page");
    };
  },[]);
 
  const url = "https://proyec-back.herokuapp.com/profesor/get";

	const {_id} = useParams();
	//console.log(proid)

    //Cacemos un setState para guardar el array que nos devuelve la api
	const [stateProfesionales, setStateProfesionales] = useState(null)
  const [rating, setRating] = useState(0)
  
    const handleRating = (rate: number) => {
      setRating(rate)
      
    }

      //Creamos la función para consumir la api
  const fetchDataProfesionales = async () => {
      try {
          const peticion = await fetch(url)
          const res = await peticion.json()
         // console.log(res)
          setStateProfesionales(res)
      } catch (error) {console.log(error)}
  }

    //Ahora usamos el useEffect para ejecutar todo lo anterior
  useEffect(() => {
      fetchDataProfesionales()
  },[])
	

  //verificamos que stateProfesionales no este vacio
	if(!stateProfesionales){
		return null;
	}

		
  return (
      
    <div className="container-login100">
       <Col lg="500" md="500">
                <h5 className="text-on-back"></h5>
                    <span className="text-white"></span>
                
                </Col>
                <div class="container mt-2">
          
          <div class="row" id="data">
          
              {
  
  stateProfesionales.length > 0 ? stateProfesionales.map(item => { 
                      
                     if (item._id==_id) {
                       
                     
                      return (
                        <>
                          
                          <div className="wrapper">
                            <div className="page-header">
                              <img
                                alt="..."
                                className="dots"
                                src={require("assets/img/dots.png").default}
                              />
                              <img
                                alt="..."
                                className="path"
                                src={require("assets/img/path4.png").default}
                              />
                              <Container className="align-items-center">
                                <Row>
                                <Col lg="6" md="6">
            
            <h5 className="text-on-back">CONTACTO </h5>
           
          </Col>
                                  <Col className="ml-auto mr-auto" lg="6" md="8">
                                    <Card className="card-coin card-plain">
                                      <CardHeader>
                                        <img
                                          alt="..."
                                          className="img-center img-fluid rounded-circle"
                                          src={require("assets/img/mike.jpg").default}
                                        />
                                        <h4 className="title">{item.userId.nombre_completo}</h4>
                                      </CardHeader>
                                      <CardBody>
                                      
                                        
                                          
                                            <Table className="tablesorter" responsive>
                                             
                                              <tbody>
                                                <tr >
                                                  <td>DESCRIPCION</td>
                                                  <td>{item.descripcion}</td>
                                                  
                                                </tr>
                                                <tr>
                                                  <td>NIVEL DE ENSEÑANZA</td>
                                                  <td>{item.nivel}</td>
                                                  
                                                </tr>
                                                
                                                <tr>
                                                  <td>PRECIO DE LAS CLASES</td>
                                                  <td>{item.honorarios}</td>
                                                  
                                                </tr>
                                                <tr>
                                                  <td>MATERIAS</td>
                                                  <td>{item.materia}</td>
                                                  
                                                </tr>
                                              </tbody>
                                            </Table>
                                          
                                          
                                   
                                        
                                      </CardBody>
                                    </Card>
                                    <div className='App'>
    <Rating onClick={handleRating} ratingValue={rating} /* Available Props */ />
   </div>
                                  </Col>
                                </Row>
                              </Container>
                            </div>
                           
                            <section className="section">
                              <Container>
                                <Row>
                                  <Col md="6">
                                    <Card className="card-plain">
                                      <CardHeader>
                                        <h1 className="profile-title text-left"> contáctame</h1>
                                        <h5 className="text-on-back">01</h5>
                                      </CardHeader>
                                      <CardBody>
                                        <Form>
                                          <Row>
                                            <Col md="6">
                                              <FormGroup>
                                                <label>Tu nombre</label>
                                                <Input placeholder="jorge" type="text" />
                                              </FormGroup>
                                            </Col>
                                            <Col md="6">
                                              <FormGroup>
                                                <label>Correo electronico</label>
                                                <Input placeholder="mike@email.com" type="email" />
                                              </FormGroup>
                                            </Col>
                                          </Row>
                                          <Row>
                                            <Col md="6">
                                              <FormGroup>
                                                <label>Celular</label>
                                                <Input placeholder="3704-235678" type="text" />
                                              </FormGroup>
                                            </Col>
                                          </Row>
                                          <Row>
                                            <Col md="12">
                                              <FormGroup>
                                                <label>Mensaje</label>
                                                <Input placeholder="Hola teacher!" type="text" />
                                              </FormGroup>
                                            </Col>
                                          </Row>
                                          <Button
                                            className="btn-round float-right"
                                            color="primary"
                                            data-placement="right"
                                            id="tooltip341148792"
                                            type="button"
                                          >
                                            Enviar
                                          </Button>
                                          <UncontrolledTooltip
                                            delay={0}
                                            placement="right"
                                            target="tooltip341148792"
                                          >
                                            Can't wait for your message
                                          </UncontrolledTooltip>
                                        </Form>
                                      </CardBody>
                                    </Card>
                                  </Col>
                                  
                                </Row>
                              </Container>
                            </section>
                            
                          </div>
                        </>
                      );
                    }
                  }): <PacmanLoader

                    color={'#CA36D7'} 
                    loading={cargando}
                    size={30}
                    css={override}
                     />
                      
              }      
          </div>    
      </div>
  </div>  
  
    )

}


