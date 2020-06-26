import React, { useContext, useState } from "react";
import { Context } from "../../store/AppContext.js";
import { Link } from "react-router-dom"
import NavBar from '../NavBar/navBar.js';

//CONTEXT y hooks
const Users = (props) => {

    const { store, actions } = useContext(Context)

    const [state, setState] = useState({
    email:"",
    name:"",
    lastname:"",
    phone:"",
    password:"",
    confirmPassword:"",

    })
    const handleSubmit = (e) => {
        e.preventDefault();
        if (store.email === "" || store.name === "" || store.lastname === "" || store.phone === ""
            || store.password === "" || store.confirmPassword === "") {
            alert("Se Deben llenar todos los campos")
        }
    }

    const handleChange= (e) => {
     e.preventDefault();
    setState({
     ...state,
    [e.target.name] : e.target.value
    })
    }


    return (
        <div>
            <NavBar />
            <div className="container ">
                <div className="row mt-5">
                    <div className="col-3">
                        <div className="card-header">
                            <h4 className="title" style={{ textAlign: 'center' }}>Settings</h4>
                        </div>

                        <div className="card">
                            <div className="card-body" >
                                <Link to="/settings"><a className="nav-link">General</a>
                                </Link>
                                <hr />
                                <a className="nav-link">Users</a>
                            </div>
                        </div>

                    </div>
                    <div className="col-9">
                        <div className="container">
                            <h4>Users</h4>

                            <div className="card  mb-5">
                                <form onSubmit={handleSubmit}>
                                    <div className="card-body">
                                        <div className="row mt-2">
                                            <div className="col-12">
                                                <label class="form-label">Email</label>
                                                <input type="email" class="form-control" name="email" value={store.email} onChange={actions.handleChange}></input>
                                            </div>

                                            
                                        </div>

                                        <div className="row mt-2">
                                            <div className="col-6">
                                                <label class="form-label">First Name</label>
                                                <input type="text" class="form-control" name="name" value={store.firstName} onChange={actions.handleChange}></input>
                                            </div>
                                            <div className="col-6">
                                                <label class="form-label">Last Name</label>
                                                <input type="text" class="form-control" name="lastname" value={store.lastName} onChange={actions.handleChange}></input>
                                            </div>
                                        </div>

                                        <div className="row mt-2">
                                            <div className="col-6">
                                                <label class="form-label">Password</label>
                                                <input type="password" class="form-control" name="password" value={store.password} onChange={actions.handleChange}></input>
                                            </div>
                                            <div className="col-6">
                                                <label class="form-label">Confirm Password</label>
                                                <input type="password" class="form-control" name="confirmPassword" value={store.confirmPassword}
                                                    onChange={actions.handleChange}></input>
                                            </div>
                                        </div>

                                        <div className="row pt-4" style={{justifyContent:'center'}}>
                                            <div className="col-6">
                                                <button type="button" onClick={e => actions.createUserSettings(props.history)} class="btn btn-primary">+Add User</button>
                                            </div>
                                        </div>
                                        <div className="row pt-4" style={{justifyContent:'center'}}>
                                            <div className="col-6">
                                                <button type="submit" onClick={e => actions.editUser(props.history)} class="btn btn-primary">UPDATE</button>
                                            </div>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Users