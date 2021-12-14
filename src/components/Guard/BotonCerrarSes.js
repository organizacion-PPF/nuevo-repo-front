import React from 'react'
import { Link } from "react-router-dom";
import {
  Button,
  NavLink,
  Modal
} from "reactstrap";

export const BotonCerrarSes = () => {

  const [miniModal, setMiniModal] = React.useState(false);
    

  //Usamos RemoveItem para eliminar el token del localStorage
  const logaut = () => {
	window.localStorage.removeItem('LoginPage')
    window.location.href="/home-page"
	}

    return (
        <li class="nav-item active mx-2">
          <button class ="btn btn-warning"  onClick = {logaut} onClick={() => setMiniModal(true)}  ><i class='bx bxs-log-out'></i>
            CERRAR 
          </button>
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
              <NavLink tag={logaut} to="/home-page">
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
        </li>
      )
}