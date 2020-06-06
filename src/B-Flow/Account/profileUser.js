import React,{useContext, useState} from "react";
import {Context} from "../../store/AppContext";
import { Link } from "react-router-dom";

const ProfileUser = (props) => {

const {store,actions} = useContext(Context);



const handleSubmit = (e) =>{
    e.preventDefault();
    if(store.email==="" || store.name==="" || store.lastname==="" || store.password===""
    || store.confirmPassword===""){
        alert("se deben llenar todos los campos")
        return
    }
}

    return (
   
        <div className="container">
            <div className="row mt-5">
                <div className="col-3">
                    <h3 className="mb-3">Settings</h3>
                    <div className="card">
                        <div className="card-body">
                           <Link to="/settings"><a className="nav-link" href="#">General</a>
                           </Link>
                            <br />
                            <a className="nav-link" href="#">My Profile</a>
                            <br />
                          <Link to="/navbar/settings/users"><a className="nav-link" href="#">Users</a>
                          </Link>
                            <br />
                            <Link to="/navbar/settings/orderStatus"><a className="nav-link" href="#">Notifications</a>
                            </Link>
                            <br/>
                            <Link to="/navbar/settings/carriers"><a className="nav-link" href="#">Carriers</a>
                            </Link>
                        </div>


                    </div>

                </div>
                <div className="col-9">
                    <div className="container">
                        <h4>My Profile</h4>
                        <div className="card mb-5">
                            <div className="card-body">
                                <form onSubmit={handleSubmit} >
                            <div className="row">
                                <div className="col">
                                    <label class="form-label">Email</label>
                                    <input type="text" class="form-control" name="email"  onChange={actions.handleChange}></input>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col">
                                    <label class="form-label">First Name</label>
                                    <input type="text" class="form-control" name="name"  onChange={actions.handleChange}></input>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col">
                                    <label class="form-label">Last Name</label>
                                    <input type="text" class="form-control" name="lastame" onChange={actions.handleChange}></input>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col">
                                    <label class="form-label">New Password</label>
                                    <input type="password" class="form-control" name="password" onChange={actions.handleChange}></input>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col">
                                    <label class="form-label">Password Confirmation</label>
                                    <input type="password" class="form-control" name="confirmPassword" onChange={actions.handleChange}></input>
                                </div>
                            </div>
                    
                            </form>

                            <div className="row mt-5 justify-content-center">
                            <div className="col-5">
                                <button type="submit" class="btn btn-primary" onClick={e => actions.editUser(props.history)}>Update</button>
                                <button type="submit" class="btn btn-primary" onClick={e => actions.createUserSettings(props.history)}>Update</button>
                            </div>
                            </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
    )
}

export default ProfileUser;