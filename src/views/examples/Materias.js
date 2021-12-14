import React from "react";
import { useParams } from 'react-router';
import  { useEffect,useState } from 'react'
import 'animate.css';
import { Link } from 'react-router-dom';
import 'assets/css/tarjetas.css'
import {
  Button,
 
  Row,
  Col,
  UncontrolledCarousel,
} from "reactstrap";
import NavbarAtras from "components/layout/NavbarAtras";
import PacmanLoader from "react-spinners/PacmanLoader";
import { css } from "@emotion/react";


const override = css`
  display: block;
  margin: 0 auto;
  border-color: red;
`;

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

export default function Materias() {
  const [cargando, setCargando] = useState(false);

  useEffect(() => {
    setCargando(true)
    
   
  }, [])
  React.useEffect(() => {
    document.body.classList.toggle("landing-page");
    // Specify how to clean up after this effect:
    return function cleanup() {
      document.body.classList.toggle("landing-page");
    };
  },[]);

const url = "https://proyec-back.herokuapp.com/materias/get";

const [stateMaterias, setStateMaterias] = useState([])

const fetchDataProfesionales = async () => {
    try {
        const peticion = await fetch(url)
        const res = await peticion.json()
        //console.log(res)
        setStateMaterias(res)
    } catch (error) {console.log(error)}
}

useEffect(() => {
    fetchDataProfesionales()
},[])

if ( !stateMaterias) {

  return(null)
  
}

  return (
  <>
        <NavbarAtras/>
        <br></br>
    <div class="container-login100" >
       <Col lg="500" md="500">
              <h5 className="text-on-back">MATERIAS</h5>
                  <span className="text-white"></span>
              </Col>

        <div class="container mt-2">
            <div class="row" id="data">

                {
                   stateMaterias.length > 0 ? stateMaterias.map(item => { 
                     
                     /* ingles */
                    if (item.materia=="baile") {
                      return(
                        
        <div className="content-center">
          <Row className="row-grid justify-content-between align-items-center text-left">
           
            <div class="card mx-5" style={{width: "18rem",textAlign:"center"}}>
           
                <img  
                src={require("assets/img/bailemate.gif").default  }></img>
            <div class="card-body">

            <Link  to={`/lista-prof/${item.materia}`}>

           <Button color="success" size="lg" >
           {item.materia}
            </Button>
            </Link>
            </div>
            </div>
          </Row>
        </div>
)
                    }

                   /*  arte */
                    if (item.materia=="arte") {
                      return(
                       
        <div className="content-center">
          <Row className="row-grid justify-content-between align-items-center text-left">
           
            <div class="card mx-5" style={{width: "18rem",textAlign:"center"}}>
           
                <img  
                src={require("assets/img/artemate.gif").default  }></img>
            <div class="card-body">

            <Link  to={`/lista-prof/${item.materia}`}>

           <Button color="success" size="lg" >
           {item.materia}
            </Button>
            </Link>
            </div>
            </div>
          </Row>
        </div>
)
                    }

                     /*  programacion */
                     if (item.materia=="programacion") {
                      return(
                       
        <div className="content-center">
          <Row className="row-grid justify-content-between align-items-center text-left">
           
            <div class="card mx-5" style={{width: "18rem",textAlign:"center"}}>
           
                <img  
                src={require("assets/img/progra.gif").default  }></img>
            <div class="card-body">

            <Link  to={`/lista-prof/${item.materia}`}>

           <Button color="success" size="lg" >
           {item.materia}
            </Button>
            </Link>
            </div>
            </div>
          </Row>
        </div>
)
                    }

                     /*  musica */
                     if (item.materia=="musica") {
                      return(
                       
        <div className="content-center">
          <Row className="row-grid justify-content-between align-items-center text-left">
           
            <div class="card mx-5" style={{width: "18rem",textAlign:"center"}}>
           
                <img  
                src={require("assets/img/musicaparti.gif").default  }></img>
            <div class="card-body">

            <Link  to={`/lista-prof/${item.materia}`}>

           <Button color="success" size="lg" >
           {item.materia}
            </Button>
            </Link>
            </div>
            </div>
          </Row>
        </div>
)
                    } 

                    /*  literatura */
                    if (item.materia=="astrologia") {
                      return(
                       
        <div className="content-center">
          <Row className="row-grid justify-content-between align-items-center text-left">
           
            <div class="card mx-5" style={{width: "18rem",textAlign:"center"}}>
           
                <img  
                src={require("assets/img/astrologia.gif").default  }></img>
            <div class="card-body">

            <Link  to={`/lista-prof/${item.materia}`}>

           <Button color="success" size="lg" >
           {item.materia}
            </Button>
            </Link>
            </div>
            </div>
          </Row>
        </div>
)
                    }

                    /*  biologia */
                    if (item.materia=="geografia") {
                      return(
                       
        <div className="content-center">
          <Row className="row-grid justify-content-between align-items-center text-left">
           
            <div class="card mx-5" style={{width: "18rem",textAlign:"center"}}>
           
                <img  
                src={require("assets/img/materiageo.gif").default  }></img>
            <div class="card-body">

            <Link  to={`/lista-prof/${item.materia}`}>

           <Button color="success" size="lg" >
           {item.materia}
            </Button>
            </Link>
            </div>
            </div>
          </Row>
        </div>
)
                    }

                          /*  basketball */
                          if (item.materia=="basketball") {
                            return(
                             
              <div className="content-center">
                <Row className="row-grid justify-content-between align-items-center text-left">
                 
                  <div class="card mx-5" style={{width: "18rem",textAlign:"center"}}>
                 
                      <img  
                      src={require("assets/img/basket.gif").default  }></img>
                  <div class="card-body">
      
                  <Link  to={`/lista-prof/${item.materia}`}>
      
                 <Button color="success" size="lg" >
                 {item.materia}
                  </Button>
                  </Link>
                  </div>
                  </div>
                </Row>
              </div>
      )
                          }

                                /*  karate */
                    if (item.materia=="karate") {
                      return(
                       
        <div className="content-center">
          <Row className="row-grid justify-content-between align-items-center text-left">
           
            <div class="card mx-5" style={{width: "18rem",textAlign:"center"}}>
           
                <img  
                src={require("assets/img/karate.gif").default  }></img>
            <div class="card-body">

            <Link  to={`/lista-prof/${item.materia}`}>

           <Button color="success" size="lg" >
           {item.materia}
            </Button>
            </Link>
            </div>
            </div>
          </Row>
        </div>
)
                    }

                          /*  literatura */
                          if (item.materia=="literatura") {
                            return(
                             
              <div className="content-center">
                <Row className="row-grid justify-content-between align-items-center text-left">
                 
                  <div class="card mx-5" style={{width: "18rem",textAlign:"center"}}>
                 
                      <img  
                      src={require("assets/img/litemate.gif").default  }></img>
                  <div class="card-body">
      
                  <Link  to={`/lista-prof/${item.materia}`}>
      
                 <Button color="success" size="lg" >
                 {item.materia}
                  </Button>
                  </Link>
                  </div>
                  </div>
                </Row>
              </div>
      )
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
    </>  
    )



  


}
