import React, { useContext, useEffect } from "react";
import { Context } from "../../store/AppContext.js";
import NavBar from '../NavBar/navBar.js';
import { Link } from "react-router-dom";



const Tracking = (props) => {

  const { store, actions } = useContext(Context)

  useEffect(() =>{
    actions.listarOrdenesConfirmadas();
 },[] )
  return (


    <div class="pb-5">
      <NavBar />

      <div className="container pt-5">
        <table class="table">
          <thead>
            <tr>
            
              <th scope="col">ID Factura</th>
              <th scopre="col">ID Order</th>
              <th scope="col">ID Despacho</th>
              <th scope="col">Productos</th>
              <th scope="col">Courrier</th>
            </tr>
          </thead>
          <tbody>
            {
              store.confirmedorders.length > 0 &&
              store.confirmedorders.map((order, i) => {
                return (

                  <tr key={i}>
                    <th scope="row">{order.invoice_id}</th>
                    <td>{order.id}</td>
                    <td>{order.office_id}</td>
                    <td>{order.products}</td>
                    <td>{order.courrier}</td>
        
                  </tr>
                )
              })
            }
          </tbody>
        </table>
      </div>
    </div>

  )
}

export default Tracking;