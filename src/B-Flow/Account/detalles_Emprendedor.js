import React, { useContext, useEffect } from "react";
import NavBar from '../NavBar/navBar.js'; 
import { Link } from "react-router-dom"
import { Context } from "../../store/AppContext.js";


const Detalles_Emprendedor = (props) => {
  
  const { store, actions } = useContext(Context)

  useEffect(() =>{
  actions.listarSenderDetails();
  },[] )


  return (
    <div class="pb-5">
    <NavBar />

    <div className="container pt-5">
      <table class="table">
        <thead>
          <tr>
            <th scope="col">ID</th>
            <th scope="col">Store Name</th>
            <th scopre="col">Contact Name</th>
            <th scope="col">Company Name</th>
            <th scope="col">Contact Phone</th>
            <th scope="col">Industry</th>
            <th scope="col">Email Contact</th>
            <th scope="col">Address</th>
            <th scope="col">City</th>
            <th scope="col">Edit Your Details</th>

          </tr>
        </thead>
        <tbody>
          {
            store.allSenderDetails.length > 0 &&
            store.allSenderDetails.map((detail, i) => {
              return (

                <tr key={i}>
                  <th scope="row">{detail.id}</th>
                  <td>{detail.storeName}</td>
                  <td>{detail.contactName}</td>
                  <td>{detail.companyName}</td>
                  <td>{detail.contactPhone}</td>
                  <td>{detail.industry}</td>
                  <td>{detail.emailContact}</td>
                  <td>{detail.address}</td>
                  <td>{detail.city}</td>
                  <td><button className="btn btn-primary" onClick={() =>actions.editSenderDetails()}><Link to={"/settings"}>Edit</Link></button></td>
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


export default Detalles_Emprendedor;