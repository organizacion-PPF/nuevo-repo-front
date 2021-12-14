import React from "react";
// react plugin used to create charts
import 'assets/css/homePage.css'
// reactstrap components
import {
 
  Row,
  Col,
  UncontrolledCarousel,
} from "reactstrap";

// core components

import Navbarr from "components/layout/Navbar";


const carouselItems = [
  {
    src: require("assets/img/denys.jpg").default,
    altText: "Slide 1",
    caption: "",
  },
  {
    src: require("assets/img/fabien-bazanegue.jpg").default,
    altText: "Slide 2",
    caption: "",
  },
  {
    src: require("assets/img/mark-finn.jpg").default,
    altText: "Slide 3",
    caption: "",
  },
];

export default function HomePage() {
  React.useEffect(() => {
    document.body.classList.toggle("/home-page");
    // Specify how to clean up after this effect:
    return function cleanup() {
      document.body.classList.toggle("/home-page");
    };
  },[]);
  return (
    <>
      <Navbarr/>
    
      <div className="wrapper">
        <div className="page-header">
          
          <img
            alt="..."
            className="shapes triangle"
            src={require("assets/img/triunghiuri.png").default}
          />
          <img
            alt="..."
            className="shapes wave"
            src={require("assets/img/waves.png").default}
          />
         
          
          <div className="content-center">
            <Row className="row-grid justify-content-between align-items-center text-left">
            <Col lg="6" md="6">
            
            <h5 className="text-on-back">BIENVENIDO</h5>
           
          </Col>
          <Col lg="7" md="8" style={{display:"block",margin:"auto"}}>
          <UncontrolledCarousel
                items={carouselItems}
                indicators={false}
                autoPlay={false}
              />
              </Col>

            </Row>
            
          </div>
         
        </div>
      
        <section className="section section-lg">
         
       
          <div className="page-header">
        
          <div className="content-center">
            <Row className="row-grid justify-content-between align-items-center text-left">
              <Col lg="5" md="2">
                <h1 className="text-white">
                        ¿Que es ?<br />
                  <span className="text-white">Les´t Teach</span>
                </h1>
                <p className="text-white mb-3">
                   Somos la plataforma que conecta alumnos con profes particulares.
                </p>
                <h4>
                ✅ Registrate gratis
                </h4>
                <h4>
                ✅ Buscá eso que te gustaría aprender
                </h4>
                <h4>
                ✅ ¡Conectá con expertos!
                </h4>
                <p className="text-white mb-3">
                Encontrá clases, cursos y talleres de todas las temáticas. Desde apoyo estudiantil hasta arte, música, deportes, idiomas, hobbies, tecnología y capacitación profesional.
                ¡Aprovechá tu tiempo con las actividades que te gusten, encontrando hobbies y hasta sumando nuevas habilidades!
                </p>
               
              </Col>

              <Col lg="5" md="2">
                <h1 className="text-white">
                Enseñá<br />
                  <span className="text-white">eso que te apasiona</span>
                </h1>
                <p>
                 
               ¿Sos experto tocando un instrumento, bilingüe en algún idioma, estudiante avanzado o profesional?

               Publicá tus clases y sumate a nuestra comunidad de profesores. Inscribirte es gratis y vos ponés el precio
               de tus clases. Manejá tus horarios como quieras desde el calendario en tiempo real y conseguí nuevos alumnos.
                </p>
              </Col>



              <Col lg="6" md="7">
              <UncontrolledCarousel
                items={carouselItems}
                indicators={false}
                autoPlay={false}
              />
            </Col>
            </Row>
          </div>
        </div>
        
        </section>
       
      </div>
    </>
  );
}
