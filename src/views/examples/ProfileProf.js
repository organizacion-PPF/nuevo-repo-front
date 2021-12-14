import ReactDatatime from "react-datetime";
import React from "react";
import {
    Button,
    Card,
    CardHeader,
    CardBody,
    FormGroup,
    Form,
    Input,
    Container,
    Row,
    Col,
    Modal

  } from "reactstrap";
  // core components
  import UserHeader from "components/Headers/UserHeader.js";
  import Navbar from "components/layout/Navbar";
  
  const Profile = () => {
    const [formModal, setFormModal] = React.useState(false);
  const [emailFocus, setEmailFocus] = React.useState(false);
  const [passwordFocus, setPasswordFocus] = React.useState(false);
    return (
      <>
      <Navbar/>
        <UserHeader />
        {/* Page content */}
        <Modal
            modalClassName="modal-black"
            isOpen={formModal}
            toggle={() => setFormModal(false)}
          >
            <div className="modal-header justify-content-center">
              <button className="close" onClick={() => setFormModal(false)}>
                <i className="tim-icons icon-simple-remove text-white" />
              </button>
              <div className="text-muted text-center ml-auto mr-auto">
                <h3 className="mb-0">Aqui puedes editar tus datos</h3>
              </div>
            </div>
            <div className="modal-body">
              <div className="btn-wrapper text-center">
               
              </div>
              
              <Form role="form">
                <FormGroup className="mb-3">
               
              <FormGroup>
                <Input defaultValue="" placeholder="Nombre" type="text" />
              </FormGroup>
              <FormGroup>
                <Input defaultValue="" placeholder="Contraseña actual" type="text" />
              </FormGroup>
              <FormGroup>
                <Input defaultValue="" placeholder="Nueva Contraseña" type="text" />
              </FormGroup>
              <FormGroup>
                <Input defaultValue="" placeholder="Provincia" type="text" />
              </FormGroup>
              <div className="text-muted text-center ml-auto mr-auto">
                <h3 className="mb-0">Datos de profesor</h3>
              </div>
              <FormGroup>
                <Input defaultValue="" placeholder="Descripcion" type="text" />
              </FormGroup>
              <FormGroup>
                <Input defaultValue="" placeholder="Nivel" type="text" />
              </FormGroup>
              <FormGroup>
                <Input defaultValue="" placeholder="Materia" type="text" />
              </FormGroup>
              <FormGroup>
                <Input defaultValue="" placeholder="Honorarios" type="text" />
              </FormGroup>          
                </FormGroup>
               
                <div className="text-center">
                  <Button className="my-4" color="primary" type="button">
                    Guardar
                  </Button>
                </div>
              </Form>
            </div>
          </Modal>
        <Container className="mt--7" fluid>
          <Row>
            <Col className="order-xl-2 mb-5 mb-xl-0" xl="4">
              <Card className="card-profile shadow">
                <Row className="justify-content-center">
                  <Col className="order-lg-2" lg="3">
                    <div className="card-profile-image">
                      <a href="#pablo" onClick={(e) => e.preventDefault()}>
                        <img
                          alt="..."
                          className="rounded-circle"
                          src={
                            require("../../assets/img/julie.jpeg")
                              .default
                          }
                        />
                      </a>
                    </div>
                  </Col>
                </Row>
                <CardHeader className="text-center border-0 pt-8 pt-md-4 pb-0 pb-md-4">
                  <div className="d-flex justify-content-between">
                    <Button
                      className="mr-4"
                      color="info"
                      href="#pablo"
                      onClick={() => setFormModal(true)}
                      size="sm"
                    >
                      Editar perfil
                    </Button>
                  </div>
                </CardHeader>
                <CardBody className="pt-0 pt-md-4">
                  <Row>
                    <div className="col">
                      <div className="card-profile-stats d-flex justify-content-center mt-md-5">
                        <div>
                          <span className="heading">22</span>
                          <span className="description">Amigos</span>
                        </div>
                        <div>
                          <span className="heading">89</span>
                          <span className="description">Comentarios</span>
                        </div>
                      </div>
                    </div>
                  </Row>
                  <div className="text-center">
                    <h3>
                      Jessica Jones
                      <span className="font-weight-light">, 27</span>
                    </h3>
                    <div className="h5 font-weight-300">
                      <i className="ni location_pin mr-2" />
                      Formosa, Capital
                    </div>
                    <div className="h5 mt-4">
                      <i className="ni business_briefcase-24 mr-2" />
                      Solution Manager - Creative Tim Officer
                    </div>
                    <div>
                      <i className="ni education_hat mr-2" />
                      University of Computer Science
                    </div>
                    <hr className="my-4" />
                    <p>
                      Ryan — the name taken by Melbourne-raised, Brooklyn-based
                      Nick Murphy — writes, performs and records all of his own
                      music.
                    </p>
                  </div>
                </CardBody>
              </Card>
            </Col>
            <Col className="order-xl-1" xl="8">
              <Card className="bg-secondary shadow">
                  <Row className="align-items-center">
                    <Col xs="8">
                      <h3 className="mb-0">My account</h3>
                    </Col>
                    <Col md="4">
          </Col>
                    <Col className="text-right" xs="4">
                      <Button
                        color="primary"
                        href="#pablo"
                        onClick={(e) => e.preventDefault()}
                        size="sm"
                      >
                        Settings
                      </Button>
                    </Col>
                  </Row>
                <CardBody>
                  
                </CardBody>
              </Card>
            </Col>
          </Row>
        </Container>
      </>
    );
  };
  
  export default Profile;
  