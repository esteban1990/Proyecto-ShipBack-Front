import React, { useContext, useEffect } from "react";
import { Context } from "../../store/AppContext.js";
import NavBar from '../NavBar/navBar.js';
import { Link } from "react-router-dom";



const AllOrders = (props) => {

  const { store, actions } = useContext(Context)

  useEffect(() =>{
    actions.listarOrdenes();
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
              <th scope="col">Borrar</th>
              <th scope="col">Confirmar</th>
            </tr>
          </thead>
          <tbody>
            {
              store.allorders.length > 0 &&
              store.allorders.map((order, i) => {
                return (

                  <tr key={i}>
                    <th scope="row">{order.invoice_id}</th>
                    <td>{order.id}</td>
                    <td>{order.office_id}</td>
                    <td>{order.products}</td>
                    <td>{order.courrier}</td>
        
                    <td><button className="btn btn-danger" onClick={() => actions.deleteOrder(order.invoice_id)}>Borrar</button></td>
                    <td><button className="btn btn-success" onClick={() =>actions.confirmOrder(order.invoice_id,props.history)}>Confirmar</button></td>
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

export default AllOrders;