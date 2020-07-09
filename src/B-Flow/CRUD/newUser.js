import React, {useContext}from "react";
import { Context } from "../../store/AppContext.js";
import NavBar from '../NavBar/navBar.js';

const NewUser = (props) => {

    const { store, actions } = useContext(Context)

    return (

        <div>
        <NavBar />
        <div className="container pt-5 mb-5">
            <div classname="row">
                <div classname="col">
                    <div className="card">
                        <div classname="card-header">
                            <div className="card-body">
                                <form onSubmit={(e) => actions.createUser_Admin(e,props.history)}>
                                    <div className="row">
                                        <div className="col-12">
                                            <label for="" class="form-label"><h5>Nombre</h5></label>
                                            <p>Nombre</p>
                                            <input type="text" class="form-control" value={store.firstname} name="firstname" onChange={actions.handleChange}></input>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col">
                                            <label for="" class="form-label">Apellido</label>
                                            <input type="text" onChange={actions.handleChange} value={store.lastname} name="lastname" class="form-control"></input>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-6">
                                            <label for="" class="form-label">Email</label>
                                            <input type="email" onChange={actions.handleChange}  value={store.email} name="email"class="form-control"></input>
                                        </div>
                                        <div className="col-6">
                                            <label for="" class="form-label">Password</label>
                                            <input type="text" onChange={actions.handleChange} name="password" value={store.password} class="form-control"></input>
                                        </div>
                                    </div>
                                
                                    <div className="row justify-content-center pt-4">
                                        <div className="col-6">
                                           <button type="submit"
                                                className="btn btn-primary">Add User</button>
                                               
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



export default NewUser;


