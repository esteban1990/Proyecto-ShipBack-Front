import React, { useContext, useEffect } from "react";
import { Context } from "../../store/AppContext.js";
import NavBar from '../NavBar/navBar.js';



const DetailCards = (props) => {

  const { store, actions } = useContext(Context)

  useEffect(() =>{
    actions.listar_BillingDetails();
 },[] )
  return (

    <div class="pb-5">
      <NavBar />

      <div className="container pt-5">
        <table class="table">
          <thead>
            <tr>
            
              <th scope="col">ID Billing Details</th>
              <th scopre="col">CardNumber</th>
              <th scope="col">CVV</th>
              <th scope="col">month</th>
              <th scope="col">year</th>
              <th scope="col">Borrar</th>
              <th scope="col">Confirmar</th>
            </tr>
          </thead>
          <tbody>
            {
              store.allList_BillingDetails.length > 0 &&
              store.allList_BillingDetails.map((billing, i) => {
                return (

                  <tr key={i}>
                    <th scope="row">{billing.id}</th>
                    <td>{billing.cardNumber}</td>
                    <td>{billing.cvv}</td>
                    <td>{billing.month}</td>
                    <td>{billing.year}</td>
        

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

export default DetailCards;