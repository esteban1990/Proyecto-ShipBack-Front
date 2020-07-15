import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import NavBar from '../NavBar/navBar.js';
import { Context } from "../../store/AppContext.js";



const Detalle_UsuariosEmprendedor = (props) => {

  const { store, actions } = useContext(Context)

  useEffect(() => {
    actions.allEmployees();
  }, [])


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
              <th scope="col">Edit Your User Details</th>
            </tr>
          </thead>
          <tbody>
            {
              store.listAllEmployees.length > 0 &&
              store.listAllEmployees.map((employee, i) => {
                return (

                  <tr key={i}>
                    <th scope="row">{employee.id}</th>
                    <td>{employee.employee_email}</td>
                    <td>{employee.employee_firstName}</td>
                    <td>{employee.employee_lastName}</td>
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