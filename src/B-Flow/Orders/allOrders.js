import React, { useContext } from "react";
import { Context } from "../../store/AppContext.js";
import NavBar from '../NavBar/navBar.js';
import { Link } from "react-router-dom";



const AllOrders = (props) => {

  const { store, actions } = useContext(Context)

  return (


    <div class="pb-5">
      <NavBar />

      <div className="container pt-5">
        <table class="table">
          <thead>
            <tr>

              <th scope="col">ID Factura</th>
              <th scope="col">ID Despacho</th>
              <th scope="col">Prodcutos</th>
              <th scope="col">Courrier</th>
              <th scope="col">Precio</th>
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
                    <td>{order.office_id}</td>
                    <td>{order.products}</td>
                    <td>{order.courrier}</td>
                    <td>{order.price}</td>
                    <td><button className="btn btn-danger" onClick={() => actions.deleteOrder(order.id)}>Borrar</button></td>
                    <td><Link to={"/tracking"}> Confirmar</Link></td>
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