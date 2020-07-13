import React from "react";
import { Context } from "../../store/AppContext";
import { useContext } from "react";
import NavBar from '../NavBar/navBar.js';
import { useParams } from "react-router";



const Update_User = (props) => {

const {store, actions} = useContext(Context)

let {id} = useParams
return (


    <div class="pb-5">
      <NavBar />
      <div className="container pt-5 mb-5">
            <div classname="row">
                <div classname="col">
                    <div className="card">
                        <div classname="card-header">
                            <div className="card-body">
                                <form>
                                    <div className="row">
                                        <div className="col-12">
                                            <label for="" class="form-label"><h5>Password</h5></label>
                                      
                                            <input type="text" class="form-control" value={store.password} name="password" onChange={actions.handleChange}></input>
                                        </div>
                                    </div>
                                
                                
                                    <div className="row justify-content-center pt-4">
                                        <div className="col-6">
                                           <button type="button"
                                                className="btn btn-primary" onClick={() => actions.editUser_Admin(id)}>Edit User Password</button>
                                               
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </div>

  )
}

export default Update_User;

