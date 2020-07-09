import React from "react"
import { useContext } from "react";
import {Link} from "react-router-dom";
import NavBar from '../NavBar/navBar.js'; 
import { Context } from "../../store/AppContext.js";



const Detalle_UsuariosEmprendedor = (props) => {

    const {store,actions} = useContext(Context)
  //  useEffect(() =>{
    //  actions.allEmployeds();
   // },[] )


    return (
        <div class="pb-5">
        <NavBar />
    
        <div className="container pt-5">
          <table class="table">
            <thead>
              <tr>
                <th scope="col">ID Employed</th>
                <th scope="col">Email</th>
                <th scopre="col">First Name</th>
                <th scope="col">Lastname</th>
                <th scope="col">Password</th>
                <th scope="col">Confirm Password</th>
                <th scope="col">Edit Your User Details</th>
    
              </tr>
            </thead>
            <tbody>
              {
                store.listAllEmployeds > 0 &&
                store.listAllEmployeds.map((employed, i) => {
                  return (
    
                    <tr key={i}>
                      <th scope="row">{employed.id}</th>
                      <td>{employed.email}</td>
                      <td>{employed.firstName}</td>
                      <td>{employed.lastName}</td>
                      <td>{employed.password}</td>
                      <td>{employed.confirmPassword}</td>
                      <td><button className="btn btn-primary" onClick={() =>actions.editSenderDetails()}><Link to={"/settings"}>Edit your Details</Link></button></td>
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


export default Detalle_UsuariosEmprendedor;