import React, {useContext, useEffect} from "react"
import { Context } from "../../store/AppContext.js";
import {Link} from "react-router-dom";
import NavBar from '../NavBar/navBar.js';

const Admi_Usuario = (props) => {

const {store, actions} = useContext(Context)
useEffect(() =>{
    //funcion creada de registro de usuario de Orlando donde llama a la funcion registration(history),
    // deberia de tener una lista de registros?
  //  actions.registration(history);
    //funcion llamada del flux
    actions.listarUsuarios();
  },[] )
    return (


        <div class="pb-5">
          <NavBar />
    
          <div className="container pt-5">
            <div className="row d-flex justify-content-center pb-5">
              <div className="col-4">
              <button className="btn btn-primary"> <Link to={"/newUser"}>Agregar Usuario</Link></button>
           
              </div>
            </div>
            <table class="table">
              <thead>
                <tr>
                
                  <th scope="col">ID </th>
                  <th scopre="col">Nombre</th>
                  <th scope="col">Apellido</th>
                  <th scope="col">Email</th>
                  <th scope="col">Borrar</th>
                  <th scope="col">Editar</th>


         

                </tr>
              </thead>
              <tbody>
                {
                  store.user_data.length > 0 &&
                  store.user_data.map((user, i) => {
                    return (
    
                      <tr key={i}>
                        <th scope="row">{user.id}</th>
                        <td>{user.firstname}</td>
                        <td>{user.lastname}</td>
                        <td>{user.email}</td>
                        <td><button className="btn btn-danger" onClick={() => actions.deleteUser_Admin(user.id)}>Borrar</button></td>
                        <td><button className="btn btn-primary"> <Link to={"/update_user/" + user.id}>Editar Usuario</Link></button></td>   
      
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
    
export default Admi_Usuario;


