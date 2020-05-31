import React, { useContext } from 'react'

import { Link } from "react-router-dom";

import { Context } from "../store/AppContext.js";




const CambioDevolucion = () => {
  const { store } = useContext(Context);

  return (

    <>
      <nav className="navbar navbar-dark bg-dark mb-3 justify-content-center">
        <a className="navbar-brand  " href="#">
          <img src="/docs/4.4/assets/brand/bootstrap-solid.svg" width="30" height="30" class=" " alt="" />
         ShipBack
    </a>
      </nav>
      <div className="container">
        <div className="row">
          <div className="col">
            <h3 className="title">Revision del Pedido:</h3>

            <p>Revise que los datos esten correctos antes de enviar</p>

            <p>Productos a solicitar cambio o devolucion</p>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <table class="table table-dark">
              <thead>
                <tr>
                  <th scope="col">ID</th>
                  <th scope="col">Producto</th>
                  <th scope="col">Precio</th>

                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">2</th>
                  <td>Mark</td>
                  <td>Otto</td>

                </tr>
                <tr>
                  <th scope="row">3</th>
                  <td>Jacob</td>
                  <td>Thornton</td>

                </tr>
                <tr>
                  <th scope="row">4</th>
                  <td>Larry</td>
                  <td>the Bird</td>


                </tr>
              </tbody>
            </table>
          </div>
        </div>


        <div className="row">
          <div className="col">
            <h4 className="title">Accion a realizar:

            <div className="row">
                <div className="col">
                <Link className="navbar-brand" to="/change"><button type="button" class="btn btn-primary btn-lg btn-block">
                  Cambio
                  </button>
                  </Link>
                </div>
                <div className="col">
              <Link className="navbar-brand" to="/return"><button type="button" class="btn btn-primary btn-lg btn-block">
              Devolucion
              </button>
              </Link>
             
                </div>
              </div>
            </h4>
          </div>
        </div>
      </div>
    </>

  )

}
export default CambioDevolucion;