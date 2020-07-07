import React, {useContext, useEffect} from "react"
import { Context } from "../../store/AppContext.js";
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
            <table class="table">
              <thead>
                <tr>
                
                  <th scope="col">ID </th>
                  <th scopre="col">Nombre</th>
                  <th scope="col">Apellido</th>
                  <th scope="col">Email</th>
                  <th scope="col">Borrar</th>
                  <th scope="col">Editar</th>
                  <th scope="col">Agregar</th>

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
                     <td><button className="btn btn-danger">Borrar</button></td>
                     <td><button className="btn btn-primary"></button></td>
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


